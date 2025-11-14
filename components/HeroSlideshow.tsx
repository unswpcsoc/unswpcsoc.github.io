'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    src: '/img/header-bg-1@0,5x.jpg',
    overlay: 'bg-black/50',
  },
  {
    src: '/img/header-bg-2@1x.jpg',
    overlay: 'bg-gradient-to-b from-black/80 via-black/30 to-black/0',
  },
  {
    src: '/img/header-bg-3.jpg',
    overlay: 'bg-gradient-to-b from-black/30 via-black/50 to-black/0',
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
