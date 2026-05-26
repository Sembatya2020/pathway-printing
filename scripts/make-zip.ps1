# Builds hostinger_deploy.zip with POSIX (forward-slash) paths
# Required because Windows zip tools default to backslashes,
# which Linux servers (Hostinger) treat as literal filename characters.

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$root      = Split-Path -Parent $PSScriptRoot
$sourceDir = Join-Path $root 'out'
$zipPath   = Join-Path $root 'hostinger_deploy.zip'

if (-not (Test-Path $sourceDir)) {
  Write-Error "Source folder not found: $sourceDir. Run 'npm run build' first."
  exit 1
}

if (Test-Path $zipPath) { Remove-Item $zipPath -Force }

$sourceFull = (Resolve-Path $sourceDir).Path.TrimEnd('\') + '\'

$fileStream = [System.IO.File]::Create($zipPath)
$archive    = New-Object System.IO.Compression.ZipArchive($fileStream, [System.IO.Compression.ZipArchiveMode]::Create)

try {
  $count = 0
  Get-ChildItem -Path $sourceDir -Recurse -File | ForEach-Object {
    # Compute path relative to source root, then normalize to forward slashes
    $relative = $_.FullName.Substring($sourceFull.Length).Replace('\', '/')

    $entry  = $archive.CreateEntry($relative, [System.IO.Compression.CompressionLevel]::Optimal)
    $stream = $entry.Open()
    try {
      $bytes = [System.IO.File]::ReadAllBytes($_.FullName)
      $stream.Write($bytes, 0, $bytes.Length)
    } finally {
      $stream.Close()
    }
    $count++
  }
  Write-Host "Added $count files to zip"
} finally {
  $archive.Dispose()
  $fileStream.Close()
}

$sizeMB = [math]::Round((Get-Item $zipPath).Length / 1MB, 2)
Write-Host "Created: $zipPath ($sizeMB MB)"
