import {React, useState} from "react";
import { Link } from "react-router-dom";


const ServicesModal = () => {
    return (
        <>
       <div className="absolute transition-all delay-150 ease-linear -bottom-20 rounded-md bg-white text-black px-4  w-[200px]  py-4 ">
            <ul className=" flex flex-col space-y-2">
                <Link to="/aircargo" className=" px-4 hover:bg-gray-300 hover:rounded-md py-1 w-full">Cargo</Link>
                <Link to="/shipping" className=" px-4 hover:bg-gray-300 hover:rounded-md py-1 w-full">Shipment</Link>
            </ul>
        </div>
        </>
    )
}

const Navigation = () => {
    const [services, setServices] = useState(false)
    const [nav, setNav] = useState(false)
function dropServices() {
   return setServices(true)
}

function closeServices() {
    return setServices(false)
}

const toggleNavbar = () => {
   setNav( (prevNav) => !prevNav )
}


const navSections = (
    <div className="bg-pink-900 h-[100vh] rounded-3xl z-50 w-11/12 mx-auto">
    <div className=" flex w-full h-full justify-center items-center text-white">
    <p className=" text-3xl"> Hello world</p>
    </div>
  </div>
)

    return (
        <>

       
       
        <div className=" text-white bg-gradient-to-b from-black/90 flex-col to bg-transparent z-20 fixed top-0 flex justify-between w-full dark:bg-black dark:text-white">
        <div className="flex justify-between w-full px-6 py-6 md:py-3 md:px-0 md:w-10/12 md:mx-auto ">
            <div className="py-2 flex items-center md:space-x-4">
                {/* <img src={logo} className=" hidden md:block shadow-md h-16 rounded-full w-16" alt="" /> */}
                <p className=" uppercase font-bold md:text-3xl">Afrika Global</p>
            </div>
            <ul className="hidden md:flex flex-row  space-x-12">
                <li className="items-center flex ">
                    <Link to="/" className=" text-small ">
                        Home
                    </Link>
                </li>

                <li className="items-center flex ">
                    <Link to="/about" className=" text-small  ">
                        About
                    </Link>
                </li>

                <li className="items-center flex ">
                    <Link to="/contact" className=" text-small ">
                        Contact
                    </Link>
                </li>

                <li onMouseOver={dropServices} onMouseOut={closeServices} className="items-center flex-col justify-center flex ">
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

           <button className="block md:hidden" onClick={toggleNavbar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
           </button>

           
        </div>
        {
            nav ? navSections : ''
        }
        </div>
       
        </>
    )
}


export default Navigation;