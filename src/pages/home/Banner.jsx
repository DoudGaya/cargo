import {React, useState} from "react";
import ImageSlider from "./ImageSlider";
import bannerImg1 from '../../assets/imgs/banner.jpg'
import bannerImg2 from '../../assets/imgs/banner1.jpg'
import bannerImg3 from '../../assets/imgs/banner2.jpg'
import bannerImg4 from '../../assets/imgs/banner3.jpg'
import bannerImg5 from '../../assets/imgs/banner4.jpg'
import bannerImg6 from '../../assets/imgs/banner5.jpg'
import bannerImg7 from '../../assets/imgs/banner6.jpg'
import ImageCarousel from "./Carousel";

const Banner = () => {

    const slides = [
        {
            id: 1,
            img: bannerImg1,
            text: 'Some Dummy Description'
        },
        {
            id: 2,
            img: bannerImg2,
            text: 'Some Dummy Description'
        },
        {
            id: 3,
            img: bannerImg3,
            text: 'Some Dummy Description'
        },
        {
            id: 3,
            img: bannerImg4,
            text: 'Some Dummy Description'
        },
        {
            id: 3,
            img: bannerImg5,
            text: 'Some Dummy Description'
        },
        {
            id: 3,
            img: bannerImg6,
            text: 'Some Dummy Description'
        },

    ]

    return (
        <>
          <div className=" w-full flex">
          <div className=" flex flex-col w-full h-[750px] mx-auto " >
                <ImageCarousel images={slides} />
            </div>
          </div>
        </>
    )
}


export default Banner;