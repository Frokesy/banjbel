import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CarouselContainer: React.FC = () => {
  const images = [
    '/slideshow/1.jpg',
    '/slideshow/2.jpg',
    '/slideshow/3.jpg',
    '/slideshow/4.jpg',
    '/slideshow/5.jpg',
    '/slideshow/6.jpg',
    '/slideshow/7.jpg',
    '/slideshow/8.jpg',
    '/slideshow/9.jpg',
    '/slideshow/10.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="relative w-full h-[350px] lg:h-[650px] overflow-hidden">
      <AnimatePresence mode='wait'>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="slideshow"
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default CarouselContainer;
