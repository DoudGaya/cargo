
import React, { useState }  from 'react';

function ImageCarousel ({banner}) {
  // Set state with array containing images

  console.log(banner)


  const [images, setImages] = useState(banner);

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


  console.log(images[index])

  return ( 
    <div className='w-full h-full saturate-50 bg-cover bg-center flex bg-no-repeat bg-fixed bg-transparent transition-all duration-200 ease-in-out delay-200' style={{ backgroundImage: `url(${images[index].src})`}} >
      <button className=' bg-[rgb(24,135,62)] absolute z-50 top-[50%] left-0 px-10 py-2' onClick={nextImage}>Next</button>
      <button className=' bg-[rgb(24,135,62)] absolute z-50 top-[50%] right-0 px-10 py-2' onClick={previousImage}>Previous</button>
      {/* <img src={images[index].src} width={200} /> */}
    </div>
  );
}

export default ImageCarousel;