import React from "react";
import Banner from "./home/Banner";
import Company from "./home/Company";
import Testimonials from "./home/Testimonials";
import ShowCase from "./home/ShowCase";
import Partners from './home/Partners'
import Newsletter from "./home/Newsletter";
import Gallery from "./home/Gallery";
import AboutTheCompany from "./about/AbousTheCompany";

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
        </div>
        </>
    )
}

export default Home