# validate.ps1
# Read data.js content
$content = Get-Content -Path "data.js" -Raw

# Replace const site = with a JSON-like structure or just do basic regex validation
# Let's count how many photos are defined and print their properties
$matches = [regex]::Matches($content, '\{\s*id:\s*''([^'']+)''')
Write-Host "Found $($matches.Count) photo entries:"
foreach ($m in $matches) {
    Write-Host " - ID: $($m.Groups[1].Value)"
}
