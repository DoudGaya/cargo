import national from '../../assets/imgs/nations.svg'

const BecomeAgent = () => {
    return (
        <>
        <div className=" w-full text-white py-10 justify-center items-center bg-gray-900 my-10 flex flex-col space-y-6 ">
            <div className="">
                <h1 className=" text-2xl font-banner text-gray-300">Become an Agent in 3 steps</h1>
            </div>
            <div className="  w-8/12 flex flex-row justify-between ">
                <div className=" flex flex-col border justify-center items-center px-16 border-dashed rounded-lg py-2 border-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 stroke-yellow-400 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className=" font-main text-lg tracking-wide leading-8 text-yellow-400">Create an Account</p>
                </div>
                <div className=" flex flex-col border justify-center items-center px-16 border-dashed rounded-lg py-2 border-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 stroke-yellow-400 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <p className=" font-main text-lg tracking-wide leading-8 text-yellow-400">Verify Your Account</p>

                </div>
                <div className=" flex flex-col border justify-center items-center px-16 border-dashed rounded-lg py-2 border-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 transform -rotate-90 stroke-yellow-400 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    <p className=" font-main text-lg tracking-wide leading-8 text-yellow-400">Start Moving</p>
                </div>

            </div>
            <div className="">
                <a href="#">
                    <img src={national} className=" h-20" alt="" srcset="" />
                </a>
            </div>
        </div>
        </>
    )
}


export default BecomeAgent