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
           </div>
        </div>
        </>
    )
}
export default Home