$userAgent = "SatyamGuptaAcademicBot/1.0 (satmaysatyam@gmail.com; personal academic portfolio)"
$url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=Category:Euphlyctis_cyanophlyctis&cmnamespace=6&cmlimit=50"

try {
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    $resp = Invoke-RestMethod -Uri $url -UserAgent $userAgent -TimeoutSec 10
    if ($resp.query.categorymembers) {
        Write-Host "Category members:"
        foreach ($member in $resp.query.categorymembers) {
            Write-Host " - Title: $($member.title)"
            # Get URL
            $fileTitle = [uri]::EscapeDataString($member.title)
            $infoUrl = "https://commons.wikimedia.org/w/api.php?action=query&format=json&titles=${fileTitle}&prop=imageinfo&iiprop=url|size"
            $infoResp = Invoke-RestMethod -Uri $infoUrl -UserAgent $userAgent -TimeoutSec 5
            if ($infoResp.query.pages) {
                foreach ($pageId in $infoResp.query.pages.Keys) {
                    $page = $infoResp.query.pages.$pageId
                    if ($page.imageinfo) {
                        Write-Host "   Width: $($page.imageinfo[0].width), Height: $($page.imageinfo[0].height)"
                        Write-Host "   URL: $($page.imageinfo[0].url)"
                    }
                }
            }
        }
    } else {
        Write-Host "No category members found"
    }
} catch {
    Write-Host "Error: $_"
}
