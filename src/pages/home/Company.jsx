import founder from '../../assets/imgs/user1.jpg'
import coFounder from '../../assets/imgs/user2.jpg'
import banner from '../../assets/imgs/banner6.jpg'
// import Banner from './Banner'
// import national from '../../assets/imgs/nations.svg'



const SocialIcons = () => {
    return (
        <>
        <div className="w-full flex flex-row justify-around">
            <a href="#">
                Socials HEre
            </a>
        </div>
        </>
    )
}

const staffs = [
    {
        name: 'Shahruzaman',
        image: founder,
        designation: 'Founder'
    },

    {
        name: 'Abdulrahman Dauda',
        image: coFounder,
        designation: 'Co-Founder'
    },
]

    const ceo = staffs.map( name => {
        return (
            <>
             <div className=" w-full  px-10 mx-auto flex flex-col ">
                <div className=" flex flex-col items-center mx-auto">
                    <img src={name.image} className=' h-[250px] rounded-full object-cover w-[250px]' alt="" />
                    <div className=" flex justify-center flex-col items-center">
                        <p className=' font-semibold text items-center justify-center-sm group-hover:text-white'>{name.designation}</p>
                        <p className='group-hover:text-white text-xl'>{name.name}</p>
                        <SocialIcons />
                    </div>
                    </div>
                </div>
            </>
        )
    })

const Company = () => {
    return (
        <>
        <div className="  w-full flex flex-row justify-center  bg-no-repeat bg-cover bg-left backdrop-blur-sm" style={{backgroundImage: `url('${banner}')` }}>
           <div className=" backdrop-blur-md flex w-full items-center justify-center">
           <div className=" grid grid-cols-1 md:grid-cols-3 w-10/12 content-center ">
                <div className=" col-span-2 flex flex-col my-6 md:my-0 md:w-[650px] mx-auto">

                    {/* <div className=" text-2xl font-banner4 bg-sky-600/50 py-2 border-l-4 px-4">The Founders</div> */}
                    <div className=" grid text-white grid-cols-1  md:grid-cols-2 h-full items-center ">

                        {ceo}
                       
                        {/* <div className=" w-full px-10 mx-auto flex flex-col ">
                            <div className=" flex flex-col items-center space-y-6 mx-auto">
                            <img src={coFounder} className=' h-[250px] rounded-full object-cover w-[250px]' alt="" />
                            <div className=" flex justify-center flex-col items-center">
                                <p className=' font-semibold text-sm group-hover:text-white'>The Founder</p>
                                <p className='group-hover:text-white text-xl'>Shahruzaman Bala </p>
                                <SocialIcons />
                            </div>
                            </div>
                        </div> */}

                    </div>
                </div>
                <div className=" col-span-1 px-4">
                    <form className=' flex flex-col space-y-2 bg-sky-900/70 py-8 px-6'>
                    <div className=" flex items-center space-x-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 stroke-2 text-white h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <p className=' text-2xl font-semibold text-white'>Send Us a Message</p>
                    </div>
                        <div className=" flex flex-col space-y-1 ">
                            <label htmlFor="name" className=' text-sm text-white'>Name</label>
                            <input type="text" name='Name' className=' text-sky-900 py-2 px-4 text-sm outline-none ' />
                        </div>

                        <div className=" flex flex-col space-y-1 ">
                            <label htmlFor="name" className=' text-sm text-white'>Email </label>
                            <input type="text" name='Name' className=' text-sky-900 py-2 px-4 text-sm outline-none ' />
                        </div>

                        <div className=" flex flex-col space-y-1 ">
                            <label htmlFor="name" className=' text-sm text-white'>Phone Number</label>
                            <input type="text" name='Name' className=' text-sky-900 py-2 px-4 text-sm outline-none ' />
                        </div>

                        <div className=" flex flex-col space-y-1 ">
                            <label htmlFor="name" className=' text-sm text-white'>Phone Number</label>
                            <textarea name="message" id="" cols="20" rows="5" className='py-2 px-4 outline-none'></textarea>
                        </div>
                    </form>
                    
                </div>
            </div>
           </div>
        </div>
        {/* <div className=" w-full text-white py-10 justify-center items-center bg-gray-900 my-10 flex flex-col space-y-6 ">
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
        </div> */}
        </>
    )
}


export default Company