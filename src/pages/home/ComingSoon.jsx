import React from "react";
import container from '../../assets/imgs/containers.jpg'
import logo from '../../assets/imgs/logo-image.png'

const ComingSoon = () => {
    return (
        <>
        <div className=" h-screen grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="" style={{backgroundImage: `url(${container})`}}>
                <div className=" flex flex-col w-full h-full items-center py-8 backdrop-blur-sm bg-white/10">
                <div className=" w-[250px] h-[250px] bg-white/70 rounded-full drop-shadow-lg">
                    <img src={logo} className="" alt="" srcset="" />
                </div>
                    <div className=" flex flex-col w-full my-8 mx-auto  px-10">
                        <div className=" bg-white/70 flex flex-col px-6 py-16 rounded-md space-y-4 ">
                            
                            <div className=" flex p-2 rounded-lg mx-auto justify-center bg-black/70 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <p className=" text-3xl text-center font-bold text-[#118338] font-banner">Our Office Address</p>
                            <ul className=" space-y-4">
                                <li className=" flex flex-col space-x-3 item-start border-l-2 border-black bg-white/90">
                                   <div className=" space-y-2 py-2 px-4 text-green-800 font-bold ">
                                        <p>Head Office</p>
                                        <p className=" font-semibold text-gray-900">Aksaray Mah inkılap cad.oto ishanı No:43/33 Aksaray-fatih/ISTANBUL/TYRKEY</p>
                                   </div>
                                </li>

                                <li className=" flex flex-col space-x-3 item-start border-l-2 border-black bg-white/90">
                                   <div className=" space-y-2 py-2 px-4 text-green-800 font-bold">
                                   <p>Warehouse</p>
                                    <p className=" font-semibold text-gray-900"> {'Abdüllatif paşa sokak'} /Blok Lale Palas Apt.No22/A Aksaray Fatih/{'İstanbul'.toUpperCase()} Turkey </p>
                                   </div>
                                </li>

                                <li className=" flex flex-col space-x-3 item-start border-l-2 border-black bg-white/90">
                                   <div className=" space-y-2 py-2 px-4 text-green-800 font-bold">
                                    <p>Depo</p>
                                    <p className=" font-semibold text-gray-900">Aksaray Mah Sinekli Bahçe Araligi sk altan Apt 1 No:3 Fatih İstanbul Turkey</p>
                                   </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" bg-gray-900 flex flex-col px-10 py-10">
                <h1 className=" text-5xl text-[#FECA0A] font-bold font-banner">Coming Soon...</h1>
                <div className=" text-gray-100 py-10">
                    <h2 className="text-2xl py-3 text-[#FECA0A]">ABOUT US - AFRICA GLOBAL LOGISTICS</h2>
                    <p className=" leading-7">

                    Africa Global is a leading international freight forwarding logistics company providing cost-effective solutions for cargo shipping from Turkey to various African countries. We developed customized service plans to meet our customer needs, using multimodal transportation routes for African countries, particularly Nigeria. We are the preferred supplier for many partner companies and have built a strong reputation for quality services.
                    </p>
                </div>

                <div className=" flex flex-col text-white">
                    <div className=" text-[#feca0a] text-xl">
                    <div className=" flex space-x-2 items-center">
                        <box-icon name='user' color='#feca0a' ></box-icon>
                        <p>Turkey Customer Support Lines  </p> 
                    </div>
                    </div>
                <div className="  py-4 grid gap-4 grid-cols-1 md:grid-cols-3">
                    <a href="tel:+902125872381" className=" flex space-x-3 bg-black shadow-lg text-white py-4 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    <span>+090 539 380 9466</span>

                    </a>

                    <a href="tel:+902125872381" className=" flex space-x-3 bg-black shadow-lg text-white py-4 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    <span>+90212 586 27 30</span>

                    </a>

                    <a href="tel:+902125872381" className=" flex space-x-3 bg-black shadow-lg text-white py-4 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    <span>+902 125 872 381</span>

                    </a>
                </div>
                </div>

                {/* <div className=" flex flex-col text-white">
                    <div className=" text-[#FECA0A] text-xl">
                    <div className=" flex space-x-2 items-center">
                        <box-icon name='user' color='#feca0a' ></box-icon>
                        <p>Turkey Customer Support Lines  </p> 
                    </div>
                    </div>
                <div className="py-4 grid gap-4 grid-cols-1 md:grid-cols-3">
                    <a href="tel:+902125872381" className=" flex space-x-3 bg-black shadow-lg text-white py-4 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    <span>+090 532 501 6879</span>

                    </a>

                    <a href="tel:+902125872381" className=" flex space-x-3 bg-black shadow-lg text-white py-4 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    <span>+905 387 473 754</span>

                    </a>

                    <a href="tel:+902125872381" className=" flex space-x-3 bg-black shadow-lg text-white py-4 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    <span>+090 539 380 9466</span>

                    </a>
                </div>
                </div> */}


                <div className=" flex flex-col text-white">
                    <div className=" text-[#FECA0A] text-xl">
                    <div className=" flex space-x-2 items-center">
                        <box-icon name='user' color='#feca0a' ></box-icon>
                        <p>Email Addresses</p> 
                    </div>
                    </div>
                <div className="  py-4 grid gap-4 grid-cols-1 md:grid-cols-3 ">
                    <a href="mailto:contact@afrikanglobal.com" className=" flex space-x-3 bg-black shadow-lg stroke-white text-white py-4 px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                    </svg>

                        <span>contact@afrikanglobal.com</span>
                    </a>   

                    <a href="mailto:help@afrikanglobal.com" className=" flex space-x-3 bg-black shadow-lg text-white py-4 px-3">

                        <span>help@afrikanglobal.com</span>
                    </a>   
                </div>
                </div>
            </div>

        </div>
        </>
    )
}


export default ComingSoon;