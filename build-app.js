const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'www');

// Clean or create target www directory
if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true });
}
fs.mkdirSync(targetDir, { recursive: true });

function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach((childItemName) => {
            if (childItemName === 'node_modules' || childItemName === '.git' || childItemName === '.gemini' || childItemName === 'android' || childItemName === 'www') {
                return;
            }
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

console.log('📦 Building web directory for Capacitor Android build...');

// Copy root files
const rootFiles = ['index.html', 'manifest.json', 'sw.js'];
rootFiles.forEach(f => {
    const srcFile = path.join(__dirname, f);
    if (fs.existsSync(srcFile)) {
        fs.copyFileSync(srcFile, path.join(targetDir, f));
    }
});

// Copy asset subdirectories
const subDirs = ['src', 'data', 'resources', 'config', 'database'];
subDirs.forEach(d => {
    const srcPath = path.join(__dirname, d);
    if (fs.existsSync(srcPath)) {
        copyRecursiveSync(srcPath, path.join(targetDir, d));
    }
});

console.log('✅ Web directory built successfully into www/');
