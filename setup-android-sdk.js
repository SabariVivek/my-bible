const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const sdkDir = path.join(process.env.USERPROFILE || 'C:\\Users\\SabariDornalVivekana', '.android-sdk');
const zipPath = path.join(__dirname, 'cmdline-tools.zip');
const url = 'https://dl.google.com/android/repository/commandlinetools-win-11076708_latest.zip';

console.log('📱 Setting up Android SDK locally at:', sdkDir);

if (!fs.existsSync(sdkDir)) {
    fs.mkdirSync(sdkDir, { recursive: true });
}

function downloadFile(fileUrl, outputPath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(outputPath);
        https.get(fileUrl, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                return downloadFile(response.headers.location, outputPath).then(resolve).catch(reject);
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(outputPath, () => reject(err));
        });
    });
}

async function run() {
    try {
        if (!fs.existsSync(path.join(sdkDir, 'cmdline-tools', 'latest', 'bin', 'sdkmanager.bat'))) {
            console.log('📥 Downloading Android Command Line Tools from Google...');
            await downloadFile(url, zipPath);
            console.log('📦 Extracting Command Line Tools...');
            execSync(`powershell -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${path.join(sdkDir, 'cmdline-tools-temp')}' -Force"`);
            
            const latestDir = path.join(sdkDir, 'cmdline-tools', 'latest');
            fs.mkdirSync(latestDir, { recursive: true });
            
            const tempDir = path.join(sdkDir, 'cmdline-tools-temp', 'cmdline-tools');
            fs.readdirSync(tempDir).forEach(item => {
                fs.renameSync(path.join(tempDir, item), path.join(latestDir, item));
            });
            
            fs.rmSync(path.join(sdkDir, 'cmdline-tools-temp'), { recursive: true, force: true });
            if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
            console.log('✅ Android Command Line Tools extracted successfully!');
        } else {
            console.log('✅ Android Command Line Tools already present.');
        }

        // Create local.properties in android/ folder
        const localPropsPath = path.join(__dirname, 'android', 'local.properties');
        const formattedSdkPath = sdkDir.replace(/\\/g, '/');
        fs.writeFileSync(localPropsPath, `sdk.dir=${formattedSdkPath}\n`);
        console.log(`✅ Set sdk.dir=${formattedSdkPath} in android/local.properties`);

    } catch (err) {
        console.error('❌ Error setting up Android SDK:', err);
    }
}

run();
