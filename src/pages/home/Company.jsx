import founder from '../../assets/imgs/director.jpeg'
import coFounder from '../../assets/imgs/md.jpeg'
import banner from '../../assets/imgs/banner6.jpg'



const Founder = ( { staffs } ) => {

    return (
        <div  className=" w-full  px-10 mx-auto flex flex-col ">
        <div className=" flex flex-col items-center mx-auto">
            <img src={staffs.image} className=' h-[250px] rounded-full object-cover w-[250px]' alt="" />
            <div className=" flex justify-center flex-col items-center">
                <p className=' font-semibold text items-center justify-center-sm group-hover:text-white'>{staffs.designation}</p>
                <p className='group-hover:text-white text-center text-lg'>{ staffs.name}</p>

            </div>
            </div>
    </div>
    )
}

const staffs = [
    {
        id: 1,
        name: 'Bethelhem Mamo Pius',
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
    const ceo = staffs.map(name => {
        return <Founder key={name.id} staffs={name} />
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
                <div className=" col-span-1 md:px-4">
                    <div className=" rgb(24,135,62) px-6 py-20">
                        <h3 className=' text-2xl uppercase font-bold text-orange-500 my-3'>About Us</h3>
                        <p className=' text-white'>
                            Africa Global is a leading logistics and freight forwarding company that offers customized solutions to its customers in Africa, with a focus on providing cost-effective services. The company has established reliable transportation routes to various African countries, especially Nigeria, and has a strong reputation as a trusted service provider. Africa Global works closely with its clients to understand their specific needs and develop comprehensive service plans to meet those requirements.
                        </p>
                    </div>                    
                </div>
            </div>
           </div>
        </div>
        </>
    )
}


export default Company