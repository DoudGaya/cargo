import React from'react'
import mearsk from '../../assets/imgs/partners/mearsk.png'
import hapag from '../../assets/imgs/partners/hapag.png'
import evergreen from '../../assets/imgs/partners/evergreen.png'
import cma from '../../assets/imgs/partners/cma-cgm.png'



const Partners = () => {
    return (
        <>
        <div className=" w-full overflow-x-auto md:bg-gray-200 md:dark:bg-gray-400 snap-x md:gap-6 grid my-20 md:my-0 grid-cols-4 md:px-[200px] ">
            <a href="#" className=' h-20  py-4 snap-center overflow-hidden  md:h-24 items-center flex justify-center hover:bg-blue-500/30 md:border-transparent px-4 border-b-2 hover:border-blue-600'>
                <img src={mearsk} key={mearsk} alt="" srcSet="" />
            </a>

            <a href="#" className=' h-20  py-4 overflow-hidden  md:h-24 flex items-center justify-center hover:bg-blue-500/30 px-4 border-b-2 md:border-transparent hover:border-blue-600'>
                <img src={hapag} key={hapag} alt="" srcSet="" />
            </a>

            <a href="#" className=' h-20  py-4 overflow-hidden  md:h-24 flex items-center justify-center hover:bg-blue-500/30 px-4 border-b-2 md:border-transparent hover:border-blue-600'>
                <img src={evergreen} key={evergreen} alt="" srcSet="" />
            </a>

            <a href="#" className=' h-20  py-4 overflow-hidden  md:h-24 flex items-center justify-center hover:bg-blue-500/30 px-4 border-b-2 md:border-transparent hover:border-blue-600'>
                <img src={cma} key={cma} alt="" className=' object-contain' srcSet="" />
            </a>
        </div>
        </>
    )
}


export default Partners