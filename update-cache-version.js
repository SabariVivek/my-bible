#!/usr/bin/env node

/**
 * Cache Buster Script
 * Automatically updates BUILD_TIMESTAMP in service-worker.js and index.html
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

function updateServiceWorker() {
  const swPath = path.join(__dirname, 'src', 'service-worker.js');
  const timestamp = getTimestamp();
  
  let content = fs.readFileSync(swPath, 'utf8');
  
  // Update BUILD_TIMESTAMP
  content = content.replace(
    /const BUILD_TIMESTAMP = '\d+';/,
    `const BUILD_TIMESTAMP = '${timestamp}';`
  );
  
  fs.writeFileSync(swPath, content, 'utf8');
  return timestamp;
}

function updateIndexHTML(timestamp) {
  const indexPath = path.join(__dirname, 'index.html');
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Update cache-bust parameter in script and style links
  // Pattern: href/src="path.js/css" -> href/src="path.js/css?cb=timestamp"
  content = content.replace(
    /(?<=href|src)="([^"]+\.(css|js))"(?!\?cb)/g,
    (match, path, ext) => {
      // Skip if it already has a cache-bust parameter
      if (path.includes('?cb=')) {
        return `="${path.replace(/\?cb=[^"]*/, `?cb=${timestamp}`)}"`;
      }
      return `="${path}?cb=${timestamp}"`;
    }
  );
  
  fs.writeFileSync(indexPath, content, 'utf8');
}

function updateManifest(timestamp) {
  const manifestPath = path.join(__dirname, 'manifest.json');
  let manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  
  // Add version metadata
  manifest.version = timestamp;
  manifest.last_updated = new Date().toISOString();
  
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
}

// Main execution
try {
  const timestamp = updateServiceWorker();
  updateIndexHTML(timestamp);
  updateManifest(timestamp);
} catch (error) {
  process.exit(1);
}
