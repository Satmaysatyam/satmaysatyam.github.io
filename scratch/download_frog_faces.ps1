$destDir = "c:\Users\satma\Documents\Personal Website\mnt\data\satyam_github_pages_site\Audio Bank"
$userAgent = "SatyamGuptaAcademicBot/1.0 (satmaysatyam@gmail.com; personal academic portfolio)"

# 1. Download Widespread Fungoid Frog (Side Profile)
$fungoidUrl = "https://upload.wikimedia.org/wikipedia/commons/3/3e/Hydrophylax_bahuvistara_Side.jpg"
$fungoidDest = Join-Path $destDir "H_bahuvistara.jpg"
Write-Host "Downloading Widespread Fungoid Frog side portrait..."
try {
    Invoke-WebRequest -Uri $fungoidUrl -OutFile $fungoidDest -UserAgent $userAgent -TimeoutSec 30
    Write-Host "Fungoid frog download complete!"
} catch {
    Write-Host "Fungoid frog download failed: $_"
}

# 2. Download Rao's Goldenback (HD Intermediate Frog Close-up)
$intermedUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d3/Rao%27s_Goldenback-2935.jpg"
$intermedDest = Join-Path $destDir "H_intermedius.jpg"
Write-Host "Downloading Rao's Goldenback (Intermediate frog) close-up..."
try {
    Invoke-WebRequest -Uri $intermedUrl -OutFile $intermedDest -UserAgent $userAgent -TimeoutSec 30
    Write-Host "Intermediate frog download complete!"
} catch {
    Write-Host "Intermediate frog download failed: $_"
}

# 3. Download Indian Skittering Frog (Close-up face shot)
$skitterUrl = "https://upload.wikimedia.org/wikipedia/commons/5/5e/Euphlyctis_cyanophlyctis_%28Skittering_frog%29_%281%29_02.jpg"
$skitterDest = Join-Path $destDir "E_cyanophlyctis.jpg"
Write-Host "Downloading Indian Skittering Frog close-up..."
try {
    Invoke-WebRequest -Uri $skitterUrl -OutFile $skitterDest -UserAgent $userAgent -TimeoutSec 30
    Write-Host "Skittering frog download complete!"
} catch {
    Write-Host "Skittering frog download failed: $_"
}
