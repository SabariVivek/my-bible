// ===================================
// Bible Notes Documentation System
// ===================================
let pages = [];
let currentPageId = null;
let editMode = false;
let theme = localStorage.getItem('theme') || 'light';
// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize image lightbox
    window.imageLightbox = initImageLightbox();
    
    // Hide page loader after a short delay to ensure theme is applied
    const pageLoader = document.getElementById('page-loader');
    try {
        await loadPages();
        loadTheme();
        setupEventListeners();
        renderPageTree();
        initializeDragAndDrop();
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            // On mobile, show sidebar and welcome screen
            const sidebar = document.getElementById('sidebar');
            if (sidebar) sidebar.classList.add('open');
            showWelcomeScreen();
        } else {
            // On desktop, auto-load last viewed page or hide welcome screen
            if (pages.length > 0) {
                const lastPageId = localStorage.getItem('last-viewed-page');
                const lastPage = lastPageId ? findPageById(lastPageId) : null;
                if (lastPage && lastPage.type === 'page') {
                    viewPage(lastPageId);
                } else {
                    const firstPage = findFirstPage(pages);
                    if (firstPage) {
                        viewPage(firstPage.id);
                    }
                }
            }
        }
    } catch (error) {
        // Still setup event listeners even if loading fails
        loadTheme();
        setupEventListeners();
        renderPageTree();
        initializeDragAndDrop();
        showWelcomeScreen();
    } finally {
        // Hide loader after everything is ready
        setTimeout(() => {
            if (pageLoader) {
                pageLoader.classList.add('hidden');
                setTimeout(() => pageLoader.style.display = 'none', 300);
            }
        }, 100);
    }
});
// ===================================
// Data Management
// ===================================
async function loadPages() {
    // Always try loading from Supabase first for cross-device sync
    const loadedFromSupabase = await loadPagesFromSupabase();
    if (!loadedFromSupabase) {
        // Fallback to localStorage if Supabase load fails
        const stored = localStorage.getItem('bible-notes-pages');
        if (stored) {
            try {
                pages = JSON.parse(stored);
                // Try to save to Supabase if we loaded from localStorage
                setTimeout(() => savePagesToSupabase(), 1000);
            } catch (e) {
                pages = getDefaultPages();
            }
        } else {
            pages = getDefaultPages();
        }
    }
    // Don't keep localStorage backup - Supabase is primary storage
    // Only clear old localStorage data to free up space
    try {
        localStorage.removeItem('bible-notes-pages');
    } catch (e) {
    }
}
function savePages() {
    try {
        // Save only to Supabase - primary storage
        debouncedSupabaseSync();
    } catch (e) {
        showToast('Error saving pages', 'error');
    }
}
// Debounced Supabase sync - waits 2 seconds after last change before syncing
function debouncedSupabaseSync() {
    // Clear any existing timeout
    if (syncTimeout) {
        clearTimeout(syncTimeout);
    }
    // Set new timeout
    syncTimeout = setTimeout(async () => {
        // Wait if sync is already in progress
        if (syncInProgress) {
            setTimeout(() => debouncedSupabaseSync(), 1000); // Retry after 1 second
            return;
        }
        syncInProgress = true;
        const success = await savePagesToSupabase();
        syncInProgress = false;
        if (success) {
            showToast('Saved to cloud', 'success');
        } else {
            showToast('Save failed - will retry', 'warning');
        }
    }, 2000); // Wait 2 seconds after last change (faster than GitHub)
}
// ===================================
// Supabase Backend for Documentation
// ===================================
let supabaseDocsLoaded = false;
let syncTimeout = null; // For debouncing
let syncInProgress = false; // Track if sync is ongoing
async function loadPagesFromSupabase() {
    try {
        const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/${SUPABASE_CONFIG.tableName}?id=eq.main`, {
            headers: {
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`
            }
        });
        if (response.ok) {
            const data = await response.json();
            if (data && data.length > 0) {
                pages = data[0].pages || getDefaultPages();
                supabaseDocsLoaded = true;
                return true;
            }
        }
        pages = getDefaultPages();
        return false;
    } catch (error) {
        pages = getDefaultPages();
        return false;
    }
}
async function savePagesToSupabase() {
    try {
        const response = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/${SUPABASE_CONFIG.tableName}?id=eq.main`, {
            method: 'PATCH',
            headers: {
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
                pages: pages,
                last_updated: new Date().toISOString()
            })
        });
        if (response.ok) {
            return true;
        } else {
            const error = await response.text();
            return false;
        }
    } catch (error) {
        return false;
    }
}
async function manualSyncWithSupabase() {
    const syncBtn = document.getElementById('sync-btn');
    if (!syncBtn) return;
    // Show loading state
    syncBtn.disabled = true;
    syncBtn.style.opacity = '0.5';
    const originalHTML = syncBtn.innerHTML;
    syncBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
        </svg>
    `;
    try {
        // First load from Supabase
        const loadSuccess = await loadPagesFromSupabase();
        if (loadSuccess) {
            renderPageTree();
            showToast('Synced from cloud', 'success');
        }
        // Then save current state to Supabase
        const saveSuccess = await savePagesToSupabase();
        if (saveSuccess && !loadSuccess) {
            showToast('Synced to cloud', 'success');
        } else if (!saveSuccess && !loadSuccess) {
            showToast('Sync failed. Check console for details.', 'error');
        }
    } catch (error) {
        showToast('Sync failed: ' + error.message, 'error');
    } finally {
        // Restore button state
        syncBtn.disabled = false;
        syncBtn.style.opacity = '1';
        syncBtn.innerHTML = originalHTML;
    }
}
function getDefaultPages() {
    return [
        {
            id: generateId(),
            type: 'page',
            title: 'Welcome to Bible Notes',
            content: '<h2>Welcome to Bible Notes Documentation</h2><p>This is your personal documentation system for organizing Bible study notes, sermon notes, and theological resources.</p><h3>Getting Started</h3><p>Click the <strong>Create</strong> button in the sidebar to:</p><ul><li>Create new pages for your notes</li><li>Create folders to organize your content</li></ul><h3>Features</h3><ul><li>Rich text editor with formatting</li><li>Organize pages in folders</li><li>Drag and drop to reorder</li><li>Search functionality</li><li>Dark mode support</li><li>GitHub sync (admin mode only)</li></ul><h3>Admin Mode</h3><p>Click the site title <strong>5 times</strong> to activate admin mode. In admin mode:</p><ul><li>Your changes automatically sync to GitHub</li><li>Click the sync button (🔄) to manually sync</li><li>Your data is backed up to the cloud</li></ul><p>Regular users can use the app locally without admin mode - all data is saved to browser storage.</p>',
            children: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    ];
}
function generateId() {
    return 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}
function findPageById(id, items = pages) {
    for (let item of items) {
        if (item.id === id) return item;
        if (item.children && item.children.length > 0) {
            const found = findPageById(id, item.children);
            if (found) return found;
        }
    }
    return null;
}
function findFirstPage(items) {
    for (let item of items) {
        if (item.type === 'page') return item;
        if (item.children && item.children.length > 0) {
            const found = findFirstPage(item.children);
            if (found) return found;
        }
    }
    return null;
}
function findParentOfItem(itemId, items = pages, parent = null) {
    for (let item of items) {
        if (item.id === itemId) return parent;
        if (item.children && item.children.length > 0) {
            const found = findParentOfItem(itemId, item.children, item);
            if (found !== undefined) return found;
        }
    }
    return undefined;
}
function deleteItem(itemId) {
    function removeFromArray(items) {
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === itemId) {
                items.splice(i, 1);
                return true;
            }
            if (items[i].children && items[i].children.length > 0) {
                if (removeFromArray(items[i].children)) return true;
            }
        }
        return false;
    }
    removeFromArray(pages);
    savePages();
}
// ===================================
// Theme Management
// ===================================
function loadTheme() {
    document.body.classList.toggle('dark-theme', theme === 'dark');
}
async function toggleTheme(event) {
    const clickedButton = event.currentTarget;
    // Check if View Transition API is supported and user doesn't prefer reduced motion
    if (
        !document.startViewTransition ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
        // Fallback: toggle without animation
        document.body.classList.toggle('dark-theme');
        theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        // Update theme color
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'dark' ? '#1a1a1a' : '#ffffff');
        }
        return;
    }
    // Start view transition
    const transition = document.startViewTransition(() => {
        document.body.classList.toggle('dark-theme');
        theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        // Update theme color
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'dark' ? '#1a1a1a' : '#ffffff');
        }
    });
    // Wait for transition to be ready
    await transition.ready;
    // Get button position for circular reveal effect
    const { top, left, width, height } = clickedButton.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(
        Math.max(left, right),
        Math.max(top, bottom)
    );
    // Animate the circular reveal
    document.documentElement.animate(
        {
            clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${maxRadius}px at ${x}px ${y}px)`
            ]
        },
        {
            duration: 500,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)'
        }
    );
}
// ===================================
// Event Listeners
// ===================================
// Initialize sidebar resizer functionality
function initializeSidebarResizer() {
    // Skip on mobile devices
    if (window.innerWidth <= 768) return;
    const sidebar = document.querySelector('.sidebar');
    const resizer = document.getElementById('sidebar-resizer');
    if (!sidebar || !resizer) return;
    // Load saved width from localStorage
    const savedWidth = localStorage.getItem('sidebar-width');
    if (savedWidth) {
        sidebar.style.width = savedWidth + 'px';
    }
    let isResizing = false;
    let startX = 0;
    let startWidth = 0;
    // Start resize
    resizer.addEventListener('mousedown', (e) => {
        isResizing = true;
        startX = e.clientX;
        startWidth = sidebar.offsetWidth;
        // Add resizing class for visual feedback
        document.body.style.cursor = 'col-resize';
        resizer.style.backgroundColor = '#1a73e8';
        // Prevent text selection during resize
        e.preventDefault();
    });
    // Handle resize
    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        const deltaX = e.clientX - startX;
        let newWidth = startWidth + deltaX;
        // Apply constraints (min 200px, max 600px)
        newWidth = Math.max(200, Math.min(600, newWidth));
        sidebar.style.width = newWidth + 'px';
    });
    // End resize
    document.addEventListener('mouseup', () => {
        if (!isResizing) return;
        isResizing = false;
        // Remove visual feedback
        document.body.style.cursor = '';
        resizer.style.backgroundColor = '';
        // Save width to localStorage
        localStorage.setItem('sidebar-width', sidebar.offsetWidth);
    });
    // Handle window resize to disable on mobile
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            sidebar.style.width = '';
            localStorage.removeItem('sidebar-width');
        }
    });
}
function setupEventListeners() {
    // Sidebar resizer
    initializeSidebarResizer();
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    // Sync button
    const syncBtn = document.getElementById('sync-btn');
    if (syncBtn) {
        syncBtn.addEventListener('click', manualSyncWithSupabase);
    }
    // Mobile menu toggle
    const menuBtn = document.querySelector('.sidebar-toggle');
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleSidebar);
    }
    // Create buttons
    const createBtnDesktop = document.getElementById('create-btn-desktop');
    const welcomeCreateBtn = document.getElementById('welcome-create-btn');
    if (createBtnDesktop) createBtnDesktop.addEventListener('click', showCreateModal);
    if (welcomeCreateBtn) welcomeCreateBtn.addEventListener('click', showCreateModal);
    // Edit button
    const editBtn = document.getElementById('edit-btn');
    if (editBtn) editBtn.addEventListener('click', enterEditMode);
    // Title inputs - update page title in real-time
    const titleInputDesktop = document.getElementById('title-input');
    const titleInputMobile = document.getElementById('title-input-mobile');
    if (titleInputDesktop) {
        titleInputDesktop.addEventListener('input', (e) => {
            const pageTitle = document.getElementById('page-title');
            if (pageTitle) pageTitle.textContent = e.target.value || 'Untitled';
        });
    }
    if (titleInputMobile) {
        titleInputMobile.addEventListener('input', (e) => {
            const pageTitle = document.getElementById('page-title');
            if (pageTitle) pageTitle.textContent = e.target.value || 'Untitled';
        });
    }
    // Save buttons
    const saveBtnDesktop = document.getElementById('save-btn-desktop');
    const saveBtnMobile = document.getElementById('save-btn-mobile');
    if (saveBtnDesktop) saveBtnDesktop.addEventListener('click', savePage);
    if (saveBtnMobile) saveBtnMobile.addEventListener('click', savePage);
    // Cancel buttons
    const cancelBtnDesktop = document.getElementById('cancel-btn-desktop');
    const cancelBtnMobile = document.getElementById('cancel-btn-mobile');
    if (cancelBtnDesktop) cancelBtnDesktop.addEventListener('click', cancelEdit);
    if (cancelBtnMobile) cancelBtnMobile.addEventListener('click', cancelEdit);
    // Toolbar buttons (use data-action)
    document.querySelectorAll('.toolbar-btn[data-action]').forEach(btn => {
        btn.addEventListener('click', function() {
            executeCommand(this.dataset.action);
        });
    });
    // Heading select
    const headingSelect = document.getElementById('heading-select');
    if (headingSelect) headingSelect.addEventListener('change', formatHeading);
    // Color picker
    setupColorPicker();
    // Image upload
    const imageUpload = document.getElementById('image-upload');
    if (imageUpload) imageUpload.addEventListener('change', handleImageUpload);
    // Sidebar search
    const sidebarSearch = document.getElementById('sidebar-search');
    if (sidebarSearch) sidebarSearch.addEventListener('input', handleSidebarSearch);
    // Editor events
    const editor = document.getElementById('editor');
    if (editor) {
        editor.addEventListener('paste', handlePaste);
        editor.addEventListener('input', detectLinks);
        editor.addEventListener('keydown', handleEditorKeydown);
    }
    // Setup modals
    setupCreateModal();
    setupDeleteModal();
    setupRenameModal();
    setupModalCloseListeners();
    setupContextMenu();
}
function setupContextMenu() {
    const menu = document.getElementById('tree-context-menu');
    if (!menu) return;
    menu.addEventListener('click', (e) => {
        const menuItem = e.target.closest('.context-menu-item');
        if (!menuItem) return;
        const action = menuItem.dataset.action;
        const itemId = menu.dataset.itemId;
        const itemTitle = menu.dataset.itemTitle;
        menu.style.display = 'none';
        if (action === 'rename') {
            showRenameModal(itemId, itemTitle);
        } else if (action === 'delete') {
            showDeleteModal(itemId, itemTitle);
        }
    });
}
function setupModalCloseListeners() {
    document.querySelectorAll('.modal').forEach(modal => {
        const overlay = modal.querySelector('.modal-overlay');
        const closeBtns = modal.querySelectorAll('.modal-close');
        if (overlay) {
            overlay.addEventListener('click', () => closeModal(modal));
        }
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => closeModal(modal));
        });
    });
}
function setupCreateModal() {
    const createModal = document.getElementById('create-modal');
    if (!createModal) return;
    const folderOption = createModal.querySelector('.create-option[data-type="folder"]');
    const pageOption = createModal.querySelector('.create-option[data-type="page"]');
    const createBtn = document.getElementById('create-item-btn');
    const nameInput = document.getElementById('new-item-name');
    const nameInputGroup = document.getElementById('name-input-group');
    const modalFooter = createModal.querySelector('.modal-footer');
    let selectedType = null;
    if (folderOption) {
        folderOption.addEventListener('click', () => {
            selectedType = 'folder';
            folderOption.classList.add('selected');
            if (pageOption) pageOption.classList.remove('selected');
            if (nameInputGroup) nameInputGroup.style.display = 'block';
            if (modalFooter) modalFooter.style.display = 'flex';
            if (nameInput) {
                nameInput.focus();
                nameInput.select();
            }
        });
    }
    if (pageOption) {
        pageOption.addEventListener('click', () => {
            selectedType = 'page';
            pageOption.classList.add('selected');
            if (folderOption) folderOption.classList.remove('selected');
            if (nameInputGroup) nameInputGroup.style.display = 'block';
            if (modalFooter) modalFooter.style.display = 'flex';
            if (nameInput) {
                nameInput.focus();
                nameInput.select();
            }
        });
    }
    if (createBtn) {
        createBtn.addEventListener('click', () => {
            if (!selectedType) {
                showToast('Please select folder or page', 'error');
                return;
            }
            const name = nameInput?.value.trim();
            if (!name) {
                showToast('Please enter a name', 'error');
                return;
            }
            // Check if creating under a parent folder
            const parentId = createModal.dataset.parentId || null;
            createNewItem(selectedType, name, parentId);
            closeModal(createModal);
            // Reset modal
            if (nameInput) nameInput.value = '';
            if (nameInputGroup) nameInputGroup.style.display = 'none';
            if (modalFooter) modalFooter.style.display = 'none';
            if (folderOption) folderOption.classList.remove('selected');
            if (pageOption) pageOption.classList.remove('selected');
            selectedType = null;
            delete createModal.dataset.parentId;
        });
    }
    // Handle Enter key in name input
    if (nameInput) {
        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && selectedType) {
                createBtn.click();
            }
        });
    }
}
function setupDeleteModal() {
    const deleteModal = document.getElementById('delete-modal');
    if (!deleteModal) return;
    const confirmBtn = document.getElementById('delete-confirm-btn');
    const cancelBtn = document.getElementById('delete-cancel-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            const itemId = deleteModal.dataset.itemId;
            if (itemId) {
                deleteItem(itemId);
                if (currentPageId === itemId) {
                    currentPageId = null;
                    showWelcomeScreen();
                }
                renderPageTree();
                showToast('Deleted');
            }
            closeModal(deleteModal);
        });
    }
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => closeModal(deleteModal));
    }
}
function setupRenameModal() {
    const renameModal = document.getElementById('rename-modal');
    if (!renameModal) return;
    const confirmBtn = document.getElementById('confirm-rename-btn');
    const input = document.getElementById('rename-input');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', confirmRename);
    }
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                confirmRename();
            }
        });
    }
}
// ===================================
// Sidebar Functions
// ===================================
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        // Mobile: slide in/out behavior
        const isOpen = sidebar.classList.toggle('open');
        // Close sidebar when clicking outside on mobile
        if (isOpen) {
            const closeOnClickOutside = (e) => {
                if (!sidebar.contains(e.target) && !e.target.closest('.sidebar-toggle')) {
                    sidebar.classList.remove('open');
                    document.removeEventListener('click', closeOnClickOutside);
                }
            };
            setTimeout(() => {
                document.addEventListener('click', closeOnClickOutside);
            }, 0);
        }
    } else {
        // Desktop: collapse/expand behavior
        const isCollapsed = sidebar.classList.toggle('collapsed');
    }
}
function handleSidebarSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    const treeItems = document.querySelectorAll('.tree-item');
    if (query === '') {
        treeItems.forEach(item => item.style.display = '');
        return;
    }
    treeItems.forEach(item => {
        const name = item.querySelector('.tree-name');
        if (name) {
            const text = name.textContent.toLowerCase();
            item.style.display = text.includes(query) ? '' : 'none';
        }
    });
}
// ===================================
// Page Tree Rendering
// ===================================
function renderPageTree() {
    const treeContainer = document.getElementById('page-tree');
    if (!treeContainer) return;
    treeContainer.innerHTML = '';
    pages.forEach(item => {
        treeContainer.appendChild(createTreeItem(item));
    });
}
function createTreeItem(item, level = 0) {
    const li = document.createElement('li');
    li.className = 'tree-item';
    li.dataset.itemId = item.id;
    li.dataset.itemType = item.type;
    const header = document.createElement('div');
    header.className = 'tree-item-header';
    if (currentPageId === item.id) {
        header.classList.add('active');
    }
    const hasChildren = item.children && item.children.length > 0;
    // Check if this folder should be expanded from localStorage
    const expandedFolders = JSON.parse(localStorage.getItem('expanded-folders') || '[]');
    const shouldBeExpanded = expandedFolders.includes(item.id);
    // Toggle arrow for folders, spacer for pages
    if (item.type === 'folder') {
        const toggle = document.createElement('div');
        toggle.className = shouldBeExpanded ? 'tree-toggle expanded' : 'tree-toggle';
        toggle.innerHTML = `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        `;
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleTreeChildren(item.id);
        });
        header.appendChild(toggle);
    } else {
        // No bullet point for page items, just spacing
        const spacer = document.createElement('div');
        spacer.style.width = '12px';
        spacer.style.height = '12px';
        spacer.style.flexShrink = '0';
        header.appendChild(spacer);
    }
    // Icon
    const icon = document.createElement('div');
    icon.className = 'tree-icon';
    if (item.type === 'folder') {
        // Yellow folder icon
        icon.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#f9ab00" stroke="#f9ab00" stroke-width="1.5">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
        `;
    } else {
        // Regular page icon
        icon.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
        `;
    }
    header.appendChild(icon);
    // Name
    const name = document.createElement('div');
    name.className = 'tree-name';
    name.textContent = item.title;
    header.appendChild(name);
    // Actions
    const actions = document.createElement('div');
    actions.className = 'tree-actions';
    // Add button (only for folders)
    if (item.type === 'folder') {
        const addBtn = document.createElement('button');
        addBtn.className = 'tree-action-btn tree-add-btn';
        addBtn.title = 'Add to folder';
        addBtn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        `;
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showAddToFolderModal(item.id);
        });
        actions.appendChild(addBtn);
    }
    // Three dots menu button
    const menuBtn = document.createElement('button');
    menuBtn.className = 'tree-action-btn tree-menu-btn';
    menuBtn.title = 'More options';
    menuBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
        </svg>
    `;
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showTreeItemMenu(e, item);
    });
    actions.appendChild(menuBtn);
    header.appendChild(actions);
    // Click handler
    if (item.type === 'page') {
        header.addEventListener('click', () => {
            viewPage(item.id);
        });
    } else {
        header.addEventListener('click', () => {
            toggleTreeChildren(item.id);
        });
    }
    li.appendChild(header);
    // Children - always create container for folders (even if empty) to allow dropping
    if (item.type === 'folder') {
        const childrenUl = document.createElement('ul');
        childrenUl.className = shouldBeExpanded ? 'tree-children expanded' : 'tree-children';
        childrenUl.id = `children-${item.id}`;
        if (item.children && item.children.length > 0) {
            item.children.forEach(child => {
                childrenUl.appendChild(createTreeItem(child, level + 1));
            });
        }
        li.appendChild(childrenUl);
    }
    return li;
}
function toggleTreeChildren(itemId) {
    const childrenUl = document.getElementById(`children-${itemId}`);
    const toggle = document.querySelector(`[data-item-id="${itemId}"] .tree-toggle`);
    if (childrenUl) {
        const isExpanded = childrenUl.classList.toggle('expanded');
        // Save expanded state to localStorage
        const expandedFolders = JSON.parse(localStorage.getItem('expanded-folders') || '[]');
        if (isExpanded) {
            if (!expandedFolders.includes(itemId)) {
                expandedFolders.push(itemId);
            }
        } else {
            const index = expandedFolders.indexOf(itemId);
            if (index > -1) {
                expandedFolders.splice(index, 1);
            }
        }
        localStorage.setItem('expanded-folders', JSON.stringify(expandedFolders));
    }
    if (toggle) {
        toggle.classList.toggle('expanded');
    }
}
// ===================================
// Page Viewing
// ===================================
function showWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const pageView = document.getElementById('page-view');
    const pageEdit = document.getElementById('page-edit');
    if (welcomeScreen) welcomeScreen.style.display = 'flex';
    if (pageView) pageView.style.display = 'none';
    if (pageEdit) pageEdit.style.display = 'none';
    currentPageId = null;
    editMode = false;
    // Update active state
    document.querySelectorAll('.tree-item-header').forEach(h => h.classList.remove('active'));
}
// Convert plain text URLs to clickable links
function convertUrlsToLinks(html) {
    // Create a temporary container to work with HTML safely
    const container = document.createElement('div');
    container.innerHTML = html;
    
    // Function to process text nodes and convert URLs
    function processNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            // Match URLs in text (http/https and www patterns)
            const urlRegex = /(https?:\/\/[^\s<>]+|www\.[^\s<>]+)/g;
            const text = node.textContent;
            
            if (urlRegex.test(text)) {
                const fragment = document.createDocumentFragment();
                let lastIndex = 0;
                
                // Reset regex
                urlRegex.lastIndex = 0;
                let match;
                
                while ((match = urlRegex.exec(text)) !== null) {
                    // Add text before the URL
                    if (match.index > lastIndex) {
                        fragment.appendChild(document.createTextNode(text.substring(lastIndex, match.index)));
                    }
                    
                    // Create link
                    const link = document.createElement('a');
                    let url = match[0];
                    // Add https:// to www URLs if not already present
                    if (url.startsWith('www.')) {
                        link.href = 'https://' + url;
                    } else {
                        link.href = url;
                    }
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.textContent = url;
                    
                    // Apply CSS for intelligent wrapping on long URLs
                    link.style.display = 'inline-block';
                    link.style.wordBreak = 'break-word';
                    link.style.overflowWrap = 'break-word';
                    link.style.maxWidth = '100%';
                    
                    fragment.appendChild(link);
                    
                    lastIndex = urlRegex.lastIndex;
                }
                
                // Add remaining text
                if (lastIndex < text.length) {
                    fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
                }
                
                // Replace node with fragment
                node.parentNode.replaceChild(fragment, node);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Skip processing links and code blocks
            if (['A', 'CODE', 'PRE', 'SCRIPT', 'STYLE'].indexOf(node.tagName) === -1) {
                // Process child nodes (need to use array to avoid issues with live collection)
                const childNodes = Array.from(node.childNodes);
                childNodes.forEach(child => processNode(child));
            }
        }
    }
    
    processNode(container);
    return container.innerHTML;
}

function viewPage(pageId) {
    const page = findPageById(pageId);
    if (!page || page.type !== 'page') {
        return;
    }
    currentPageId = pageId;
    editMode = false;
    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.classList.remove('open');
        }
    }
    const welcomeScreen = document.getElementById('welcome-screen');
    const pageView = document.getElementById('page-view');
    const pageEdit = document.getElementById('page-edit');
    if (welcomeScreen) welcomeScreen.style.display = 'none';
    if (pageView) pageView.style.display = 'block';
    if (pageEdit) pageEdit.style.display = 'none';
    // Update breadcrumb
    updateBreadcrumb(pageId);
    // Update page content
    const pageTitle = document.getElementById('page-title');
    const pageContent = document.getElementById('page-content');
    if (pageTitle) {
        pageTitle.textContent = page.title;
        
        // Add heading icon before the page title in page-view-header
        const pageViewHeader = pageTitle.closest('.page-view-header');
        if (pageViewHeader) {
            // Remove any existing icons first to avoid duplicates
            const existingIcons = pageViewHeader.querySelectorAll('img[src*="heading"]');
            existingIcons.forEach(img => img.remove());
            
            // Create and add new icon
            const icon = document.createElement('img');
            icon.src = '../resources/icons/heading.png';
            icon.alt = 'Heading icon';
            icon.style.width = '25px';
            icon.style.height = '25px';
            icon.style.display = 'inline-block';
            icon.style.verticalAlign = 'middle';
            icon.style.flexShrink = '0';
            pageTitle.parentElement.insertBefore(icon, pageTitle);
        }
    }
    if (pageContent) {
        const contentWithLinks = convertUrlsToLinks(page.content || '<p>This page is empty. Click Edit to add content.</p>');
        pageContent.innerHTML = contentWithLinks;
        
        // Setup image lightbox handlers for page content
        if (window.imageLightbox) {
            window.imageLightbox.setupHandlers(pageContent);
        }
    }
    // Update active state
    document.querySelectorAll('.tree-item-header').forEach(h => h.classList.remove('active'));
    const activeHeader = document.querySelector(`[data-item-id="${pageId}"] .tree-item-header`);
    if (activeHeader) {
        activeHeader.classList.add('active');
    }
    // Save last viewed
    localStorage.setItem('last-viewed-page', pageId);
    // Highlight code blocks
    if (window.hljs) {
        document.querySelectorAll('#page-content pre code').forEach(block => {
            hljs.highlightElement(block);
        });
    }
}
function updateBreadcrumb(pageId) {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;
    const path = [];
    let current = findPageById(pageId);
    while (current) {
        path.unshift(current);
        const parent = findParentOfItem(current.id);
        current = parent;
    }
    breadcrumb.innerHTML = '';
    path.forEach((item, index) => {
        if (index > 0) {
            const separator = document.createElement('span');
            separator.className = 'breadcrumb-separator';
            separator.textContent = '/';
            breadcrumb.appendChild(separator);
        }
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'breadcrumb-item';
        link.textContent = item.title;
        if (item.type === 'page') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                viewPage(item.id);
            });
        }
        breadcrumb.appendChild(link);
    });
}
// ===================================
// Page Editing
// ===================================
function enterEditMode() {
    if (!currentPageId) return;
    const page = findPageById(currentPageId);
    if (!page || page.type !== 'page') return;
    editMode = true;
    const welcomeScreen = document.getElementById('welcome-screen');
    const pageView = document.getElementById('page-view');
    const pageEdit = document.getElementById('page-edit');
    if (welcomeScreen) welcomeScreen.style.display = 'none';
    if (pageView) pageView.style.display = 'none';
    if (pageEdit) pageEdit.style.display = 'flex';
    // Populate editor
    const titleInputDesktop = document.getElementById('title-input');
    const titleInputMobile = document.getElementById('title-input-mobile');
    const editor = document.getElementById('editor');
    if (titleInputDesktop) titleInputDesktop.value = page.title;
    if (titleInputMobile) titleInputMobile.value = page.title;
    if (editor) {
        editor.innerHTML = page.content || '';
        editor.focus();
        
        // Setup image lightbox handlers for editor
        if (window.imageLightbox) {
            window.imageLightbox.setupHandlers(editor);
        }
    }
}
function savePage() {
    if (!currentPageId) return;
    const page = findPageById(currentPageId);
    if (!page || page.type !== 'page') return;
    const titleInputDesktop = document.getElementById('title-input');
    const titleInputMobile = document.getElementById('title-input-mobile');
    const editor = document.getElementById('editor');
    // Get title from the visible input
    let newTitle = '';
    const isMobile = window.innerWidth <= 768;
    if (isMobile && titleInputMobile) {
        newTitle = titleInputMobile.value.trim();
    } else if (!isMobile && titleInputDesktop) {
        newTitle = titleInputDesktop.value.trim();
    } else {
        // Fallback: try both
        newTitle = (titleInputDesktop?.value || titleInputMobile?.value || '').trim();
    }
    const newContent = editor?.innerHTML || '';
    if (!newTitle) {
        showToast('Please enter a title', 'error');
        return;
    }
    page.title = newTitle;
    page.content = newContent;
    page.updatedAt = new Date().toISOString();
    savePages();
    renderPageTree();
    viewPage(currentPageId);
    showToast('Saved');
}
function cancelEdit() {
    if (currentPageId) {
        viewPage(currentPageId);
    } else {
        showWelcomeScreen();
    }
}
// ===================================
// Toolbar Commands
// ===================================
function executeCommand(command) {
    const editor = document.getElementById('editor');
    if (!editor) return;
    editor.focus();
    switch (command) {
        case 'bold':
            document.execCommand('bold', false, null);
            break;
        case 'italic':
            document.execCommand('italic', false, null);
            break;
        case 'underline':
            document.execCommand('underline', false, null);
            break;
        case 'insertUnorderedList':
            document.execCommand('insertUnorderedList', false, null);
            break;
        case 'insertOrderedList':
            document.execCommand('insertOrderedList', false, null);
            break;
        case 'createLink':
            insertLink();
            break;
        case 'insertImage':
            document.getElementById('image-upload')?.click();
            break;
        case 'insertTable':
            insertTable();
            break;
        case 'insertCode':
            insertCodeBlock();
            break;
        case 'insertHorizontalRule':
            document.execCommand('insertHorizontalRule', false, null);
            break;
    }
}
function formatHeading() {
    const select = document.getElementById('heading-select');
    if (!select) return;
    const value = select.value;
    if (value === 'p') {
        document.execCommand('formatBlock', false, '<p>');
    } else {
        document.execCommand('formatBlock', false, `<${value}>`);
    }
    select.value = 'p';
}
function setupColorPicker() {
    const colorPickerBtn = document.getElementById('color-picker-btn');
    const colorPickerDropdown = document.getElementById('color-picker-dropdown');
    const removeColorBtn = document.getElementById('remove-color-btn');
    if (!colorPickerBtn || !colorPickerDropdown) return;
    // Toggle dropdown
    colorPickerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = colorPickerDropdown.style.display === 'block';
        colorPickerDropdown.style.display = isVisible ? 'none' : 'block';
    });
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.color-picker-container')) {
            colorPickerDropdown.style.display = 'none';
        }
    });
    // Handle color button clicks
    colorPickerDropdown.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const type = btn.dataset.type;
            const color = btn.dataset.color;
            if (color === 'reset') {
                if (type === 'text') {
                    document.execCommand('removeFormat', false, null);
                } else {
                    document.execCommand('removeFormat', false, null);
                }
            } else {
                if (type === 'text') {
                    document.execCommand('foreColor', false, color);
                } else {
                    document.execCommand('hiliteColor', false, color);
                }
            }
            colorPickerDropdown.style.display = 'none';
        });
    });
    // Remove color button
    if (removeColorBtn) {
        removeColorBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.execCommand('removeFormat', false, null);
            colorPickerDropdown.style.display = 'none';
        });
    }
}
function insertLink() {
    const url = prompt('Enter URL:');
    if (url) {
        document.execCommand('createLink', false, url);
    }
}
function insertTable() {
    const rows = prompt('Number of rows:', '3');
    const cols = prompt('Number of columns:', '3');
    if (rows && cols) {
        let table = '<table><tbody>';
        for (let i = 0; i < parseInt(rows); i++) {
            table += '<tr>';
            for (let j = 0; j < parseInt(cols); j++) {
                table += i === 0 ? '<th>Header</th>' : '<td>Cell</td>';
            }
            table += '</tr>';
        }
        table += '</tbody></table>';
        document.execCommand('insertHTML', false, table);
    }
}
function insertCodeBlock() {
    const code = prompt('Enter code:');
    if (code) {
        const html = `<pre><code>${escapeHtml(code)}</code></pre>`;
        document.execCommand('insertHTML', false, html);
    }
}
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
// ===================================
// Image Upload
// ===================================
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
        showToast('Please select an image file', 'error');
        return;
    }
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = `<img src="${event.target.result}" alt="${file.name}" />`;
        document.execCommand('insertHTML', false, img);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
}
// ===================================
// Paste & Links
// ===================================
function handlePaste(e) {
    e.preventDefault();
    const clipboardData = e.clipboardData || window.clipboardData;
    const htmlData = clipboardData.getData('text/html');
    const textData = clipboardData.getData('text/plain');
    if (htmlData) {
        const cleaned = cleanPastedHtml(htmlData);
        document.execCommand('insertHTML', false, cleaned);
    } else if (textData) {
        document.execCommand('insertHTML', false, textData.replace(/\n/g, '<br>'));
    }
}
function cleanPastedHtml(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    // Remove only dangerous elements
    div.querySelectorAll('script, style, meta, link').forEach(el => el.remove());
    // Clean attributes but preserve styling
    div.querySelectorAll('*').forEach(el => {
        const allowedAttrs = ['href', 'src', 'alt', 'title', 'style', 'class'];
        Array.from(el.attributes).forEach(attr => {
            if (!allowedAttrs.includes(attr.name)) {
                el.removeAttribute(attr.name);
            }
        });
        // Preserve common formatting tags
        if (el.tagName === 'SPAN' && !el.style.cssText && !el.className) {
            // Unwrap empty spans
            while (el.firstChild) {
                el.parentNode.insertBefore(el.firstChild, el);
            }
            el.remove();
        }
    });
    return div.innerHTML;
}
function detectLinks() {
    // Basic link detection - can be enhanced
}

function handleEditorKeydown(e) {
    // Check if user pressed a dash
    if (e.key === '-') {
        const editor = document.getElementById('editor');
        if (!editor) return;
        
        // Delay to let the DOM update after dash is typed
        setTimeout(() => {
            // Get the cursor position
            const selection = window.getSelection();
            if (!selection.rangeCount) return;
            
            const range = selection.getRangeAt(0);
            const cursorNode = range.endContainer;
            const cursorOffset = range.endOffset;
            
            // Check if the cursor is in a text node
            if (cursorNode.nodeType !== Node.TEXT_NODE) return;
            
            const text = cursorNode.textContent;
            
            // Check if we just typed the third dash (text ends with ---)
            if (cursorOffset >= 3) {
                const recentText = text.substring(cursorOffset - 3, cursorOffset);
                
                if (recentText === '---') {
                    // Check if --- is on its own line or at the start
                    const beforeText = text.substring(0, cursorOffset - 3);
                    const isOwnLine = beforeText.length === 0 || beforeText.endsWith('\n') || beforeText.trim() === '';
                    
                    if (isOwnLine) {
                        // Remove the "---" from the text node
                        cursorNode.textContent = beforeText + text.substring(cursorOffset);
                        
                        // Create horizontal rule
                        const hr = document.createElement('hr');
                        
                        // Insert after the text node
                        const parent = cursorNode.parentNode;
                        if (parent) {
                            parent.insertBefore(hr, cursorNode.nextSibling);
                        }
                        
                        // Create a new paragraph for continued typing
                        const p = document.createElement('p');
                        const br = document.createElement('br');
                        p.appendChild(br);
                        
                        if (hr.parentNode) {
                            hr.parentNode.insertBefore(p, hr.nextSibling);
                        } else if (parent) {
                            parent.insertBefore(p, hr.nextSibling || cursorNode.nextSibling);
                        }
                        
                        // Move cursor to the new paragraph
                        const newRange = document.createRange();
                        const sel = window.getSelection();
                        newRange.setStart(p, 0);
                        newRange.collapse(true);
                        sel.removeAllRanges();
                        sel.addRange(newRange);
                    }
                }
            }
        }, 0);
    }
}

// ===================================
// Image Lightbox
// ===================================
function initImageLightbox() {
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxClose = document.getElementById('lightbox-close');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const zoomResetBtn = document.getElementById('zoom-reset');
    
    let currentZoom = 1;
    const minZoom = 1;
    const maxZoom = 5;
    const zoomStep = 0.2;
    
    // Open lightbox on image click
    function setupImageClickHandlers(container) {
        if (!container) return;
        
        const images = container.querySelectorAll('img');
        images.forEach(img => {
            // Skip heading icons and other non-content images
            if (img.src.includes('heading.png') || img.src.includes('icon')) {
                return;
            }
            
            // Remove previous click handlers
            const newImg = img.cloneNode(true);
            img.parentNode.replaceChild(newImg, img);
            
            newImg.addEventListener('click', function(e) {
                e.stopPropagation();
                openLightbox(newImg.src);
            });
        });
    }
    
    function openLightbox(imageSrc) {
        lightboxImage.src = imageSrc;
        currentZoom = 1;
        lightboxImage.style.transform = 'scale(1)';
        lightboxImage.classList.remove('zoomed');
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
        currentZoom = 1;
        lightboxImage.style.transform = 'scale(1)';
    }
    
    function updateZoom() {
        lightboxImage.style.transform = `scale(${currentZoom})`;
        
        if (currentZoom > minZoom) {
            lightboxImage.classList.add('zoomed');
        } else {
            lightboxImage.classList.remove('zoomed');
        }
    }
    
    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    
    zoomInBtn.addEventListener('click', function() {
        currentZoom = Math.min(currentZoom + zoomStep, maxZoom);
        updateZoom();
    });
    
    zoomOutBtn.addEventListener('click', function() {
        currentZoom = Math.max(currentZoom - zoomStep, minZoom);
        updateZoom();
    });
    
    zoomResetBtn.addEventListener('click', function() {
        currentZoom = 1;
        updateZoom();
    });
    
    // Keyboard support
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === '+' || e.key === '=') {
                currentZoom = Math.min(currentZoom + zoomStep, maxZoom);
                updateZoom();
            } else if (e.key === '-') {
                currentZoom = Math.max(currentZoom - zoomStep, minZoom);
                updateZoom();
            }
        }
    });
    
    // Prevent lightbox from closing when clicking on image or controls
    lightboxImage.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    const controls = document.querySelector('.lightbox-controls');
    if (controls) {
        controls.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Pinch-to-zoom for mobile
    let touchStartDistance = 0;
    let touchStartZoom = 1;
    
    lightboxImage.addEventListener('touchstart', function(e) {
        if (e.touches.length === 2) {
            // Calculate distance between two fingers
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const dx = touch1.clientX - touch2.clientX;
            const dy = touch1.clientY - touch2.clientY;
            touchStartDistance = Math.sqrt(dx * dx + dy * dy);
            touchStartZoom = currentZoom;
        }
    }, false);
    
    lightboxImage.addEventListener('touchmove', function(e) {
        if (e.touches.length === 2) {
            e.preventDefault();
            
            // Calculate new distance between two fingers
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const dx = touch1.clientX - touch2.clientX;
            const dy = touch1.clientY - touch2.clientY;
            const touchEndDistance = Math.sqrt(dx * dx + dy * dy);
            
            // Calculate zoom based on finger distance change
            const zoomChange = touchEndDistance / touchStartDistance;
            currentZoom = Math.min(Math.max(touchStartZoom * zoomChange, minZoom), maxZoom);
            updateZoom();
        }
    }, false);
    
    // Return function to setup handlers for new content
    return {
        setupHandlers: setupImageClickHandlers,
        openLightbox: openLightbox,
        closeLightbox: closeLightbox
    };
}

// Store lightbox instance globally for use in other functions
window.imageLightbox = null;

// ===================================
// Create New Item
// ===================================
function createNewItem(type, name, parentId = null) {
    const newItem = {
        id: generateId(),
        type: type,
        title: name,
        children: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    if (type === 'page') {
        newItem.content = '';
    }
    if (parentId) {
        // Add to parent folder
        const parent = findPageById(parentId);
        if (parent && parent.type === 'folder') {
            parent.children.push(newItem);
        }
    } else {
        // Add to root
        pages.push(newItem);
    }
    savePages();
    renderPageTree();
    initializeDragAndDrop();
    // Auto-select and highlight new item
    setTimeout(() => {
        const newItemHeader = document.querySelector(`[data-item-id="${newItem.id}"] .tree-item-header`);
        if (newItemHeader) {
            newItemHeader.scrollIntoView({ behavior: 'smooth', block: 'center' });
            newItemHeader.classList.add('active');
        }
        if (type === 'page') {
            viewPage(newItem.id);
            setTimeout(() => enterEditMode(), 100);
        } else {
            // Expand folder to show it's ready for content
            const childrenUl = document.getElementById(`children-${newItem.id}`);
            if (childrenUl) {
                childrenUl.classList.add('expanded');
            }
        }
    }, 100);
    showToast(`${type === 'folder' ? 'Folder' : 'Page'} created`);
}
// ===================================
// Modal Functions
// ===================================
function showCreateModal() {
    const modal = document.getElementById('create-modal');
    if (!modal) return;
    modal.style.display = 'flex';
    // Reset state
    const nameInputGroup = document.getElementById('name-input-group');
    const modalFooter = modal.querySelector('.modal-footer');
    const nameInput = document.getElementById('new-item-name');
    if (nameInputGroup) nameInputGroup.style.display = 'none';
    if (modalFooter) modalFooter.style.display = 'none';
    if (nameInput) nameInput.value = '';
    modal.querySelectorAll('.create-option').forEach(opt => {
        opt.classList.remove('selected');
    });
}
function showRenameModal(itemId, currentName) {
    const modal = document.getElementById('rename-modal');
    if (!modal) return;
    modal.dataset.itemId = itemId;
    const input = document.getElementById('rename-input');
    if (input) {
        input.value = currentName;
        setTimeout(() => {
            input.focus();
            input.select();
        }, 100);
    }
    modal.style.display = 'flex';
}
function showDeleteModal(itemId, itemTitle) {
    const modal = document.getElementById('delete-modal');
    if (!modal) return;
    modal.dataset.itemId = itemId;
    const message = modal.querySelector('#delete-message');
    if (message) {
        message.textContent = `Are you sure you want to delete "${itemTitle}"?`;
    }
    modal.style.display = 'flex';
}
function closeModal(modal) {
    if (modal) {
        modal.style.display = 'none';
    }
}
function confirmRename() {
    const modal = document.getElementById('rename-modal');
    const itemId = modal?.dataset.itemId;
    const input = document.getElementById('rename-input');
    const newName = input?.value.trim();
    if (!newName) {
        showToast('Please enter a name', 'error');
        return;
    }
    const item = findPageById(itemId);
    if (item) {
        item.title = newName;
        item.updatedAt = new Date().toISOString();
        savePages();
        renderPageTree();
        initializeDragAndDrop();
        // Update active state if this item is currently viewed
        if (currentPageId === itemId) {
            const pageTitle = document.getElementById('page-title');
            if (pageTitle) pageTitle.textContent = newName;
        }
        showToast('Renamed');
    }
    closeModal(modal);
}
// ===================================
// Tree Item Context Menu
// ===================================
function showTreeItemMenu(event, item) {
    const menu = document.getElementById('tree-context-menu');
    if (!menu) return;
    // Store item reference
    menu.dataset.itemId = item.id;
    menu.dataset.itemTitle = item.title;
    // Position menu at click location
    const x = event.clientX;
    const y = event.clientY;
    menu.style.display = 'block';
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    // Adjust if menu goes off screen
    setTimeout(() => {
        const rect = menu.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
            menu.style.left = (x - rect.width) + 'px';
        }
        if (rect.bottom > window.innerHeight) {
            menu.style.top = (y - rect.height) + 'px';
        }
    }, 0);
    // Close menu when clicking outside
    const closeMenu = (e) => {
        if (!menu.contains(e.target)) {
            menu.style.display = 'none';
            document.removeEventListener('click', closeMenu);
        }
    };
    setTimeout(() => {
        document.addEventListener('click', closeMenu);
    }, 0);
}
function showAddToFolderModal(parentId) {
    // Find the parent folder
    const parent = findPageById(parentId);
    if (!parent || parent.type !== 'folder') return;
    // Show create modal with parent context
    const modal = document.getElementById('create-modal');
    if (!modal) return;
    modal.dataset.parentId = parentId;
    modal.style.display = 'flex';
    // Reset state
    const nameInputGroup = document.getElementById('name-input-group');
    const modalFooter = modal.querySelector('.modal-footer');
    const nameInput = document.getElementById('new-item-name');
    if (nameInputGroup) nameInputGroup.style.display = 'none';
    if (modalFooter) modalFooter.style.display = 'none';
    if (nameInput) nameInput.value = '';
    modal.querySelectorAll('.create-option').forEach(opt => {
        opt.classList.remove('selected');
    });
}
// ===================================
// Toast Notifications
// ===================================
function showToast(message, type = 'success') {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    // Shorten message for mobile
    const isMobile = window.innerWidth <= 768;
    let displayMessage = message;
    if (isMobile) {
        // Short messages for mobile
        const mobileMessages = {
            'GitHub sync is only available in admin mode': 'Admin mode required',
            'GitHub token not configured. Please add your encrypted token to docs-config.js': 'Token not configured',
            'Synced from GitHub successfully': 'Synced from GitHub',
            'Synced to GitHub successfully': 'Synced to GitHub',
            'Sync failed. Check console for details.': 'Sync failed',
            'Admin mode activated! GitHub sync enabled.': 'Admin mode on',
            'Admin mode deactivated. Local mode only.': 'Admin mode off',
            'Renamed successfully': 'Renamed',
            'Deleted successfully': 'Deleted'
        };
        displayMessage = mobileMessages[message] || message;
    }
    toast.textContent = displayMessage;
    toast.className = `toast ${type}`;
    toast.offsetHeight;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
// ===================================
// Drag and Drop
// ===================================
function initializeDragAndDrop() {
    // Disable drag and drop on mobile
    if (window.innerWidth <= 768) return;
    const pageTree = document.getElementById('page-tree');
    if (!pageTree || typeof Sortable === 'undefined') return;
    const sortableOptions = {
        group: {
            name: 'nested',
            pull: true,
            put: true
        },
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        ghostClass: 'sortable-ghost',
        dragClass: 'sortable-drag',
        chosenClass: 'sortable-chosen',
        handle: '.tree-name',
        draggable: '.tree-item',
        onStart: function(evt) {
            document.body.classList.add('dragging');
        },
        // Allow dropping on folder headers
        onMove: function(evt) {
            const draggedItem = evt.dragged;
            const relatedItem = evt.related;
            // If hovering over a folder, auto-expand it and allow drop into it
            if (relatedItem && relatedItem.dataset.itemType === 'folder') {
                const folderId = relatedItem.dataset.itemId;
                const childrenUl = document.getElementById(`children-${folderId}`);
                if (childrenUl && !childrenUl.classList.contains('expanded')) {
                    // Auto-expand folder when dragging over it
                    setTimeout(() => {
                        const toggle = relatedItem.querySelector('.tree-toggle');
                        if (toggle && !toggle.classList.contains('expanded')) {
                            toggleTreeChildren(folderId);
                        }
                    }, 500);
                }
            }
        },
        onEnd: function(evt) {
            document.body.classList.remove('dragging');
            updateTreeStructure();
        }
    };
    // Initialize sortable on root level
    new Sortable(pageTree, sortableOptions);
    // Initialize sortable on all nested lists (including empty ones)
    document.querySelectorAll('.tree-children').forEach(childrenUl => {
        new Sortable(childrenUl, sortableOptions);
    });
}
function updateTreeStructure() {
    // Rebuild the pages array from the DOM structure
    const newPages = [];
    const processedItems = new Set();
    function buildTreeFromDom(container, parentArray) {
        const items = Array.from(container.children);
        for (let item of items) {
            const itemId = item.dataset.itemId;
            if (!itemId || processedItems.has(itemId)) continue;
            const pageItem = findPageById(itemId);
            if (pageItem) {
                processedItems.add(itemId);
                // Create a fresh copy to avoid reference issues
                const newItem = {
                    id: pageItem.id,
                    type: pageItem.type,
                    title: pageItem.title,
                    children: [],
                    createdAt: pageItem.createdAt,
                    updatedAt: pageItem.updatedAt
                };
                if (pageItem.type === 'page') {
                    newItem.content = pageItem.content;
                }
                // Check if this item has nested children
                const childrenUl = item.querySelector(`#children-${itemId}`);
                if (childrenUl && childrenUl.children.length > 0) {
                    buildTreeFromDom(childrenUl, newItem.children);
                }
                parentArray.push(newItem);
            }
        }
    }
    const pageTree = document.getElementById('page-tree');
    if (pageTree) {
        buildTreeFromDom(pageTree, newPages);
    }
    // Update global pages array
    pages = newPages;
    savePages();
    showToast('Order updated');
}
