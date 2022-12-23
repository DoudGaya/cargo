import React from "react";
import Banner from "./Banner";
import Navigation from "./Navigations";
import Company from "./Company";
import Socials from "./Socials";
import WhatWeDo from "./WhatWeDo";
import Testimonials from "./Testimonials";
import ShowCase from "./ShowCase";
import Partners from './Partners'
import Newsletter from "./Newsletter";
import Gallery from "./Gallery";
import Footer from "./Footer";



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
            <Gallery />
            <Newsletter />
            <Footer />
            {/* <WhatWeDo /> */}
        </div>
        </>
    )
}
export default Home