$destDir = "c:\Users\satma\Documents\Personal Website\mnt\data\satyam_github_pages_site\Audio Bank"
$userAgent = "SatyamGuptaAcademicBot/1.0 (satmaysatyam@gmail.com; personal academic portfolio)"

# 1. Download HD Fungoid Frog (Hydrophylax bahuvistara)
# We found a massive 12032 x 9024 image
$fungoidUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Hydrophylax_bahuvistara_widespread_fungoid_frog_vijayanrajapuram2.jpg"
$fungoidDest = Join-Path $destDir "H_bahuvistara.jpg"
Write-Host "Downloading HD Fungoid Frog from $fungoidUrl..."
try {
    Invoke-WebRequest -Uri $fungoidUrl -OutFile $fungoidDest -UserAgent $userAgent -TimeoutSec 45
    Write-Host "Fungoid frog download complete!"
} catch {
    Write-Host "Fungoid frog download failed: $_"
}

# 2. Search and Download HD Intermediate Frog (Indosylvirana intermedia)
Write-Host "Searching Wikimedia Commons for 'Indosylvirana intermedia'..."
$encoded = [uri]::EscapeDataString("Indosylvirana intermedia")
$searchUrl = "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&generator=search&gsrsearch=${encoded}&gsrnamespace=6&iiprop=url|size&gsrlimit=5"

try {
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    $resp = Invoke-RestMethod -Uri $searchUrl -UserAgent $userAgent -TimeoutSec 15
    $imgUrl = $null
    if ($resp.query.pages) {
        $sorted = @()
        foreach ($prop in $resp.query.pages.psobject.properties) {
            $page = $prop.Value
            if ($page.imageinfo -and $page.imageinfo[0].url) {
                $sorted += $page
            }
        }
        $sorted = $sorted | Sort-Object { $_.imageinfo[0].width } -Descending
        $imgUrl = $sorted[0].imageinfo[0].url
        Write-Host "Found HD URL: $imgUrl (Width: $($sorted[0].imageinfo[0].width))"
    }
    
    if ($imgUrl) {
        $intermedDest = Join-Path $destDir "H_intermedius.jpg"
        Write-Host "Downloading Intermediate frog from $imgUrl..."
        Invoke-WebRequest -Uri $imgUrl -OutFile $intermedDest -UserAgent $userAgent -TimeoutSec 45
        Write-Host "Intermediate frog download complete!"
    } else {
        Write-Host "No image found for Indosylvirana intermedia"
    }
} catch {
    Write-Host "Error with Intermediate frog: $_"
}

# 3. Download a better, clear HD Skittering Frog photo
# Let's download the high-res one we saw:
$skitterUrl = "https://upload.wikimedia.org/wikipedia/commons/a/af/Euphlyctis_cyanophlyctis_%28Skittering_frog%29_%281%29_14.jpg"
$skitterDest = Join-Path $destDir "E_cyanophlyctis.jpg"
Write-Host "Downloading HD Skittering Frog from $skitterUrl..."
try {
    Invoke-WebRequest -Uri $skitterUrl -OutFile $skitterDest -UserAgent $userAgent -TimeoutSec 45
    Write-Host "Skittering frog download complete!"
} catch {
    Write-Host "Skittering frog download failed: $_"
}
