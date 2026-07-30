const { execSync } = require('child_process');
const path = require('path');

const sdkDir = 'C:\\Users\\SabariDornalVivekana\\.android-sdk';
const sdkManagerBat = path.join(sdkDir, 'cmdline-tools', 'latest', 'bin', 'sdkmanager.bat');

console.log('📦 Installing Android SDK platform & build tools via sdkmanager...');

try {
    // Accept licenses
    execSync(`cmd /c "echo y | \\"${sdkManagerBat}\\" --sdk_root=\\"${sdkDir}\\" --licenses"`, { stdio: 'inherit' });
    console.log('✅ Licenses accepted!');

    // Install platform 34 and build-tools 34.0.0
    execSync(`cmd /c "\\"${sdkManagerBat}\\" --sdk_root=\\"${sdkDir}\\" \\"platforms;android-34\\" \\"build-tools;34.0.0\\" \\"platform-tools\\""`, { stdio: 'inherit' });
    console.log('✅ Android SDK Platform 34 and Build-Tools installed successfully!');
} catch (err) {
    console.error('❌ Error installing SDK packages:', err);
}
