#!/usr/bin/env node

/**
 * Cache Buster Script
 * Automatically updates BUILD_TIMESTAMP in service-worker.js, index.html, and pages in src/pages/
 * Run this before deploying or as part of your build pipeline
 */

const fs = require('fs');
const path = require('path');

// Get current timestamp in format: YYYYMMDDHHMMSS
function getTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

function updateServiceWorker(timestamp) {
  const swPath = path.join(__dirname, 'src', 'service-worker.js');
  
  let content = fs.readFileSync(swPath, 'utf8');
  
  // Update BUILD_TIMESTAMP
  content = content.replace(
    /const BUILD_TIMESTAMP = '\d+';/,
    `const BUILD_TIMESTAMP = '${timestamp}';`
  );
  
  fs.writeFileSync(swPath, content, 'utf8');
  return timestamp;
}

function updateHTMLFile(filePath, timestamp) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Pattern: href/src="path.js/css" or href/src="path.js/css?cb=oldtimestamp"
  content = content.replace(
    /(?<=href|src)="([^"]+\.(css|js))(?:\?cb=[^"]*)?"/g,
    (match, pathUrl) => {
      // Skip external links
      if (pathUrl.startsWith('http://') || pathUrl.startsWith('https://') || pathUrl.startsWith('//')) {
        return match;
      }
      const cleanPath = pathUrl.split('?')[0];
      return `="${cleanPath}?cb=${timestamp}"`;
    }
  );

  fs.writeFileSync(filePath, content, 'utf8');
}

function updateHTMLFiles(timestamp) {
  // Update root index.html
  updateHTMLFile(path.join(__dirname, 'index.html'), timestamp);

  // Update all HTML files in src/pages directory
  const pagesDir = path.join(__dirname, 'src', 'pages');
  if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir);
    for (const file of files) {
      if (file.endsWith('.html')) {
        updateHTMLFile(path.join(pagesDir, file), timestamp);
      }
    }
  }
}

function updateManifest(timestamp) {
  const manifestPath = path.join(__dirname, 'manifest.json');
  if (!fs.existsSync(manifestPath)) return;
  let manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  
  // Add version metadata
  manifest.version = timestamp;
  manifest.last_updated = new Date().toISOString();
  
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
}

// Main execution
try {
  const timestamp = getTimestamp();
  updateServiceWorker(timestamp);
  updateHTMLFiles(timestamp);
  updateManifest(timestamp);
  console.log(`Successfully updated cache versions to timestamp: ${timestamp}`);
} catch (error) {
  console.error('Error updating cache version:', error);
  process.exit(1);
}

