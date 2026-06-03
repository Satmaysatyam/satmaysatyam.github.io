$userAgent = "SatyamGuptaAcademicBot/1.0 (satmaysatyam@gmail.com; personal academic portfolio)"
$encoded = [uri]::EscapeDataString("Phylloscopus poliogenys")
$url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&generator=search&gsrsearch=${encoded}&gsrnamespace=6&iiprop=url|size&gsrlimit=5"

try {
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    $resp = Invoke-RestMethod -Uri $url -UserAgent $userAgent -TimeoutSec 10
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
        $sorted = $sorted | Sort-Object { $_.imageinfo[0].width } -Descending
        $imgUrl = $sorted[0].imageinfo[0].url
        Write-Host "Found warbler URL: $imgUrl (Width: $($sorted[0].imageinfo[0].width))"
        
        if ($imgUrl) {
            $dest = "c:\Users\satma\Documents\Personal Website\mnt\data\satyam_github_pages_site\Audio Bank\GCW.jpg"
            Write-Host "Downloading to $dest..."
            Invoke-WebRequest -Uri $imgUrl -OutFile $dest -UserAgent $userAgent -TimeoutSec 30
            Write-Host "Download complete!"
        }
    } else {
        Write-Host "No pages found for Phylloscopus poliogenys"
    }
} catch {
    Write-Host "Error: $_"
}
