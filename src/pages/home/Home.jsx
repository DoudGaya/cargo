import React from "react";
import Banner from "./Banner";
import Company from "./Company";
import WhatWeDo from "./WhatWeDo";
import Testimonials from "./Testimonials";
import ShowCase from "./ShowCase";
import Partners from './Partners'
import Newsletter from "./Newsletter";
import Gallery from "./Gallery";
import Footer from "./Footer";
import AboutTheCompany from "../about/AbousTheCompany";



const Home = () =>{
    return (
        <>
           <div className="flex flex-col w-full ">
            <Banner />
            <Partners />
            <AboutTheCompany />
            <ShowCase />
            <Company />
            <Testimonials />
            <Gallery />
            <Newsletter />
            <Footer />
        </div>
        </>
    )
}
export default Home