import React from "react";
import user1 from '../../assets/imgs/user1.jpg'
import user2 from '../../assets/imgs/user2.jpg'

const tesimo = [
    {
        id: 1,
        imagePath: user1,
        username: 'Abdulrahman Dauda Gaya',
        designation: 'CEO Chemcider Inc',
        message: 'I recently used Africa Global Cargo to ship goods across the country and it was a fantastic experience. The customer service was amazing and they made sure everything was taken care of quickly and efficiently. Highly recommend!"'
    },

    {
        id: 2,
        imagePath: user2,
        username: 'Shaharazzaman Bala',
        designation: 'Shopagric Inc',
        message: 'I was really impressed with the service I received from Africa Global Cargo. They made sure my cargo was safely delivered on time and kept me updated with the progress throughout. Very reliable!'
    },

    {
        id: 3,
        imagePath: user1,
        username: 'Sadiq Ismail ',
        designation: 'CEO Chemcider Inc',
        message: 'Africa Global Cargo made my business a lot easier by providing quick and reliable shipping services. Their rates are competitive and the customer service is top-notch. Highly recommend!'
    },

    {
        id: 4,
        imagePath: user2,
        username: 'Muhammad Saad',
        designation: 'CEO Chemcider Inc',
        message: 'I recently used Africa Global Cargo to move some goods from one location to another and it was a great experience. They took care of everything quickly and efficiently, and the goods arrived in perfect condition. Highly recommend!'
    },
]


export default function Testimonials() {


    const testimonials = tesimo.map( item => {
        return (
            <>
                    <div className=" flex flex-col space-y-4 bg-white shadow-md backdrop-blur-md px-4 py-8 rounded-lg">
                        <div className=" p-2 rounded-full flex ">
                        <div className=" h-16 overflow-hidden w-16 bg-gray-100 rounded-full">
                            <img src={item.imagePath} alt="" srcset="" />
                        </div>
                        <div className=" flex flex-col justify-center px-3">
                            <p className=" font-semibold text-sm">{item.username}</p>
                            <p className=" text-gray-800 ">{item.designation}</p>
                        </div>
                        </div>
                        <div className=" px-4 text-gray-800">
                            <p>{item.message}</p>
                        </div>
                    </div>
            </>
        )
    })
    return (
        <>
         <div className="w-full flex flex-col bg-yellow-300 py-20 space-y-10">
                <div className=" w-8/12 mx-auto">
                    <h1 className=" text-3xl font-banner font-bold">What Other Agents are Saying About Us</h1>
                </div>
                <div className=" flex space-x-6 px-10">
                    {testimonials}
               </div>
            </div>
        
        </>
    )
}