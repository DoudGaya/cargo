import {React, useState} from "react";







const ServicesModal = () => {
    return (
        <>
       <div className="absolute transition-all delay-150 ease-linear -bottom-16 rounded-md bg-white text-black pl-4 pr-10  py-4 ">
            <ul className=" flex flex-col space-y-2">
                <li>Shipping</li>
                <li>Plane Cargo</li>
            </ul>
        </div>
        </>
    )
}


const Navigation = () => {

    const [services, setServices] = useState(false)

function dropServices() {
   return setServices(true)
}


function closeServices() {
    return setServices(false)
}



    return (
        <>
        <div className=" text-white bg-gradient-to-b from-black/90 to bg-transparent z-50 fixed top-0 flex justify-between w-full dark:bg-black dark:text-white">
        <div className="flex justify-between w-full px-6 py-3 md:py-3 md:px-0 md:w-10/12 md:mx-auto ">
            <div className="py-2 flex items-center md:space-x-4">
                {/* <img src={logo} className=" hidden md:block shadow-md h-16 rounded-full w-16" alt="" /> */}
                <p className=" uppercase font-bold md:text-3xl">Afrika Global</p>
            </div>
            <ul className=" hidden md:flex flex-row  space-x-12">
                <li className="items-center flex ">
                    <a href="" className=" text-small ">
                        Home
                    </a>
                </li>

                <li className="items-center flex ">
                    <a href="" className=" text-small  ">
                        About
                    </a>
                </li>

                <li className="items-center flex ">
                    <a href="" className=" text-small  ">
                        Contact
                    </a>
                </li>

                <li onMouseOver={dropServices} onMouseOut={closeServices} className="items-center flex-col   justify-center flex ">
                    <div  className=" text-small flex flex-col  cursor-pointer  ">
                        <div className="flex space-x-2 items-center">
                            <p>Services</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                       {services ? <ServicesModal /> : ''}

                    </div>
                </li>

                <li className="items-center flex ">
                    <a href="tel:+090 539 380 9466" className=" px-6 py-2 bg-[#fac919] font-semibold ">+090 539 380 9466</a>
                </li>
            </ul>

           <button className="block md:hidden">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
           </button>

           
        </div>
        </div>
        </>
    )
}


export default Navigation;