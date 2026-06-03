$species = @(
    "Euphlyctis cyanophlyctis",
    "Hydrophylax bahuvistara",
    "Hydrophylax intermedius"
)

$userAgent = "SatyamGuptaAcademicBot/1.0 (satmaysatyam@gmail.com; personal academic portfolio)"

foreach ($sp in $species) {
    Write-Host "Searching for ${sp}..."
    $encoded = [uri]::EscapeDataString($sp)
    $url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&generator=search&gsrsearch=${encoded}&gsrnamespace=6&iiprop=url|size&gsrlimit=10"
    
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        $resp = Invoke-RestMethod -Uri $url -UserAgent $userAgent -TimeoutSec 10
        if ($resp.query.pages) {
            $sortedPages = @()
            foreach ($prop in $resp.query.pages.psobject.properties) {
                $page = $prop.Value
                if ($page.imageinfo -and $page.imageinfo[0].url) {
                    $sortedPages += $page
                }
            }
            # Sort by width descending
            $sortedPages = $sortedPages | Sort-Object { $_.imageinfo[0].width } -Descending
            
            Write-Host "Top matches for ${sp}:"
            foreach ($page in $sortedPages) {
                $info = $page.imageinfo[0]
                Write-Host " - Width: $($info.width), Height: $($info.height), URL: $($info.url)"
            }
        } else {
            Write-Host "No pages found for ${sp}"
        }
    } catch {
        Write-Host "Error searching for ${sp}: $_"
    }
    Write-Host "========================================"
}
