import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Gallery() {
  const galleries = [
    {
      title: "Oceanic Prodigies",
      description: "Australia's only LAN intervarsity esports tournament",
      imageCount: 29,
      thumbnail: "/img/gallery/oceanic-prodigies/1.jpg",
      slug: "oceanic-prodigies"
    },
    {
      title: "MegaLan",
      description: "Highlights from our biggest LAN party",
      imageCount: 49,
      thumbnail: "/img/gallery/megalan/1.jpg",
      slug: "megalan"
    },
    {
      title: "PC Building Workshop",
      description: "Teaching members how to build their first PC",
      imageCount: 64,
      thumbnail: "/img/gallery/pc-building-workshop/1.jpg",
      slug: "pc-building-workshop"
    },
    {
      title: "Social Meetups",
      description: "Casual gaming sessions and hangouts",
      imageCount: "Coming Soon",
      thumbnail: null,
      slug: null
    }
  ];

  return (
    <>
      <Navigation />

      <main className="pt-20 min-h-screen">
        {/* Header Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Photo Gallery
              </h1>
              <p className="text-xl text-gray-300">
                Memories from our events and activities
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {galleries.map((gallery, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    {gallery.thumbnail ? (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={gallery.thumbnail}
                          alt={gallery.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br from-pink-500 to-purple-600 h-48 flex items-center justify-center text-white">
                        <span className="text-2xl font-bold">Coming Soon</span>
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {gallery.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{gallery.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {typeof gallery.imageCount === 'number' ? `${gallery.imageCount} photos` : gallery.imageCount}
                        </span>
                        {gallery.slug && (
                          <a
                            href={`/gallery/${gallery.slug}`}
                            className="text-pink-600 font-semibold hover:text-pink-700"
                          >
                            View Gallery →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coming Soon */}
              <div className="mt-12 bg-gray-900 rounded-xl p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">More Photos Coming Soon!</h2>
                <p className="text-lg text-gray-300 mb-6">
                  We&apos;re building our photo gallery. Check back soon for more event photos and memories!
                </p>
                <p className="text-gray-300">
                  Have photos to share? Send them to <a href="mailto:unswpcsoc@gmail.com" className="underline font-semibold hover:text-white">unswpcsoc@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
