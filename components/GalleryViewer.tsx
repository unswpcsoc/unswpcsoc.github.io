'use client';

import { useState } from 'react';

interface Photo {
  src: string;
  alt: string;
}

interface GalleryViewerProps {
  photos: Photo[];
}

export default function GalleryViewer({ photos }: GalleryViewerProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="relative aspect-video overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-4xl">
                      🔍
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
          >
            ×
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white text-4xl hover:text-gray-300 z-10"
          >
            ‹
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white text-4xl hover:text-gray-300 z-10"
          >
            ›
          </button>

          <div className="max-w-7xl max-h-[90vh] px-16">
            <img
              src={photos[currentImage].src}
              alt={photos[currentImage].alt}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="absolute bottom-4 text-white text-center">
            {currentImage + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
