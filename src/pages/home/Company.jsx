import founder from '../../assets/imgs/director.jpeg'
import coFounder from '../../assets/imgs/md.jpeg'
import banner from '../../assets/imgs/banner6.jpg'


const SocialIcons = () => {
    return (
        <>
        <div className="w-full flex flex-row justify-around">
            <a href="#">

            </a>
        </div>
        </>
    )
}

const staffs = [
    {
        id: 1,
        name: 'Bethelhm Mamo Pius',
        image: founder,
        designation: 'Director'
    },

    {
        id: 2,
        name: 'Mr. Jonathan Ugochukwu Pius',
        image: coFounder,
        designation: 'Managing Director'
    },
]

    const ceo = staffs.map( name => {
        return (
            <>
             <div key={name.id} className=" w-full  px-10 mx-auto flex flex-col ">
                <div className=" flex flex-col items-center mx-auto">
                    <img src={name.image} className=' h-[250px] rounded-full object-cover w-[250px]' alt="" />
                    <div className=" flex justify-center flex-col items-center">
                        <p className=' font-semibold text items-center justify-center-sm group-hover:text-white'>{name.designation}</p>
                        <p className='group-hover:text-white text-base'>{name.name}</p>
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
        <div className="  w-full flex flex-row justify-center bg-no-repeat bg-cover bg-left " style={{backgroundImage: `url('${banner}')` }}>
           <div className=" backdrop-blur-md flex w-full items-center justify-center">
           <div className=" grid grid-cols-1 md:grid-cols-3 w-10/12 content-center ">
                <div className=" col-span-2 flex flex-col my-6 md:my-0 md:w-[650px] mx-auto">
                    <div className=" grid text-white grid-cols-1  md:grid-cols-2 h-full items-center ">
                        {ceo}
                    </div>
                </div>
                <div className=" col-span-1 px-4">
                    <div className=" bg-sky-700 px-10 py-20">
                        <h3 className=' text-2xl uppercase font-bold text-orange-500 my-3'>About Us</h3>
                        <p className=' text-white'>
                            Africa Global is a leading logistics and freight forwarding company that offers customized solutions to its customers in Africa, with a focus on providing cost-effective services. The company has established reliable transportation routes to various African countries, especially Nigeria, and has a strong reputation as a trusted service provider. Africa Global works closely with its clients to understand their specific needs and develop comprehensive service plans to meet those requirements.
                        </p>
                    </div>
                    {/* <form className=' flex flex-col space-y-2 bg-sky-900/70 py-8 px-6'>
                    <div className=" flex items-center space-x-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 stroke-2 text-white h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <p className=' text-2xl font-semibold text-white'>Send Us a Message</p>
                    </div>
                        <div className=" flex flex-col space-y-1 ">
                            <label htmlFor="name" className=' text-sm text-white'>Name</label>
                            <input type="text" name='Name' placeholder='Your name' className=' text-sky-900 py-2 px-4 text-sm outline-none ' />
                        </div>

                        <div className=" flex flex-col space-y-1 ">
                            <label htmlFor="name" className=' text-sm text-white'>Email </label>
                            <input type="text" name='Name' placeholder=' Your email Address' className=' text-sky-900 py-2 px-4 text-sm outline-none ' />
                        </div>

                        <div className=" flex flex-col space-y-1 ">
                            <label htmlFor="name" className=' text-sm text-white'>Phone Number</label>
                            <input type="text" name='Name' placeholder=' Your phone number ' className=' text-sky-900 py-2 px-4 text-sm outline-none ' />
                        </div>

                        <div className=" flex flex-col space-y-1 ">
                            <label htmlFor="name" className=' text-sm text-white'>Phone Number</label>
                            <textarea name="message" id="" cols="20" placeholder='Send Us a Message' rows="5" className='py-2 px-4 outline-none'></textarea>
                        </div>
                    </form> */}
                    
                </div>
            </div>
           </div>
        </div>
        </>
    )
}


export default Company