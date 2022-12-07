import React from "react";


const Navigation = () => {
    return (
        <>
        <div className=" py-2 flex justify-between w-10/12 px-24 rounded-3xl shadow-black dark:bg-black dark:text-white bg-gray-200">
        <div className="">
            LOGO
        </div>
        <ul className=" flex flex-row  space-x-12">
            <li className=" border-b-2">
                <a href="" className=" text-small uppercase">
                    Home
                </a>
            </li>

            <li className=" ">
                <a href="" className=" text-small uppercase ">
                    About
                </a>
            </li>

            <li className=" ">
                <a href="" className=" text-small uppercase ">
                    Contact
                </a>
            </li>
        </ul>
        <div className="">
            LOGIN SIGNUP
        </div>
        </div>
        </>
    )
}


export default Navigation;