import React from "react";
import smallbanner from '../../assets/imgs/banner.jpg'
import smallbanner1 from '../../assets/imgs/banner6.jpg'



const cargoes = [
    {
        id: 1,
        img: smallbanner,
        type: 'Plane',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo odio ratione? Nam assumenda'
    },

    {
        id: 2,
        img: smallbanner1,
        type: 'Ship',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo odio ratione? Nam assumenda'
    },

    {
        id: 3,
        img: smallbanner,
        type: 'Ship',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo odio ratione? Nam assumenda'
    },

    {
        id: 4,
        img: smallbanner1,
        type: 'Plane',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo odio ratione? Nam assumenda'
    },
]


const ShowCase = () => {



    const singlecargo = cargoes.map( car => {
        return (
            <div className=" flex space-x-4 border-b  py-2">
            <div className=" h-[100px] w-[250px] overflow-hidden">
            <img src={car.img} className=" object-cover h-full w-full" alt="" />
            </div>
            <div className=" flex flex-col  w-full px-2">
                <p className=" uppercase font-bold font-banner text-lg text-gray-700">{car.type}</p>
                <p className=" text-sm">{car.text}</p>

            </div>
        </div>
        )
    })
    return (
        <>
            <div className=" grid grid-cols-3 w-full gap-8 p-20">
                <div className="  flex flex-col space-y-4 px-4 ">
                        <div className=" w-full h-[300px]  overflow-hidden ">
                            <img src={smallbanner} className=" object-cover h-full w-full" alt="" />
                        </div>
                        <div className=" flex flex-col">
                            <p className=" font-main font-semibold tracking-wide">YOUR CARGO OUR CONCERN</p>
                            <div className=" border-b-4 my-2 w-3/12 border-sky-800"></div>
                        </div>
                        <div className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sint omnis ducimus modi odit, sequi architecto similique quasi reprehenderit dicta natus at unde? Veniam saepe ratione laudantium tempore, soluta quae?
                        </div>
                        <a href="#" className=" uppercase text-sky-600 font-semibold">
                            read more
                        </a>
                </div>
                <div className="  flex flex-col space-y-4 px-4 ">
                        <div className=" w-full h-[300px]  overflow-hidden ">
                            <img src={smallbanner1} className=" object-cover h-full w-full" alt="" />
                        </div>
                        <div className=" flex flex-col">
                            <p className=" font-main font-semibold tracking-wide">YOUR CARGO OUR CONCERN</p>
                            <div className=" border-b-4 my-2 w-3/12 border-sky-800"></div>
                        </div>
                        <div className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sint omnis ducimus modi odit, sequi architecto similique quasi reprehenderit dicta natus at unde? Veniam saepe ratione laudantium tempore, soluta quae?
                        </div>
                        <a href="#" className=" uppercase text-sky-600 font-semibold">
                            read more
                        </a>
                </div>
                <div className=" flex flex-col space-y-6">
                   {singlecargo} 
                </div>
                
            </div>
        </>
    )
}


export default ShowCase;