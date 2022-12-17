import React from "react";
import logo from '../../assets/imgs/logo_nav.png'


const Navigation = () => {
    return (
        <>
        <div className="bg-white/50 z-50 fixed top-0  shadow-md flex justify-between w-full dark:bg-black dark:text-white">
        <div className="flex justify-between w-10/12 mx-auto ">
            <div className=" py-2 flex items-center space-x-4">
                <img src={logo} className=" shadow-md h-16 rounded-full w-16" alt="" />
                <p className=" uppercase font-bold text-3xl">AfriCa Global</p>
            </div>
            <ul className=" flex flex-row   space-x-12">
                <li className="items-center flex ">
                    <a href="" className=" text-small uppercase">
                        Home
                    </a>
                </li>

                <li className="items-center flex ">
                    <a href="" className=" text-small uppercase ">
                        About
                    </a>
                </li>

                <li className="items-center flex ">
                    <a href="" className=" text-small uppercase ">
                        Contact
                    </a>
                </li>

                <li className="items-center flex ">
                    <a href="tel:+090 539 380 9466" className=" px-6 py-3 bg-[#fac919] font-semibold ">+090 539 380 9466</a>
                </li>
            </ul>
           
        </div>
        </div>
        </>
    )
}


export default Navigation;