param (
    [string]$InputFile = "public/logo-small.png",
    [string]$OutputFile = "public/logo-optimized.png",
    [int]$Threshold = 15,
    [float]$AlphaBoost = 1.1
)

Add-Type -AssemblyName System.Drawing

Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "  LEON GUTIERREZ WEB STUDIO - LOGO OPTIMIZER" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan

# Resolve absolute paths
$currentDir = Get-Location
$absoluteInput = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($currentDir, $InputFile))
$absoluteOutput = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($currentDir, $OutputFile))

if (-not (Test-Path $absoluteInput)) {
    Write-Error "Input logo file not found at: $absoluteInput"
    exit 1
}

Write-Host "1. Loading logo image from: $absoluteInput" -ForegroundColor Yellow
$bmp = [System.Drawing.Image]::FromFile($absoluteInput)
$width = $bmp.Width
$height = $bmp.Height
Write-Host "   Original Size: $width x $height px"

Write-Host "2. Processing transparency (Color-to-Alpha extraction)..." -ForegroundColor Yellow
$transBmp = New-Object System.Drawing.Bitmap($width, $height)

# Calculate bounding box variables during the loop to optimize passes
$minX = $width
$minY = $height
$maxX = 0
$maxY = 0

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        
        $r = $pixel.R
        $g = $pixel.G
        $b = $pixel.B
        
        # Color-to-alpha: Alpha intensity is the maximum of the channels
        $alpha = [Math]::Max($r, [Math]::Max($g, $b))
        
        if ($alpha -lt $Threshold) {
            # Make dark background pixel fully transparent
            $newColor = [System.Drawing.Color]::FromArgb(0, 0, 0, 0)
        } else {
            # Normalize color channels to prevent muddy details when alpha is reduced
            $nr = [Math]::Min(255, [int]($r * 255 / $alpha))
            $ng = [Math]::Min(255, [int]($g * 255 / $alpha))
            $nb = [Math]::Min(255, [int]($b * 255 / $alpha))
            
            # Boost alpha slightly to keep solid parts crisp
            $newAlpha = [int]($alpha * $AlphaBoost)
            if ($newAlpha -gt 255) { $newAlpha = 255 }
            
            $newColor = [System.Drawing.Color]::FromArgb($newAlpha, $nr, $ng, $nb)
            
            # Update active bounding box
            if ($x -lt $minX) { $minX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -gt $maxY) { $maxY = $y }
        }
        $transBmp.SetPixel($x, $y, $newColor)
    }
}

$bmp.Dispose()

# Verify if we found any active pixels
if ($maxX -lt $minX -or $maxY -lt $minY) {
    Write-Error "No active logo pixels found! The image might be completely black."
    $transBmp.Dispose()
    exit 1
}

Write-Host "3. Trimming empty margins (Bounding Box Crop)..." -ForegroundColor Yellow
$padding = 6
$minX = [Math]::Max(0, $minX - $padding)
$minY = [Math]::Max(0, $minY - $padding)
$maxX = [Math]::Min($width - 1, $maxX + $padding)
$maxY = [Math]::Min($height - 1, $maxY + $padding)

$cropWidth = $maxX - $minX + 1
$cropHeight = $maxY - $minY + 1
Write-Host "   Active Area: Left=$minX, Top=$minY, Width=$cropWidth, Height=$cropHeight"

# Create final cropped transparent bitmap
$croppedBmp = New-Object System.Drawing.Bitmap($cropWidth, $cropHeight)
$g = [System.Drawing.Graphics]::FromImage($croppedBmp)
$g.Clear([System.Drawing.Color]::Transparent)

# Draw the active cropped region
$destRect = New-Object System.Drawing.Rectangle(0, 0, $cropWidth, $cropHeight)
$srcRect = New-Object System.Drawing.Rectangle($minX, $minY, $cropWidth, $cropHeight)
$g.DrawImage($transBmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

Write-Host "4. Saving optimized transparent logo to: $absoluteOutput" -ForegroundColor Yellow
# Create directory if it doesn't exist
$outputDir = [System.IO.Path]::GetDirectoryName($absoluteOutput)
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Force -Path $outputDir | Out-Null
}

$croppedBmp.Save($absoluteOutput, [System.Drawing.Imaging.ImageFormat]::Png)

# Dispose all remaining objects
$g.Dispose()
$transBmp.Dispose()
$croppedBmp.Dispose()

Write-Host "=============================================" -ForegroundColor Green
Write-Host "  SUCCESS! Logo optimized and saved perfectly!" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green
