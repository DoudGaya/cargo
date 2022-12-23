import React from "react";

import image1 from '../../assets/imgs/banner.jpg'
import image2 from '../../assets/imgs/banner1.jpg'
import image3 from '../../assets/imgs/banner2.jpg'
import image4 from '../../assets/imgs/banner3.jpg'



const galleries = [
    {
        id: 1,
        msg: 'Somthing Good',
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
             <div className=" h-[300px] relative  w-[300px]  bg-cover">
                        <img src={pic.img} className=" h-full" alt="" />
                        <div className=" bg-yellow-300 font-main text-xl absolute w-10/12 py-4 rounded-r-full px-4 bottom-10 items-center justify-center ">
                             {pic.msg}
                        </div>
             </div>
        </>
    )
})

const Gallery = () => {
    return (
        <>
          <div className=" w-full py-20 bg-yellow-50 flex flex-col">
            <div className=" flex flex-col mx-auto w-8/12">
            <h3 className=" text-2xl font-anton">Types of Products we transport</h3>
                <div className=" grid grid-cols-3 ">
                   {card}
                </div>
            </div>
        </div>  
        </>
    )
}


export default Gallery