import {React, useState} from "react";
import ImageSlider from "./ImageSlider";
import bannerImg from '../../assets/imgs/about_image.jpg'
import ImageCarousel from "./Carousel";

const Banner = () => {

    const slides = [
        {
            id: 1,
            img: bannerImg,
            text: 'Some Dummy Description'
        },
        {
            id: 2,
            img: bannerImg,
            text: 'Some Dummy Description'
        },
        {
            id: 3,
            img: bannerImg,
            text: 'Some Dummy Description'
        },
    ]

    return (
        <>
            <div className=" flex flex-col w-10/12 ">
                {/* NAVIGATIONS  */}
            <div className="grid grid-cols-2">
                <div className=" flex flex-col my-auto py-16 space-y-6">
                       <div className=" flex flex-col space-y-6">
                       <p className=" font-banner text-5xl font-bold">Move your Product to <br /> <span className=" text-[#118338]"> Nigeria</span> in just <span className=" text-[#118338]">3</span> days</p>
                        <p className=" font-main text-2xl">Meet on our our agent to get started</p>
                       </div>
                       <div className=" flex space-x-4">
                        <a href="" className=" px-6 py-2 rounded-full text-white bg-black flex items-center justify-center ">
                            Get Started
                        </a>
                        <a href="" className=" px-6 py-2 rounded-full border-[#118338] border-2 flex items-center justify-center ">
                            Meet an Agent
                        </a>

                       </div>
                </div>
                <div className=" px-10  my-auto">
                   <div className=" rounded-lg h-[600px] overflow-hidden relative z-0 w-full my-auto">
                        <ImageCarousel images={slides} />
                   </div>
                </div>
            </div>

            {/* END OF NAVIGATION */}
            </div>
        </>
    )
}


export default Banner;