import React from "react";
import { useState } from "react";

import cargoShip from '../../assets/imgs/banner4.jpg'



const Newsletter = () => {

    const [form, setForm] = useState('')
    const [done, setDone] = useState(false)
    
    const msg = 'Form submission ' + form + ' made successfully'

    const handleFormSubmit = (event) => {
        event.preventDefault()
        setDone(true)
    }

    const getFormData = (event) => {
        setForm(event.target.value)
    }

    return (
        <>
        <div  className=" w-full flex flex-col  bg-cover bg-center h-full bg-gray-800 text-white space-y-4">
          <div className=" flex w-full py-[100px] my-auto backdrop-blur-sm flex-col items-center space-y-4">
          <div className=" font-anton tracking-wide text-2xl">Subscribe to Our Newsletter<span>.</span> </div>
            <form onSubmit={handleFormSubmit} className=" w-10/12 md:w-6/12 flex flex-col md:flex-row space-y-3 md:space-y-0 mx-auto items-center justify-center">
                <label htmlFor="newsletter" className="hidden">
                    Your Enail
                </label>
                <input onChange={getFormData} type="text" placeholder=" Subscribe to Our Newsletter" className=" outline-none bg-gray-100 caret-yellow-500 text-yellow-500 px-4 py-2 w-full " />
                <button className=" px-8 py-2 text-2xl bg-black text-white">Subscribe</button>
                {/* {done ? <p className="">{msg}</p> : ''} */}
            </form>
          </div>
        </div>
        </>
    )
}


export default Newsletter