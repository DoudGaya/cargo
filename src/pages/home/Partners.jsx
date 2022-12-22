import React from'react'
import mearsk from '../../assets/imgs/partners/mearsk.png'
import hapag from '../../assets/imgs/partners/hapag.png'
import evergreen from '../../assets/imgs/partners/evergreen.png'
import cma from '../../assets/imgs/partners/cma-cgm.png'



const Partners = () => {
    return (
        <>
        <div className=" w-full bg-gray-200 gap-6 grid grid-cols-4 px-[200px] ">
            <a href="#" className=' h-24 flex items-center justify-center hover:bg-blue-500/30 px-4 border-b-2 hover:border-blue-600'>
                <img src={mearsk} alt="" srcset="" />
            </a>

            <a href="#" className=' h-24 flex items-center justify-center hover:bg-blue-500/30 px-4 border-b-2 hover:border-blue-600'>
                <img src={hapag} alt="" srcset="" />
            </a>

            <a href="#" className=' h-24 flex items-center justify-center hover:bg-blue-500/30 px-4 border-b-2 hover:border-blue-600'>
                <img src={evergreen} alt="" srcset="" />
            </a>

            <a href="#" className=' h-24 flex items-center overflow-hidden justify-center hover:bg-blue-500/30 px-4 border-b-2 hover:border-blue-600'>
                <img src={cma} alt="" className=' object-contain' srcset="" />
            </a>
        </div>
        </>
    )
}


export default Partners