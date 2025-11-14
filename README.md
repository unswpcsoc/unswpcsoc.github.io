# UNSW PCSoc Website

Modern Next.js website for the UNSW Computer Enthusiasts Society.

## Features

- Built with Next.js 16 and React
- Styled with Tailwind CSS
- Fully responsive design
- Static site generation for GitHub Pages
- Automatic deployment via GitHub Actions

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

Build the static site:
```bash
npm run build
```

The static files will be generated in the `out/` directory.

## Deployment

The site automatically deploys to GitHub Pages when you push to the `master` branch.

### Manual Deployment

If you need to deploy manually:

1. Build the site: `npm run build`
2. The `out/` directory contains the static files
3. These will be deployed via GitHub Actions

## Project Structure

```
├── app/                # Next.js App Router pages
│   ├── page.tsx       # Home page
│   ├── events/        # Events page
│   ├── layout.tsx     # Root layout
│   └── globals.css    # Global styles
├── components/        # React components
│   ├── Navigation.tsx # Navigation bar
│   └── Footer.tsx     # Footer
├── public/            # Static assets
│   └── img/          # Images
└── next.config.ts     # Next.js configuration
```

## Updating Content

### Adding Events

Edit `app/events/page.tsx` to add event information.

### Managing Photo Galleries

The website features an easy-to-use gallery system. Just drop photos in a folder, rename them sequentially, and update a config file!

#### Quick Start: Adding a New Gallery

**1. Prepare Your Photos**

Create a folder and add your photos:
```bash
mkdir -p public/img/gallery/your-event-name
# Copy your photos here (they can have any names)
```

**2. Rename Photos Automatically**

Use the included script to rename all photos to 1.jpg, 2.jpg, 3.jpg, etc.:
```bash
./rename-gallery-photos.sh public/img/gallery/your-event-name
```

The script will:
- Find all image files (JPG, JPEG, PNG)
- Ask for confirmation before renaming
- Safely rename them in alphabetical order
- Convert all to .jpg extension

**3. Update Gallery Configuration**

Edit **two files** to add your gallery:

**File 1:** `app/gallery/[slug]/page.tsx` (around line 6)
```typescript
const galleryConfig = {
  // Add your new gallery:
  'your-event-name': {
    title: 'Your Event Name',
    description: 'Event description',
    photoCount: 15,  // Number of photos you added
    folder: 'your-event-name'  // Folder name
  }
};
```

**File 2:** `app/gallery/page.tsx` (around line 5)
```typescript
const galleries = [
  // Add your new gallery:
  {
    title: "Your Event Name",
    description: "Event description",
    imageCount: 15,  // Number of photos
    thumbnail: "/img/gallery/your-event-name/1.jpg",  // First photo
    slug: "your-event-name"  // Must match slug in File 1
  }
];
```

**4. Rebuild and Deploy**
```bash
npm run build
git add .
git commit -m "Add your-event-name gallery"
git push
```

#### Gallery Features

- **Automatic Photo Loading**: Photos are loaded as 1.jpg, 2.jpg, 3.jpg automatically
- **Lightbox Viewer**: Click any photo for full-screen view with arrow navigation
- **Responsive Grid**: Mobile-friendly layout
- **No Manual References**: Just drop files and update the count!

#### Example Workflow

```bash
# 1. You have photos: IMG_1234.JPG, IMG_1235.JPG, DSC_9876.png
mkdir -p public/img/gallery/megalan-2025
cp ~/Downloads/*.{jpg,png} public/img/gallery/megalan-2025/

# 2. Rename them sequentially
./rename-gallery-photos.sh public/img/gallery/megalan-2025
# Output: Found 3 image files
# Renamed: DSC_9876.png -> 1.jpg
# Renamed: IMG_1234.JPG -> 2.jpg
# Renamed: IMG_1235.JPG -> 3.jpg

# 3. Update configs (see above)

# 4. Deploy
npm run build
git add . && git commit -m "Add MegaLAN 2025 gallery" && git push
```

### Updating Team Members

Edit `app/team/page.tsx` to update executive and director information.

### Modifying Social Links

Update the links in `app/page.tsx` in the "Join Us" section.

### Changing Contact Information

Edit the contact section in `app/page.tsx`.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## License

See LICENSE file for details.
