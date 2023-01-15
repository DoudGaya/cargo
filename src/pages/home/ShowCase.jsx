import React from "react";
import { Link } from "react-router-dom";
import smallbanner from '../../assets/imgs/banner.jpg'
import smallbanner1 from '../../assets/imgs/banner6.jpg'



const cargoes = [
    {
        id: 1,
        img: smallbanner,
        type: 'Fast ',
        text: 'We move your products to your desired destination in 3 days'
    },

    {
        id: 2,
        img: smallbanner1,
        type: 'Efficient',
        text: 'We value efficiency and do our best to deliver the best services to our customers '
    },

    {
        id: 3,
        img: smallbanner,
        type: 'Relaible',
        text: 'Our company is highly reliable and trusted by hundreds of customers accross turkey'
    },

    {
        id: 4,
        img: smallbanner1,
        type: 'Affordable',
        text: 'We offer the cheapest and most affordable shipping packages'
    },
]


const ShowCase = () => {



    const singlecargo = cargoes.map(car => {
        return (
            <div key={car.id} className="flex space-x-4 border-b dark:text-gray-200 px-4 py-2">
            <div className="h-[100px] w-[250px] overflow-hidden">
            <img src={car.img} className=" flex-none object-cover h-full w-full" alt="" />
            </div>
            <div className=" flex flex-col  w-full px-2">
                <p className="uppercase font-bold font-banner text-lg text-gray-700 dark:text-gray-200">{car.type}</p>
                <p className="text-sm ">{car.text}</p>
            </div>
        </div>
        )
    })
    return (
        <>
            <div className="grid grid-cols-1  md:grid-cols-3 w-full gap-8 md:px-20 py-20">
                <div className="flex flex-col space-y-4 px-4 ">
                        <div className=" w-full h-[300px]  overflow-hidden ">
                            <img src={smallbanner} className=" object-cover h-full w-full" alt="" />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-main font-semibold tracking-wide dark:text-gray-200">OBJECTIVES</p>
                            <div className="border-b-4 my-2 w-3/12 border-sky-800"></div>
                        </div>
                        <div className=" dark:text-gray-200">
                             Our primary objectives are to promote total quality management and to maintain our sucess through steady investments in our service expansions and innovations. Our goal is to promote health, safety and support policy throughout our organization.
                        </div>
                        <Link to="/about" className=" uppercase text-sky-600 font-semibold">
                            read more
                        </Link>
                </div>
                <div className="  flex flex-col space-y-4 px-4 ">
                        <div className=" w-full h-[300px]  overflow-hidden ">
                            <img src={smallbanner1} className=" object-cover h-full w-full" alt="" />
                        </div>
                        <div className=" flex flex-col">
                            <p className=" font-main font-semibold tracking-wide dark:text-gray-200">AIM</p>
                            <div className=" border-b-4 my-2 w-3/12 border-sky-800"></div>
                        </div>
                        <div className=" dark:text-gray-200">
                        Our aim is to be the best customer service team in our profession. We strive to develop and maintain a first class infrastructure to ensure employee satisfaction, which drives customer loyalty leading to sustained profit growth and creating improved company value.
                        </div>
                        <Link to="/about" className=" uppercase text-sky-600 font-semibold">
                            read more
                        </Link>
                </div>
                <div className=" flex flex-col space-y-2 md:space-y-6 ">
                   {singlecargo} 
                </div>
                
            </div>
        </>
    )
}

export default ShowCase;