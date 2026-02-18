import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GalleryViewer from '@/components/GalleryViewer';
import Link from 'next/link';

// Gallery configuration - just add the folder name and photo count here!
const galleryConfig: Record<string, { title: string; description: string; photoCount: number; folder: string }> = {
  'oceanic-prodigies': {
    title: 'Oceanic Prodigies',
    description: "Australia's only LAN intervarsity esports tournament",
    photoCount: 29,
    folder: 'oceanic-prodigies'
  },
  'megalan': {
    title: 'MegaLan',
    description: 'Highlights from our biggest LAN party',
    photoCount: 49,
    folder: 'megalan'
  },
  'pc-building-workshop': {
    title: 'PC Building Workshop',
    description: 'Teaching members how to build their first PC',
    photoCount: 64,
    folder: 'pc-building-workshop'
  }
};

export default async function GalleryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const config = galleryConfig[slug];

  if (!config) {
    return (
      <>
        <Navigation />
        <main className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Gallery Not Found</h1>
            <Link href="/gallery" className="text-blue-600 hover:underline">← Back to Gallery</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (config.photoCount === 0) {
    return (
      <>
        <Navigation />
        <main className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{config.title}</h1>
            <p className="text-gray-600 mb-6">Photos coming soon!</p>
            <Link href="/gallery" className="text-blue-600 hover:underline">← Back to Gallery</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const photos = Array.from({ length: config.photoCount }, (_, i) => ({
    src: `/img/gallery/${config.folder}/${i + 1}.jpg`,
    alt: `${config.title} Photo ${i + 1}`
  }));

  return (
    <>
      <Navigation />

      <main className="pt-20 min-h-screen">
        {/* Header */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Link href="/gallery" className="text-gray-400 hover:text-white mb-4 inline-block">
                ← Back to Gallery
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {config.title}
              </h1>
              <p className="text-xl text-gray-300">
                {config.description}
              </p>
            </div>
          </div>
        </section>

        {/* Photo Grid */}
        <GalleryViewer photos={photos} />
      </main>

      <Footer />
    </>
  );
}

// Required for static export
export function generateStaticParams() {
  return Object.keys(galleryConfig).map((slug) => ({
    slug,
  }));
}
