#!/bin/bash

while read -r line; do
  url=$(echo "$line" | grep -oP 'url": "\K[^"]+')
  filename=$(basename "$url")
  curl -O -J -L "$url" -o "$filename"
done < log.log

