import React from "react";
import shortBanner from '../../assets/imgs/banner_small.jpg'



const AirCargo = () => {
    return (
        <>
        <div className=" flex w-full ">
            <div className=" grid grid-cols-2 w-full">
                <div className=" p-10 flex flex-col space-y-3">
                    Hello world
                </div>
                <div className="  py-10 mb-20" style={{ backgroundImage: `url(${shortBanner})` }}>
                    Hello felix 
                </div>

            </div>
        </div>
        </>
    )
}

export default AirCargo