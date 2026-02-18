'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    src: '/img/gallery/pc-building-workshop/12.jpg',
    overlay: 'bg-black/50',
  },
  {
    src: '/img/gallery/megalan/1.jpg',
    overlay: 'bg-black/50',
  },
  {
    src: '/img/gallery/pc-building-workshop/11.jpg',
    overlay: 'bg-black/50',
  },
  {
    src: '/img/gallery/megalan/20.jpg',
    overlay: 'bg-black/50',
  },
  {
    src: '/img/gallery/pc-building-workshop/35.jpg',
    overlay: 'bg-black/50',
  },
  {
    src: '/img/gallery/oceanic-prodigies/28.jpg',
    overlay: 'bg-black/50',
  },
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt="Hero Background"
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className={`absolute inset-0 ${slide.overlay}`}></div>
        </div>
      ))}
    </div>
  );
}
