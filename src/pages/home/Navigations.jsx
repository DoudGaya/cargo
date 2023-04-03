import {React, useState} from "react";
import { Link } from "react-router-dom";
import ag from '../../assets/imgs/ag_logo.png'


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


const closeModal = () => {
    return setNav(false)
}
const toggleNavbar = () => {
   setNav((prevNav) => !prevNav )
}


const navSections = (
    <div className=" md:hidden flex flex-col bg-gray-900 h-[100vh] absolute z-50 w-full ">
        <div className="pt-10 px-10  flex justify-between items-center text-center ">
      <div className=" flex flex-col  ">
      <Link to="/">
        <img src={ag} alt=" africa global logo" className=" h-14 rounded-lg" srcSet="" />
      </Link>
      </div>
        <button className=" stroke-white" onClick={toggleNavbar}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 stroke-white h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>

        </button>
        </div>
    <div className=" flex flex-col w-full h-full text-white p-10">
   <a href="tel:+905393809466" className=" flex  items-center w-full bg-[#1ca0ba] px-6 py-4 mb-2  rounded-lg space-x-3">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 flex-none h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
    <p  className="font-semibold ">HOT LINE</p>
   </a>
        <ul className=" flex flex-col space-y-4">
            <Link to="/" onClick={closeModal} className=" w-full border-l-2 py-3 text-xl px-4 bg-gray-700">Home</Link>
            <Link to="/about" onClick={closeModal} className=" w-full border-l-2 py-3 text-xl px-4 bg-gray-700">About</Link>
            <Link to="/contact" onClick={closeModal} className=" w-full border-l-2 py-3 text-xl px-4 bg-gray-700">Contact</Link>
            <Link to="/aircargo" onClick={closeModal} className=" w-full border-l-2 py-3 text-xl px-4 bg-gray-700">Plane Cargo</Link>
            <Link to="/shipping" onClick={closeModal} className=" w-full border-l-2 py-3 text-xl px-4 bg-gray-700">Shipping</Link>
        </ul>

    </div>
  </div>
)

    return (
        <>
        <div className=" bg-gray-800/50 text-white flex-col z-20 fixed top-0 flex justify-between w-full dark:bg-black dark:text-white">
            { nav ? navSections : ''}
        <div className="flex justify-between w-full px-10 py-6 md:py-2 md:px-0 md:w-10/12 md:mx-auto ">
            <div className=" flex items-center md:space-x-4">
               <Link to={`/`} className=" space-y-0 flex flex-col">
               <img src={ag} alt="" className=" h-14 rounded-lg" srcSet="" />
               </Link>

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
                    <a href="tel:+905393809466" className=" px-6 py-2 bg-[#1ca0ba]  font-semibold ">Hot Line</a>
                </li>
            </ul>

           <button className="block md:hidden" onClick={ toggleNavbar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 dark:stroke-white h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
           </button>
        </div>
       
        </div>
       
        </>
    )
}


export default Navigation;