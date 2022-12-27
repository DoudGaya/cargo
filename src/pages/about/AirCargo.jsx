import React from "react";
import shortBanner from '../../assets/imgs/plane_cargo.jpg'

const AirCargo = () => {
    return (
        <>
        <div className=" flex w-full ">
            <div className=" grid grid-cols-2 w-full">
                <div className=" px-20 py-10 flex flex-col space-y-3 bg-gray-800 text-white">
                    <h1 className=" uppercase text-2xl">Air Cargo</h1>
                    <div className=" border-b-2 w-3/12 border-yellow-600"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptates voluptatibus saepe, voluptatem laboriosam nobis quam. Aspernatur nulla debitis, iusto id, sint suscipit dolores accusamus quidem sequi repellat, harum atque error sed! Minus iure architecto aliquam vel dignissimos, debitis ullam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptates voluptatibus saepe, voluptatem laboriosam nobis quam. Aspernatur nulla debitis, iusto id, sint suscipit dolores accusamus quidem sequi repellat, harum atque error sed! Minus iure architecto aliquam vel dignissimos, debitis ullam.</p>
                </div>
                <div className=" bg-cover h-[400px]"  >
                    <img src={shortBanner} alt="" className=" w-full h-full object-cover" />
                </div>
            </div>
        </div>
        </>
    )
}

export default AirCargo