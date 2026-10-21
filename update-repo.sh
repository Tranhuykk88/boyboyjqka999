#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$repo_dir"

command -v dpkg-scanpackages >/dev/null || {
  echo "Missing dpkg-scanpackages. Install dpkg-dev first." >&2
  exit 1
}

dpkg-scanpackages --multiversion debs /dev/null > Packages
gzip -9c Packages > Packages.gz
bzip2 -9c Packages > Packages.bz2

cp Release.template Release
{
  echo "Date: $(LC_ALL=C date -Ru)"
  echo "MD5Sum:"
  for file in Packages Packages.gz Packages.bz2; do
    printf " %s %16d %s\n" "$(md5sum "$file" | cut -d' ' -f1)" "$(stat -c%s "$file")" "$file"
  done
  echo "SHA256:"
  for file in Packages Packages.gz Packages.bz2; do
    printf " %s %16d %s\n" "$(sha256sum "$file" | cut -d' ' -f1)" "$(stat -c%s "$file")" "$file"
  done
} >> Release

echo "Repository indexes updated."
