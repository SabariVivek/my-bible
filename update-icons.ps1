Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\SabariDornalVivekana\.gemini\antigravity-ide\brain\46a96842-57ab-4535-afbd-d1160bfc189f\media__1785414163138.png"
$img = [System.Drawing.Image]::FromFile($srcPath)

function Resize-Image($width, $height, $destPath, $paddingPercent = 0.05, $isTransparent = $true) {
    $dir = [System.IO.Path]::GetDirectoryName($destPath)
    if (!(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    
    $bmp = New-Object System.Drawing.Bitmap($width, $height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    
    if (!$isTransparent) {
        $bgColor = [System.Drawing.Color]::FromArgb(62, 52, 48)
        $brush = New-Object System.Drawing.SolidBrush($bgColor)
        $g.FillRectangle($brush, 0, 0, $width, $height)
        $brush.Dispose()
    } else {
        $g.Clear([System.Drawing.Color]::Transparent)
    }
    
    # Calculate padding & inner dimensions
    $padX = [int]($width * $paddingPercent)
    $padY = [int]($height * $paddingPercent)
    $drawW = $width - ($padX * 2)
    $drawH = $height - ($padY * 2)
    
    $g.DrawImage($script:img, $padX, $padY, $drawW, $drawH)
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

# 1. Update web resources icons
Resize-Image 512 512 "resources/icons/bible.png" 0.02 $true
Resize-Image 512 512 "resources/icons/icon-512.png" 0.05 $true
Resize-Image 192 192 "resources/icons/icon-192.png" 0.05 $true

# 2. Update Android launcher icons
$mipmaps = @(
    @{ name = "mipmap-mdpi"; size = 48 },
    @{ name = "mipmap-hdpi"; size = 72 },
    @{ name = "mipmap-xhdpi"; size = 96 },
    @{ name = "mipmap-xxhdpi"; size = 144 },
    @{ name = "mipmap-xxxhdpi"; size = 192 }
)

foreach ($m in $mipmaps) {
    $folder = "android/app/src/main/res/$($m.name)"
    # Standard launcher icon
    Resize-Image $m.size $m.size "$folder/ic_launcher.png" 0.08 $false
    # Round icon
    Resize-Image $m.size $m.size "$folder/ic_launcher_round.png" 0.10 $false
    # Adaptive foreground icon
    Resize-Image $m.size $m.size "$folder/ic_launcher_foreground.png" 0.12 $true
}

$img.Dispose()
Write-Host "✅ New Bible icon updated across web and Android launcher icons!"
