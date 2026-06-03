$destDir = "c:\Users\satma\Documents\Personal Website\mnt\data\satyam_github_pages_site\Audio Bank"
if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

# Mapping of species queries to target filenames
$speciesMapping = @{
    "Clinotarsus curtipes"     = "C_curtipes"
    "Euphlyctis cyanophlyctis" = "E_cyanophlyctis"
    "Hydrophylax bahuvistara"  = "H_bahuvistara"
    "Minervarya syhadrensis"   = "M_syhadrensis"
    "Pseudophilautus amboli"   = "P_amboli"
    "Polypedates maculatus"    = "P_maculatus"
    "Pedostibes tuberculosus"  = "P_tuberculosus"
    "Raorchestes luteolus"     = "R_luteolus"
}

$userAgent = "SatyamGuptaAcademicBot/1.0 (satmaysatyam@gmail.com; personal academic portfolio)"

foreach ($sp in $speciesMapping.Keys) {
    $targetBase = $speciesMapping[$sp]
    Write-Host "Searching Wikimedia Commons for '${sp}'..."
    $encoded = [uri]::EscapeDataString($sp)
    # Search in File namespace (6)
    $url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&generator=search&gsrsearch=${encoded}&gsrnamespace=6&iiprop=url&gsrlimit=3"
    
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        $resp = Invoke-RestMethod -Uri $url -UserAgent $userAgent -TimeoutSec 10
        
        $imgUrl = $null
        if ($resp.query.pages) {
            foreach ($prop in $resp.query.pages.psobject.properties) {
                $page = $prop.Value
                if ($page.imageinfo -and $page.imageinfo[0].url) {
                    $possibleUrl = $page.imageinfo[0].url
                    # Prefer jpg/jpeg/png
                    if ($possibleUrl -match "\.(jpg|jpeg|png)$") {
                        $imgUrl = $possibleUrl
                        break
                    }
                }
            }
            # Fallback to first if no matching extension filter
            if (-not $imgUrl -and $resp.query.pages.psobject.properties[0]) {
                $imgUrl = $resp.query.pages.psobject.properties[0].Value.imageinfo[0].url
            }
        }
        
        if ($imgUrl) {
            # Get extension from URL
            $ext = [System.IO.Path]::GetExtension($imgUrl)
            if (-not $ext) { $ext = ".jpg" } # fallback
            
            $targetFilename = "${targetBase}${ext}"
            $destPath = Join-Path $destDir $targetFilename
            
            Write-Host "Downloading $imgUrl to $destPath..."
            Invoke-WebRequest -Uri $imgUrl -OutFile $destPath -UserAgent $userAgent -TimeoutSec 30
            Write-Host "SUCCESS: Saved as $targetFilename"
        } else {
            Write-Host "WARNING: No image found for '${sp}'"
        }
    } catch {
        Write-Host "ERROR searching/downloading for '${sp}': $_"
    }
    Write-Host "----------------------------------------"
}
