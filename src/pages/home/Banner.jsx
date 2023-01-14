import {React, useState} from "react";
import ImageSlider from "./ImageSlider";
import Socials from "./Socials";
import ImageCarousel from "./Carousel";

const Banner = () => {
    return (
        <>
          <div className=" w-full flex">
          <div className=" flex flex-col w-full h-[750px] mx-auto relative" >
                <ImageCarousel/>
                <div className="w-full absolute md:bottom-16 -bottom-16 flex">
                    <Socials />
                </div>
            </div>
          </div>
        </>
    )
}


export default Banner;