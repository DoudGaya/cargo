import React from "react";

import cargoShip from '../../assets/imgs/banner4.jpg'



const Newsletter = () => {

    let newsletterStyle = {
        backgroundImage: `url(${cargoShip})`,
    }
    return (
        <>
        <div className=" w-full flex flex-col  bg-cover bg-center h-full bg-gray-800 text-white space-y-4">
          <div className=" flex w-full py-[100px] my-auto backdrop-blur-sm flex-col items-center space-y-4">
          <div className=" font-anton tracking-wide text-2xl">Subscribe to Our Newsletter<span>.</span> </div>
            <form className="w-6/12 flex mx-auto items-center justify-center">
                <label htmlFor="newsletter" className="hidden">
                    Your Enail
                </label>
                <input type="text" placeholder=" Subscribe to Our Newsletter" className=" outline-none bg-gray-100 caret-yellow-500 text-yellow-500 px-4 py-2 w-full " />
                <button className=" px-4 py-2 bg-black text-white">Subscribe</button>
            </form>
          </div>
        </div>
        </>
    )
}


export default Newsletter