
import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = index + 1;
    if (nextIndex < images.length) {
      setIndex(nextIndex);
    }
  };

  const handlePrevious = () => {
    const prevIndex = index - 1;
    if (prevIndex >= 0) {
      setIndex(prevIndex);
    }
  };

  return (
    <div className='w-full h-full flex  '>
      <button onClick={handlePrevious}>Prev</button>
      <img src={images[index].img} className=" w-full  object-cover rounded-lg object-center" alt="carousel" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ImageCarousel;