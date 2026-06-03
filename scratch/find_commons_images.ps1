$species = @(
    "Clinotarsus curtipes",
    "Euphlyctis cyanophlyctis",
    "Hydrophylax bahuvistara",
    "Minervarya syhadrensis",
    "Pseudophilautus amboli",
    "Polypedates maculatus",
    "Pedostibes tuberculosus",
    "Raorchestes luteolus"
)

$userAgent = "SatyamGuptaAcademicBot/1.0 (satmaysatyam@gmail.com; personal academic portfolio)"

foreach ($sp in $species) {
    Write-Host "Searching for ${sp}..."
    $encoded = [uri]::EscapeDataString($sp)
    $url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&generator=search&gsrsearch=${encoded}&gsrnamespace=6&iiprop=url&gsrlimit=1"
    
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        $resp = Invoke-RestMethod -Uri $url -UserAgent $userAgent -TimeoutSec 10
        if ($resp.query.pages) {
            foreach ($pageId in $resp.query.pages.Keys) {
                $page = $resp.query.pages.$pageId
                $imgUrl = $page.imageinfo[0].url
                Write-Host "Found image URL for ${sp}: $imgUrl"
            }
        } else {
            Write-Host "No pages found for ${sp}"
        }
    } catch {
        Write-Host "Error searching for ${sp}: $_"
    }
}
