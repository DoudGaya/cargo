
import man from "../../assets/imgs/man.svg"
import woman from "../../assets/imgs/woman.svg"



const WhatWeDo = () => {
    return (
        <>
                   <div className=" w-10/12 my-10">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
                    <div className=" py-14 px-8 relative w-full p-4 bg-[#EBECEE] rounded-xl  flex flex-col">
                        <h2 className=" font-banner text-2xl">What We do...</h2>
                        <hr className=" w-1/4 border-b-2 my-3 border-green-800" />
                        <p className=" font-main leading-7">
                            eum quisquam totam illum harum quam! Perspiciatis at aliquid, ut laudantium, architecto neque earum facere saepe doloremque, natus vero ab qui dolores rem illum aut ipsa a mollitia dignissimos repellat dolorem maxime quam animi non. Illo est ducimus qui fuga labore iste. Esse, unde adipisci sequi ut doloribus fuga odio est.
                         </p>
                         <div className="rounded-full absolute -top-10 overflow-hidden p-3 bg-[#F3F3F3] -right-10">
                            <img src={man} className=" h-20 w-20" alt="" srcset="" />
                            
                         </div>
                    </div>
                    <div className=" py-14 px-8 relative w-full p-4 bg-[#CCCFD6] rounded-xl  flex flex-col">
                        <h2 className=" font-banner text-2xl">How we do it... </h2>
                        <hr className=" w-1/4 border-b-2 my-3 border-green-800" />
                        <p className=" font-main leading-7">
                             eum quisquam totam illum harum quam! Perspiciatis at aliquid, ut laudantium, architecto neque earum facere saepe doloremque, natus vero ab qui dolores rem illum aut ipsa a mollitia dignissimos repellat dolorem maxime quam animi non. Illo est ducimus qui fuga labore iste. Esse, unde adipisci sequi ut doloribus fuga odio est.
                        </p>
                        <div className=" rounded-full absolute -bottom-10  overflow-hidden p-3 bg-[#F3F3F3] -left-10">
                            <img src={woman} className=" h-16 w-16" alt="" srcset="" />
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}


export default WhatWeDo