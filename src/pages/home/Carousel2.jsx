
import React, { useState }  from 'react';

function ImageCarousel (props) {
  // Set state with array containing images
  const [images, setImages] = useState(props.images);

  const [index, setIndex] = useState(0);

  // Create function that increases index when next button is clicked
  const nextImage = () => {
    let newIndex = (index + 1) % images.length;
    setIndex(newIndex);
  };

  // Create function that decreases index when previous button is clicked
  const previousImage = () => {
    let newIndex;
    if (index === 0) {
      newIndex = images.length - 1;
      setIndex(newIndex);
    }
    else
    {
      newIndex = ((index - 1) % images.length + images.length) % images.length;
      setIndex(newIndex);
     }
  };

  return ( 
    <div>
      <button onClick={nextImage}>Next</button>
      <button onClick={previousImage}>Previous</button>
      <img src={images[index].src} width={200} />
    </div>
  );
}

export default ImageCarousel;