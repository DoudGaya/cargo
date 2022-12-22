import React from "react";
import Banner from "./Banner";
import Navigation from "./Navigations";
import Company from "./Company";
import Socials from "./Socials";
import WhatWeDo from "./WhatWeDo";
import Testimonials from "./Testimonials";
import ShowCase from "./ShowCase";
import Partners from './Partners'



const Home = () =>{
    return (
        <>
           <div className="flex flex-col w-full">
            <Banner />
            <Partners />
            {/* <Socials /> */}
            <ShowCase />
            <Company />
            <Testimonials />
            <WhatWeDo />
            {/* the testimonials sections */}
           
            {/* END the testimonials sections  */}
        </div>
        </>
    )
}
export default Home