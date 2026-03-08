#!/bin/bash

# Gallery Photo Renamer + Compressor
# Usage: ./rename-gallery-photos.sh /path/to/photo/folder
# Requires: ImageMagick (convert)

if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is required but not installed."
    echo "Install with: sudo apt install imagemagick  (or brew install imagemagick on macOS)"
    exit 1
fi

if [ $# -eq 0 ]; then
    echo "Usage: ./rename-gallery-photos.sh <directory>"
    echo "Example: ./rename-gallery-photos.sh public/img/gallery/my-event"
    exit 1
fi

DIR="$1"

if [ ! -d "$DIR" ]; then
    echo "Error: Directory '$DIR' does not exist"
    exit 1
fi

# Count image files
count=$(find "$DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.JPG" -o -iname "*.JPEG" -o -iname "*.PNG" \) | wc -l)

if [ "$count" -eq 0 ]; then
    echo "No image files found in $DIR"
    exit 1
fi

echo "Found $count image files in $DIR"
echo "This will rename all images to 1.jpg, 2.jpg, 3.jpg, etc. and compress them."
read -p "Continue? (y/n) " -n 1 -r
echo

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled"
    exit 0
fi

# Create temp directory for safety
TEMP_DIR="$DIR/.temp_rename"
mkdir -p "$TEMP_DIR"

# Rename and compress files to temp directory
counter=1
find "$DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.JPG" -o -iname "*.JPEG" -o -iname "*.PNG" \) | sort | while read file; do
    convert "$file" -resize '1920x1920>' -quality 85 -strip "$TEMP_DIR/$counter.jpg"
    echo "Processed: $(basename "$file") -> $counter.jpg"
    counter=$((counter + 1))
done

# Remove original files and move renamed files back
find "$DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.JPG" -o -iname "*.JPEG" -o -iname "*.PNG" \) -delete
mv "$TEMP_DIR"/* "$DIR/"
rmdir "$TEMP_DIR"

echo "Done! Processed $count files: renamed to sequential numbers and compressed (max 1920px, quality 85)."
