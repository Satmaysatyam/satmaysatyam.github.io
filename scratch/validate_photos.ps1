# validate_photos.ps1
$content = Get-Content -Path "data.js" -Raw

# Find the photos block
if ($content -match 'photos:\s*\[([\s\S]+?)\]\s*,\s*\n\s*art:') {
    $photosBlock = $Matches[1]
} else {
    # If art is not immediately after, match till the end of array
    if ($content -match 'photos:\s*\[([\s\S]+?)\]\s*,\s*\n\s*\w+:') {
        $photosBlock = $Matches[1]
    } else {
        $content -match 'photos:\s*\[([\s\S]+?)\]' | Out-Null
        $photosBlock = $Matches[1]
    }
}

# Split by opening brace of photo objects
$photoObjects = $photosBlock -split '\{\s*\n' | Where-Object { $_ -match 'id:' }

Write-Host "Total photo objects found: $($photoObjects.Count)"

foreach ($obj in $photoObjects) {
    # Extract ID
    $id = ""
    if ($obj -match "id:\s*'([^']+)'") {
        $id = $Matches[1]
    }
    
    # Check keys
    $hasTitle = $obj -match "title:"
    $hasScientific = $obj -match "scientific:"
    $hasGroup = $obj -match "group:"
    $hasSrcs = $obj -match "srcs:"
    $hasCaptions = $obj -match "captions:"
    $hasEmoji = $obj -match "emoji:"
    
    if (-not ($hasTitle -and $hasScientific -and $hasGroup -and $hasSrcs -and $hasCaptions -and $hasEmoji)) {
        Write-Host "WARNING: Photo '$id' is missing keys!"
        Write-Host " - title: $hasTitle"
        Write-Host " - scientific: $hasScientific"
        Write-Host " - group: $hasGroup"
        Write-Host " - srcs: $hasSrcs"
        Write-Host " - captions: $hasCaptions"
        Write-Host " - emoji: $hasEmoji"
    } else {
        # Check matching counts of srcs and captions
        # Extract srcs array items count
        $srcsCount = 0
        if ($obj -match "srcs:\s*\[([\s\S]*?)\]") {
            $srcsStr = $Matches[1]
            $srcsCount = ($srcsStr -split ',').Count
        }
        $captionsCount = 0
        if ($obj -match "captions:\s*\[([\s\S]*?)\]") {
            $captionsStr = $Matches[1]
            $captionsCount = ($captionsStr -split ',').Count
        }
        if ($srcsCount -ne $captionsCount) {
            Write-Host "WARNING: Photo '$id' has mismatching counts! Srcs count: $srcsCount, Captions count: $captionsCount"
        }
    }
}
