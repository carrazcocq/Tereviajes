import React, { useEffect, useRef, useState } from 'react';
import { Camera, Facebook } from 'lucide-react';

const galleryImages = [
  "https://i.postimg.cc/7PGdr9HM/Whats-App-Image-2026-01-13-at-22-10-08-(1).jpg",
  "https://i.postimg.cc/447qRPf1/Whats-App-Image-2026-01-13-at-22-10-08-(2).jpg",
  "https://i.postimg.cc/VvCV9fG7/Whats-App-Image-2026-01-13-at-22-10-10.jpg",
  "https://i.postimg.cc/c1g2Ghxm/Whats-App-Image-2026-01-13-at-22-10-10-(1).jpg",
  "https://i.postimg.cc/Hnyh0YZ6/Whats-App-Image-2026-01-13-at-22-10-10-(2).jpg",
  "https://i.postimg.cc/cCnb7x9h/Whats-App-Image-2026-01-13-at-22-10-10-(3).jpg",
  "https://i.postimg.cc/zvgcwztp/Whats-App-Image-2026-01-13-at-22-10-10-(4).jpg",
  "https://i.postimg.cc/5yCR547K/Whats-App-Image-2026-01-13-at-22-10-11.jpg",
  "https://i.postimg.cc/rsrPGVZk/Whats-App-Image-2026-01-13-at-22-10-13.jpg",
  "https://i.postimg.cc/ZndMPb7D/Whats-App-Image-2026-01-13-at-22-10-13-(1).jpg",
  "https://i.postimg.cc/RhHD1SsD/Whats-App-Image-2026-01-13-at-22-10-13-(2).jpg",
  "https://i.postimg.cc/brtB0yC5/Whats-App-Image-2026-01-13-at-22-10-13-(3).jpg",
  "https://i.postimg.cc/QCTyg84P/Whats-App-Image-2026-01-13-at-22-10-13-(4).jpg",
  "https://i.postimg.cc/yxZbh1p1/Whats-App-Image-2026-01-13-at-22-10-14.jpg",
  "https://i.postimg.cc/x8z4GfpV/Whats-App-Image-2026-01-13-at-22-10-14-(1).jpg",
  "https://i.postimg.cc/ZndMPbsm/Whats-App-Image-2026-01-13-at-22-10-14-(2).jpg",
  "https://i.postimg.cc/j27F6x3K/Whats-App-Image-2026-01-13-at-22-10-14-(3).jpg",
  "https://i.postimg.cc/0jwBGkXP/Whats-App-Image-2026-01-13-at-22-10-14-(4).jpg",
  "https://i.postimg.cc/WzkHmNY2/Whats-App-Image-2026-01-13-at-22-10-14-(5).jpg",
  "https://i.postimg.cc/HWcR1zYM/Whats-App-Image-2026-01-13-at-22-10-15.jpg",
  "https://i.postimg.cc/Y0WsNrD2/Whats-App-Image-2026-01-13-at-22-10-15-(1).jpg",
  "https://i.postimg.cc/4y9Svf2N/Whats-App-Image-2026-01-13-at-22-10-15-(2).jpg",
  "https://i.postimg.cc/Hnyh0Yvk/Whats-App-Image-2026-01-13-at-22-10-15-(3).jpg",
  "https://i.postimg.cc/brtB0yVJ/Whats-App-Image-2026-01-13-at-22-10-15-(4).jpg",
  "https://i.postimg.cc/y6gtCj1Z/Whats-App-Image-2026-01-13-at-22-10-15-(5).jpg",
  "https://i.postimg.cc/QN9wZm8p/Whats-App-Image-2026-01-13-at-22-10-16.jpg",
  "https://i.postimg.cc/MZMNJ56R/Whats-App-Image-2026-01-13-at-22-10-16-(1).jpg",
  "https://i.postimg.cc/XNGm6Ljd/Whats-App-Image-2026-01-13-at-22-10-16-(2).jpg",
  "https://i.postimg.cc/kM6zPsJW/Whats-App-Image-2026-01-13-at-22-10-16-(3).jpg"
];

// Duplicate images to create seamless loop
const allImages = [...galleryImages, ...galleryImages];

const ImageGallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    const speed = 0.8; // Automatic scroll speed

    const animate = () => {
      // Only auto-scroll if not interacting
      if (!isDragging && !isPaused) {
        container.scrollLeft += speed;
      }

      // Seamless Loop Logic
      // If we've scrolled past the first set of images (halfway), reset to 0
      // We use scrollWidth / 2 assuming the two sets are identical width
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging, isPaused]);

  // Mouse Events
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplier for faster drag
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  // Touch Events (for Mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    if (scrollRef.current) {
      setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-trip-ice text-trip-primary font-bold text-sm mb-4 border border-trip-secondary/20">
          <Camera size={16} />
          <span className="uppercase tracking-wider">Galería de Momentos</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-trip-black mb-4">
          Recuerdos Inolvidables
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Un vistazo a las experiencias y sonrisas de nuestros viajeros por todo el mundo.
          <span className="block text-sm text-gray-400 mt-2 font-medium">(Desliza para explorar)</span>
        </p>
      </div>

      <div className="relative w-full group">
        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden cursor-grab active:cursor-grabbing scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex gap-4 px-2">
            {allImages.map((src, index) => (
              <div 
                key={`gallery-${index}`} 
                className="relative h-64 w-48 md:h-80 md:w-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-white transform transition-transform duration-300 hover:scale-95 active:scale-90"
              >
                <img 
                  src={src} 
                  alt={`Viajero Tereviajes`} 
                  loading="lazy"
                  className="h-full w-full object-cover pointer-events-none" // pointer-events-none essential for drag
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient Overlays for smooth edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
      
      <div className="text-center mt-10">
         <a 
           href="https://www.facebook.com/tereviajes2019" 
           target="_blank" 
           rel="noreferrer"
           className="inline-flex items-center gap-2 text-trip-primary font-bold hover:text-trip-secondary transition-colors"
         >
           <Facebook size={20} />
           Síguenos en Facebook para ver más
         </a>
      </div>
    </section>
  );
};

export default ImageGallery;