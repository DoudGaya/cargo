import React from "react";
import Banner from "./Banner";
import Navigation from "./Navigations";
import Company from "./Company";
import Socials from "./Socials";
import WhatWeDo from "./WhatWeDo";
import Testimonials from "./Testimonials";
import ShowCase from "./ShowCase";



const Home = () =>{
    return (
        <>
        <div className=" flex w-full h-full bg-gray-100 dark:bg-gray-900">
           <div className=" flex flex-col w-full justify-center mx-auto  items-center">
            <Navigation />
            <Banner />
            {/* <Socials /> */}
            <ShowCase />
            <Company />
            <Testimonials />
            <WhatWeDo />
            {/* the testimonials sections */}
           
            {/* END the testimonials sections  */}
           </div>
        </div>
        </>
    )
}
export default Home