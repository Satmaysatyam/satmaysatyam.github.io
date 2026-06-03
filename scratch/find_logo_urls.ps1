$queries = @(
    "Indian Institute of Science logo",
    "Wildlife Institute of India logo",
    "WWF logo",
    "Pondicherry University logo",
    "St. Xavier's College logo"
)

$userAgent = "SatyamGuptaAcademicBot/1.0 (satmaysatyam@gmail.com; personal academic portfolio)"

foreach ($q in $queries) {
    Write-Host "Searching for ${q}..."
    $encoded = [uri]::EscapeDataString($q)
    $url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&generator=search&gsrsearch=${encoded}&gsrnamespace=6&iiprop=url&gsrlimit=3"
    
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        $resp = Invoke-RestMethod -Uri $url -UserAgent $userAgent -TimeoutSec 10
        if ($resp.query.pages) {
            foreach ($prop in $resp.query.pages.psobject.properties) {
                $page = $prop.Value
                if ($page.imageinfo -and $page.imageinfo[0].url) {
                    Write-Host " - Title: $($page.title)"
                    Write-Host "   URL: $($page.imageinfo[0].url)"
                }
            }
        } else {
            Write-Host "No pages found for ${q}"
        }
    } catch {
        Write-Host "Error searching for ${q}: $_"
    }
    Write-Host "========================================"
}
