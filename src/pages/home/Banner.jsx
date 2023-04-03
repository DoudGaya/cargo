import {React, useState} from "react";
import ImageSlider from "./ImageSlider";
import slide1 from '../../assets/imgs/slide1.jpeg'
import slide2 from '../../assets/imgs/slide2.jpeg'
import Socials from "./Socials";
import ImageCarousel from "./Carousel2";
// import ImageCarousel from "./Carousel";


const images = [
    {
        id: 1,
        tags: "some Cool Tags",
        src: slide1,
    },

    {
        id: 2,
        tags: "some Cool Tags",
        src: slide2,
    }
]

const Banner = () => {
    return (
        <>
          <div className=" w-full flex">
          <div className=" flex flex-col w-full h-[750px] mx-auto relative" >
                <ImageCarousel banner={images} />
                <div className="w-full absolute md:bottom-16 -bottom-16 flex">
                    <Socials />
                </div>
            </div>
          </div>
        </>
    )
}


export default Banner;