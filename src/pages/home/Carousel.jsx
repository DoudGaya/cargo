
import { React, useState, useEffect } from 'react';
// import logoImage from '../../assets/imgs/logo-image.jpg'
import banner from '../../assets/imgs/banner.svg'
import logo from '../../assets/imgs/logo_nav.png'
// import logoBanner from '../../assets/imgs/logo-banner.png'

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
    <div className='w-full h-full saturate-50 bg-cover bg-center flex bg-no-repeat bg-fixed bg-transparent transition-all duration-200 ease-in-out delay-200' style={{ backgroundImage: `url(${banner})`}} >
        <div className="relative bg-blend-color  w-full flex h-full justify-between px-20">
        <div className="flex w-full flex-col md:flex-row my-20  md:my-auto items-center space-x-5 ">

          <div className=" bg-yellow-200">
            <img src={logo} alt="" className=' w-[300px] h-[300px] shadow-lg rounded-lg' srcSet="" />
          </div>
        {/* <div className=" md:h-[200px] flex-none md:w-[200px] h-32 w-32 p-4 overflow-hidden bg-white rounded-2xl ">
                <img src={logo} className=" " alt="" />
            </div> */}
            {/* <div className=" md:border-l-2 md:pl-6 py-4 md:text-start text-center items-center md:items-start flex flex-col">
                   <p className=' md:text-5xl font-anton tracking-wide md:text-start flex text-white'>Welcome to the Best Container Shipping <br /> Company in Turkey and Nigeria</p>
                   <p className=' font-banner md:text-xl text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo at tempora ut vel consectetur, soluta, odit maxime error dolor cumque alias eveniet possimus. </p>
              </div>             */}
                {/* <div className=" flex flex-col my-auto col-span-2  py-10 md:px-10">
                       <div className=" flex flex-col ">
                       <div className=" flex space-x-2">
                     
                       <p className=" font-banner md:text-2xl font-bold text-white">Move your Product to Nigeria in just 3 days</p>
                       </div>

                       </div>
                       <div className=" flex space-x-4">
                            <a className="">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ad inventore? Eveniet alias aut, itaque officia veritatis impedit dolore voluptatibus.
                            </a>
                       </div>
                </div> */}
                {/* <div className=" my-auto">     
                </div> */}
        </div>
     
      {/* <button onClick={handlePrevious} className="absolute left-10 top-[50%]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" transform rotate-180 w-6  h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
      </button>

      <button onClick={handleNext} className="absolute right-10 top-[50%]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button> */}
        </div>
    </div>
  );
};

export default ImageCarousel;