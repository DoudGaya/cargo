
import bannerImage from "../../assets/imgs/banner6.jpg"



const ContactForm = ( {contact}) => {

    return (
        <>
          <div className=" flex w-full justify-center mt-20 bg-cover" style={{ backgroundImage: `url(${bannerImage})` }}>
         <div className="backdrop-blur-md w-full">
        <div className=" flex w-10/12 py-10 mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-4">

                {
                    contact.map( address => {
                        return (
                            <div className=" flex pt-6 pb-4 px-4 rounded-lg m-4 space-y-4  flex-col bg-gray-100 w-full">
                               <div className=" flex items-center space-x-2">
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <p className=" text-lg font-banner" >{address.country}, <span className=" text-sm text-sky-600">{address.state}</span> </p>
                               </div>
                            <div className="flex flex-col px-4 text-sm ">
                                {address.address.toLowerCase()}
                            </div>
                            <div className="flex flex-col space-y-1 rounded-lg">
                            {
                                address.contact.map( numb => { 
                               return (
                                <div className=" flex items-center w-full bg-sky-300/70 rounded-md">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 flex-none mx-2 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    <a href={`tel:${numb}`} className=" w-full  p-2 rounded-lg">{numb}</a>  
                                </div>
                               ) 
                            }
                                )
                            }
                            </div>
                    </div>
                        )
                    })
                }
            </div>
        </div>
        </div>
        </div>
        </>
    )
}


export default ContactForm



