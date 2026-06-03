$destDir = "c:\Users\satma\Documents\Personal Website\mnt\data\satyam_github_pages_site\Audio Bank"
$userAgent = "SatyamGuptaAcademicBot/1.0 (satmaysatyam@gmail.com; personal academic portfolio)"

# 1. Search and Download HD Green-crowned Warbler (Phylloscopus burkii / Seicercus burkii)
Write-Host "Searching for living bird photos of 'Phylloscopus burkii'..."
$encoded = [uri]::EscapeDataString("Phylloscopus burkii")
$url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&generator=search&gsrsearch=${encoded}&gsrnamespace=6&iiprop=url|size&gsrlimit=10"

try {
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    $resp = Invoke-RestMethod -Uri $url -UserAgent $userAgent -TimeoutSec 10
    $imgUrl = $null
    if ($resp.query.pages) {
        $sorted = @()
        foreach ($prop in $resp.query.pages.psobject.properties) {
            $page = $prop.Value
            if ($page.imageinfo -and $page.imageinfo[0].url) {
                # Filter out museum specimen images
                if ($page.imageinfo[0].url -notmatch "specimen|skin|RMNH") {
                    $sorted += $page
                }
            }
        }
        if ($sorted.Count -gt 0) {
            $sorted = $sorted | Sort-Object { $_.imageinfo[0].width } -Descending
            $imgUrl = $sorted[0].imageinfo[0].url
            Write-Host "Found living warbler HD URL: $imgUrl (Width: $($sorted[0].imageinfo[0].width))"
        }
    }
    
    # Fallback to general search if not found
    if (-not $imgUrl) {
        $imgUrl = "https://upload.wikimedia.org/wikipedia/commons/4/4b/Green-crowned_Warbler_Neora_Valley_National_Park_West_Bengal_India_01.05.2016.jpg"
        Write-Host "Using fallback URL: $imgUrl"
    }
    
    $warblerDest = Join-Path $destDir "GCW.jpg"
    Write-Host "Downloading Green-crowned Warbler from $imgUrl..."
    Invoke-WebRequest -Uri $imgUrl -OutFile $warblerDest -UserAgent $userAgent -TimeoutSec 30
    Write-Host "Warbler download complete!"
} catch {
    Write-Host "Warbler download failed: $_"
}

# 2. Download HD Grey-headed Canary-flycatcher
$flycatcherUrl = "https://upload.wikimedia.org/wikipedia/commons/8/84/Gray-headed_Canary_Flycatcher.jpg"
$flycatcherDest = Join-Path $destDir "GHCF.jpg"
Write-Host "Downloading Grey-headed Canary-flycatcher from $flycatcherUrl..."
try {
    Invoke-WebRequest -Uri $flycatcherUrl -OutFile $flycatcherDest -UserAgent $userAgent -TimeoutSec 45
    Write-Host "Flycatcher download complete!"
} catch {
    Write-Host "Flycatcher download failed: $_"
}

# 3. Download HD Red-tailed Minla
$minlaUrl = "https://upload.wikimedia.org/wikipedia/commons/f/f5/Red-tailed_minla_01.jpg"
$minlaDest = Join-Path $destDir "RTM.jpg"
Write-Host "Downloading Red-tailed Minla from $minlaUrl..."
try {
    Invoke-WebRequest -Uri $minlaUrl -OutFile $minlaDest -UserAgent $userAgent -TimeoutSec 45
    Write-Host "Minla download complete!"
} catch {
    Write-Host "Minla download failed: $_"
}
