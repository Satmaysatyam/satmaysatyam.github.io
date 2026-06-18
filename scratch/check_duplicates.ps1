# check_duplicates.ps1
$content = Get-Content -Path "data.js" -Raw
$matches = [regex]::Matches($content, "id:\s*'([^']+)'")
$ids = foreach ($m in $matches) { $m.Groups[1].Value }
$ids | Group-Object | Where-Object { $_.Count -gt 1 } | Format-Table Name, Count
