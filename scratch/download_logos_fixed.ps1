$logosDir = "c:\Users\satma\Documents\Personal Website\mnt\data\satyam_github_pages_site\logos"
if (!(Test-Path $logosDir)) {
    New-Item -ItemType Directory -Path $logosDir -Force
}

$urls = @{
    "iisc.svg" = "https://upload.wikimedia.org/wikipedia/commons/e/ea/IISc_logo%282%29.svg"
    "wii.svg"  = "https://upload.wikimedia.org/wikipedia/commons/2/23/Logo_of_the_Wildlife_Institute_of_India.svg"
    "wwf.svg"  = "https://upload.wikimedia.org/wikipedia/commons/2/24/WWF_logo.svg"
    "pu.png"   = "https://upload.wikimedia.org/wikipedia/en/9/91/Pondicherry_University_logo.png"
    "stxav.png"= "https://upload.wikimedia.org/wikipedia/en/5/53/St._Xavier%27s_College_logo.png"
}

# Proper User-Agent to satisfy Wikimedia policy
$userAgent = "SatyamGuptaAcademicBot/1.0 (satmaysatyam@gmail.com; personal academic portfolio)"

foreach ($filename in $urls.Keys) {
    $url = $urls[$filename]
    $dest = Join-Path $logosDir $filename
    Write-Host "Downloading $url to $dest..."
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        Invoke-WebRequest -Uri $url -OutFile $dest -UserAgent $userAgent -TimeoutSec 15 -ErrorAction Stop
        Write-Host "Success!"
    } catch {
        Write-Host "Failed to download $url : $_"
    }
}
