import React from "react";
import { Link } from "react-router-dom";
import smallbanner from '../../assets/imgs/banner.jpg'
import smallbanner1 from '../../assets/imgs/banner6.jpg'



const cargoes = [
    {
        id: 1,
        img: (<svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 fill-orange-600/90"  viewBox="0 0 24 24"><path d="M22 16.21v-1.895L14 8V4a2 2 0 0 0-4 0v4.105L2 14.42v1.789l8-2.81V18l-3 2v2l5-2 5 2v-2l-3-2v-4.685l8 2.895z"></path></svg>),
        type: 'Fast ',
        text: 'We move your products to your desired destination in 3 days'
    },

    {
        id: 2,
        img: (<svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 fill-orange-600/90" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="3"></circle><path d="M13 4.069V2h-2v2.069A8.008 8.008 0 0 0 4.069 11H2v2h2.069A8.007 8.007 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path></svg>),
        type: 'Efficient',
        text: 'We value efficiency and do our best to deliver the best services to our customers '
    },

    {
        id: 3,
        img: (<svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 fill-orange-600/90" viewBox="0 0 24 24" ><path d="M16.997 20c-.899 0-1.288-.311-1.876-.781-.68-.543-1.525-1.219-3.127-1.219-1.601 0-2.446.676-3.125 1.22-.587.469-.975.78-1.874.78-.897 0-1.285-.311-1.872-.78C4.444 18.676 3.601 18 2 18v2c.898 0 1.286.311 1.873.78.679.544 1.523 1.22 3.122 1.22 1.601 0 2.445-.676 3.124-1.219.588-.47.976-.781 1.875-.781.9 0 1.311.328 1.878.781.679.543 1.524 1.219 3.125 1.219s2.446-.676 3.125-1.219C20.689 20.328 21.1 20 22 20v-2c-1.602 0-2.447.676-3.127 1.219-.588.47-.977.781-1.876.781zM6 8.5 4 9l2 8h.995c1.601 0 2.445-.676 3.124-1.219.588-.47.976-.781 1.875-.781.9 0 1.311.328 1.878.781.679.543 1.524 1.219 3.125 1.219H18l.027-.107.313-1.252L20 9l-2-.5V5.001a1 1 0 0 0-.804-.981L13 3.181V2h-2v1.181l-4.196.839A1 1 0 0 0 6 5.001V8.5zm2-2.681 4-.8 4 .8V8l-4-1-4 1V5.819z"></path></svg>),
        type: 'Relaible',
        text: 'Our company is highly reliable and trusted by hundreds of customers accross turkey'
    },

    {
        id: 4,
        img: (<svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 fill-orange-600/90" viewBox="0 0 24 24" ><path d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-2 9h-2v-4h2v4zM5 7a1.001 1.001 0 0 1 0-2h13v2H5z"></path></svg>),
        type: 'Affordable',
        text: 'We offer the cheapest and most affordable shipping packages'
    },
]


const ShowCase = () => {



    const singlecargo = cargoes.map(car => {
        return (
            <div key={car.id} className="flex space-x-4  dark:text-gray-200 px-4 py-2">
            <div className="h-[120px] w-[250px] overflow-hidden">
            {/* <img src={car.img} className=" flex-none object-cover h-full w-full" alt="" /> */}
            <span className=" flex items-center justify-center bg-gray-200 p-4 rounded-xl"> {car.img} </span>
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
                <div className=" flex flex-col space-y-2 ">
                   {singlecargo} 
                </div>
                
            </div>
        </>
    )
}

export default ShowCase;