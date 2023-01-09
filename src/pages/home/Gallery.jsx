import React from "react";

import image1 from '../../assets/imgs/banner.jpg'
import image2 from '../../assets/imgs/banner1.jpg'
import image3 from '../../assets/imgs/banner2.jpg'
import image4 from '../../assets/imgs/banner3.jpg'



const galleries = [
    {
        id: 1,
        msg: 'Furnitues',
        img: image1
    },

    {
        id: 1,
        msg: 'Somthing Good',
        img: image3
    },

    {
        id: 1,
        msg: 'Somthing Good',
        img: image1
    },

]

const card = galleries.map( (pic) => {
    return (
        <>
             <div className=" h-[300px] relative w-full md:w-[300px]  bg-cover">
                    <img src={pic.img} className=" h-full" alt="" />
                    <div className=" dark:bg-gray-900 bg-[#F3F3F3] border-y-2 border-r-2 border-gray-500 font-main text-sm absolute w-10/12 py-4 rounded-r-full px-4 bottom-10 items-center justify-center ">
                        <span className=" border-l-2 px-3 border-gray-700 cursor-pointer hover:scale-100 transition-all transform">  {pic.msg}</span>
                    </div>
             </div>
        </>
    )
})


const Gallery = () => {
    return (
        <>
          <div className="w-full py-20 dark:bg-gray-900 dark:text-white flex flex-col">
            <div className=" flex flex-col px-4 md:px-0 md:mx-auto w-full md:w-8/12">
            <h3 className=" text-2xl font-anton my-6">Types of Products we transport</h3>
                <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3 ">
                   {card}
                </div>
            </div>
        </div>  
        </>
    )
}


export default Gallery