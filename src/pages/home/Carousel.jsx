
import { React } from 'react';
import banner from '../../assets/imgs/carg.png'
const ImageCarousel = () => {
  return (
    <div className='w-full h-full saturate-50 bg-cover bg-center flex bg-no-repeat bg-fixed bg-transparent transition-all duration-200 ease-in-out delay-200' style={{ backgroundImage: `url(${banner})`}} >
        <div className="relative bg-blend-color  w-full flex h-full justify-between md:px-20 px-10">
        <div className="flex w-full flex-col md:flex-row mt-32  md:my-auto items-center space-x-5 ">
        </div>
        </div> 
    </div>
  );
};

export default ImageCarousel;