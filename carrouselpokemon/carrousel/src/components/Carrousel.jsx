import React, { useState, useEffect } from 'react';
import '../App.css';

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, images]);

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsPaused(true);
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsPaused(true);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="carousel-box">
      <div className="carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="image-container">
          <div className="arrow left" onClick={handleLeftArrowClick}>
            &lt;
          </div>
          {[0, 1, 2].map((i) => {
            const adjustedIndex = (currentIndex + i) % images.length;

            return (
              <img
                key={i}
                src={images[adjustedIndex]}
                alt={`Image ${adjustedIndex}`}
                className={`image ${i === 1 ? 'center' : 'side'}`}
              />
            );
          })}
          <div className="arrow right" onClick={handleRightArrowClick}>
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
