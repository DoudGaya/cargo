
import { React } from 'react';
// import logoImage from '../../assets/imgs/logo-image.jpg'
import banner from '../../assets/imgs/carg.png'
import logo from '../../assets/imgs/logo_nav.png'
// import logoBanner from '../../assets/imgs/logo-banner.png'

const ImageCarousel = () => {



  return (
    <div className='w-full h-full saturate-50 bg-cover bg-center flex bg-no-repeat bg-fixed bg-transparent transition-all duration-200 ease-in-out delay-200' style={{ backgroundImage: `url(${banner})`}} >
        <div className="relative bg-blend-color  w-full flex h-full justify-between md:px-20 px-10">
        <div className="flex w-full flex-col md:flex-row mt-32  md:my-auto items-center space-x-5 ">

          <div className="">
            <img src={logo} alt="" className='md:w-[300px] opacity-80 md:opacity-30 md:h-[300px] shadow-lg rounded-lg' srcSet="" />
          </div>
        </div>
        </div> 
    </div>
  );
};

export default ImageCarousel;