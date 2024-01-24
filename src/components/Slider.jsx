import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../src/App.css'; // Assurez-vous d'ajouter le CSS ci-dessous dans ce fichier

const ImageSlider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className='slider-container picsDetail'>
      {pictures.length > 0 && (
        <>
          <button onClick={goToPrev} className='slider-arrow left'>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
          <button onClick={goToNext} className='slider-arrow right'>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className='slider-index'>
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
