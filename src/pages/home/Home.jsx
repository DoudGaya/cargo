import React from "react";
import Banner from "./Banner";
import Navigation from "./Navigations";
import BecomeAgent from "./BecomeAgent";
import Socials from "./Socials";
import WhatWeDo from "./WhatWeDo";



const Home = () =>{
    return (
        <>
        <div className=" flex w-full h-full bg-gray-100 dark:bg-gray-900">
           <div className=" flex flex-col w-full justify-center mx-auto space-y-6 items-center py-8">
            <Navigation />
            <Banner />
            <Socials />
            <WhatWeDo />
            <BecomeAgent />
            {/* the testimonials sections */}
            <div className=" bg-pink-200 w-full flex flex-col">
                <div className=" w-8/12 mx-auto">
                    <h1 className=" text-3xl font-banner font-bold"> What Other Agents are <br /> Saying About Us</h1>
                </div>
                <div className=" bg-purple-300 w-full flex flex-row">
                    <div className=" p-2 rounded-lg bg-gray-300 flex">
                        <div className=" h-20 w-20 bg-black"></div>
                        <div className=" flex flex-col">
                        </div>
                    </div>
                </div>
            </div>
            {/* END the testimonials sections  */}
           </div>
        </div>
        </>
    )
}
export default Home