$port = 8282
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
try {
    $listener.Start()
    Write-Host "Server started successfully."
    Write-Host "Listening on http://localhost:$port/"
    Write-Host "Press Ctrl+C to stop the server."
}
catch {
    Write-Error "Failed to start listener. Make sure port $port is not in use and you have appropriate permissions."
    exit 1 
}

$currentDir = (Get-Item -Path ".").FullName

while ($listener.IsListening) {
    $context = $null
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $urlPath = $request.Url.LocalPath
        Write-Host "Received request: $($request.HttpMethod) $urlPath"
        
        if ($urlPath -eq "/" -or $urlPath -eq "") {
            $urlPath = "/index.html"
        }
        
        # Decode URL path to handle percent-encoded characters like %20 for spaces
        $decodedPath = [Uri]::UnescapeDataString($urlPath)
        
        $filePath = Join-Path $currentDir $decodedPath
        
        if (Test-Path $filePath -PathType Leaf) {
            $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($extension) {
                ".html" { "text/html; charset=utf-8" }
                ".css" { "text/css" }
                ".js" { "application/javascript" }
                ".png" { "image/png" }
                ".jpg" { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".gif" { "image/gif" }
                ".svg" { "image/svg+xml" }
                ".json" { "application/json" }
                ".wav" { "audio/wav" }
                default { "application/octet-stream" }
            }
            
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            
            # Disable caching for development
            $response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate")
            $response.Headers.Add("Pragma", "no-cache")
            $response.Headers.Add("Expires", "0")
            
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
        }
        else {
            $response.StatusCode = 404
            $bytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $decodedPath")
            $response.ContentLength64 = $bytes.Length
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
        }
    }
    catch {
        # Log error but don't stop the server
        Write-Host "Error handling request: $_"
    }
    finally {
        if ($context -ne $null) {
            try {
                $context.Response.Close()
            } catch {
                Write-Host "Error closing response: $_"
            }
        }
    }
}
