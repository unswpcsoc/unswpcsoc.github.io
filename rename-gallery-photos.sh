#!/bin/bash

# Gallery Photo Renamer
# Usage: ./rename-gallery-photos.sh /path/to/photo/folder

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
echo "This will rename all images to 1.jpg, 2.jpg, 3.jpg, etc."
read -p "Continue? (y/n) " -n 1 -r
echo

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled"
    exit 0
fi

# Create temp directory for safety
TEMP_DIR="$DIR/.temp_rename"
mkdir -p "$TEMP_DIR"

# Copy and rename files to temp directory
counter=1
find "$DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.JPG" -o -iname "*.JPEG" -o -iname "*.PNG" \) | sort | while read file; do
    cp "$file" "$TEMP_DIR/$counter.jpg"
    echo "Renamed: $(basename "$file") -> $counter.jpg"
    counter=$((counter + 1))
done

# Remove original files and move renamed files back
find "$DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.JPG" -o -iname "*.JPEG" -o -iname "*.PNG" \) -delete
mv "$TEMP_DIR"/* "$DIR/"
rmdir "$TEMP_DIR"

echo "Done! Renamed $count files to sequential numbers."
