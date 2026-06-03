$species = @(
    "Hydrophylax bahuvistara",
    "Indosylvirana intermedia",
    "Euphlyctis cyanophlyctis"
)

$userAgent = "SatyamGuptaAcademicBot/1.0 (satmaysatyam@gmail.com; personal academic portfolio)"

foreach ($sp in $species) {
    Write-Host "Searching for ${sp}..."
    $encoded = [uri]::EscapeDataString($sp)
    # Search in File namespace
    $url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&generator=search&gsrsearch=${encoded}&gsrnamespace=6&iiprop=url|size&gsrlimit=15"
    
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        $resp = Invoke-RestMethod -Uri $url -UserAgent $userAgent -TimeoutSec 10
        if ($resp.query.pages) {
            Write-Host "Matches for ${sp}:"
            foreach ($prop in $resp.query.pages.psobject.properties) {
                $page = $prop.Value
                if ($page.imageinfo -and $page.imageinfo[0].url) {
                    $info = $page.imageinfo[0]
                    Write-Host " - Title: $($page.title)"
                    Write-Host "   Width: $($info.width), Height: $($info.height)"
                    Write-Host "   URL: $($info.url)"
                }
            }
        } else {
            Write-Host "No pages found for ${sp}"
        }
    } catch {
        Write-Host "Error searching for ${sp}: $_"
    }
    Write-Host "========================================"
}
