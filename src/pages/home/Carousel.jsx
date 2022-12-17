
import { React, useState, useEffect } from 'react';
// import logo from '../../assets/imgs/logo-banner.png'

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = index + 1;
    if (nextIndex < images.length) {
      setIndex(nextIndex);
    } else {
      setIndex(0)
    }
  };


  useEffect( () => {
    //  setti(handleNext, 3000)
    setTimeout(handleNext, 4000);
  })


  const handlePrevious = () => {
    const prevIndex = index - 1;
    if (prevIndex >= 0) {
      setIndex(prevIndex);
    } else {
      setIndex( images.length - 1)
    }
  };

  return (
    <div className='w-full h-full flex flex-col bg-no-repeat bg-cover bg-center transition-all duration-200 ease-in-out delay-200' style={{ backgroundImage: `url(${images[index].img})`}} >
        <div className="relative bg-gradient-to-br from-stone-800/40 via-stone-600/40 to-stone-200/40 w-full flex h-full justify-between px-20">
      
        <div className="grid grid-cols-2 from-black">
                <div className=" flex flex-col my-auto py-32 space-y-6 px-10">
                       <div className=" flex flex-col space-y-6">
                       <p className=" font-banner text-5xl leading-[4rem] font-bold text-white">Move your Product to <br /> <span className=" text-[#118338] bg-white/70 px-4 "> Nigeria</span> in just <span className=" text-[#118338] bg-white/70 px-4 ">3</span> days</p>
                       </div>
                       <div className=" flex space-x-4">
                            <a href="" className=" px-6 py-2 rounded-full text-white bg-black flex items-center justify-center ">
                                Contact Us
                            </a>
                       </div>
                </div>
                <div className=" my-auto">
                   <div className=" rounded-full h-[450px] overflow-hidden relative z-0 w-full my-auto">
                   </div>
                </div>
        </div>
     
      <button onClick={handlePrevious} className="absolute left-10 top-[50%]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" transform rotate-180 w-6  h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
      </button>

      <button onClick={handleNext} className="absolute right-10 top-[50%]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
        </div>
    </div>
  );
};

export default ImageCarousel;