Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\SabariDornalVivekana\.gemini\antigravity-ide\brain\46a96842-57ab-4535-afbd-d1160bfc189f\media__1785413557565.jpg"
$img = [System.Drawing.Image]::FromFile($srcPath)

function Resize-Image($width, $height, $destPath) {
    $dir = [System.IO.Path]::GetDirectoryName($destPath)
    if (!(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    
    $bmp = New-Object System.Drawing.Bitmap($width, $height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($script:img, 0, 0, $width, $height)
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

# 1. Update web resources icons
Resize-Image 512 512 "resources/icons/bible.png"
Resize-Image 512 512 "resources/icons/icon-512.png"
Resize-Image 192 192 "resources/icons/icon-192.png"

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
    Resize-Image $m.size $m.size "$folder/ic_launcher.png"
    Resize-Image $m.size $m.size "$folder/ic_launcher_round.png"
    Resize-Image $m.size $m.size "$folder/ic_launcher_foreground.png"
}

$img.Dispose()
Write-Host "✅ All web and Android launcher icons updated successfully!"
