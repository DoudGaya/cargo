import PageBanner from "./generals/Banner";
import bannerImage from "../assets/imgs/banner6.jpg"
import Maps from './contact/Map'




const locations = [
    {
        id: 1,
        country: 'Turkiye Address',
        state: 'Kano',

        offices: [
            {
                state: 'Kano Office',
                address: 'Block z-3, Phase III, Kundila Housing Estate, Tarauni Kano, Kano, Nigeria '
            },

            {
                state:'Abuja Office',
                address: 'Block z-3, Phase III, Kundila Housing Estate, Tarauni Kano, Kano, Nigeria '
            }
        ],

        contacts: [
            '+234 906 224 9834',
            '+234 906 224 9834'
        ]
    },

    {
        id: 1,
        country: 'Nigeria',
        offices: [
            {
                state: 'Kano',
                address: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, consequuntur?'
            },

            {
                state:'Abuja',
                address: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, consequuntur?'
            }
        ],
        contacts: [
            '090 NIGERIAN NUMBER 1',
            '0902 NIGERIAN NUMBER 2'
        ],

    },

]




const address = locations.map((one) => {
    return (
        <>
             <div className=" h-full w-full bg-white rounded-lg py-12 px-10">
                <div className=" flex space-x-3 items-center text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="text-xl text-gray-900 py-2">{ one.country }</p>
                    </div>
                        <hr />
                        { one.offices.map( office => { 
                            return (
                                <>
                                 <div className=" text-gray-900 leading-7 my-4">
                                    {/* <h3 className=" font-semibold my-2">{office.state}</h3> */}
                                    <p className=""> {office.address}</p>
                                </div>
                                </>
                            ) 
                            
                        } )}

                    <div className=" flex space-x-10">

                        {one.contacts.map( (contact) => {
                            return (
                                <p className=" text-sm py-1 rounded-md bg-sky-400/60 px-4 ">{contact}</p>
                            )
                        } )}
                    </div>
            </div>
        </>
    )
})


const Contact = () => {
    return (
        <>
        <div className="">
        {/* <ContactBanner /> */}
        <PageBanner banner="Contact" />
        <div className="w-10/12 mx-auto">
            <Maps />
        </div>

        <div className=" flex w-full bg-yellow-200 justify-center mt-20 bg-cover" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className=" grid grid-cols-2  shadow-lg ">
                <div className=" flex flex-col space-y-6 py-10 px-10 ">
                    {address}
                </div>
                <div className=" flex backdrop-blur-sm flex-col space-y-4 px-10 py-20">
                    <div className=" flex flex-col w-11/12 mx-auto">
                        <p className=" text-2xl font-semibold">Get In touch </p>
                        <small className=" text-base tracking-wider">Send us a message here </small>
                    </div>
                    <form className="w-11/12 mx-auto flex flex-col space-y-4">
                     <div className=" flex space-x-3">
                     <div className=" flex space-y-1 w-full">
                        <label tmlFor="name" className=" hidden text-lg ">Your Name</label>
                        <input type="text" placeholder="Somet" className=" w-full px-4 py-2 bg-gray-200 border border-gray-700 outline-none" />
                      </div>
                      <div className=" flex space-y-1 w-full">
                        <label htmlFor="name" className=" hidden text-lg ">Email address</label>
                        <input type="text" placeholder="Somet" className=" w-full px-4 py-2 bg-gray-200 border border-gray-700 outline-none" />
                      </div>
                     </div>

                     <div className=" flex space-x-3">
                     <div className=" flex space-y-1 w-full">
                        <label tmlFor="name" className=" hidden text-lg ">Phone Number</label>
                        <input type="text" placeholder="Somet" className=" w-full px-4 py-2 bg-gray-200 border border-gray-700 outline-none" />
                      </div>
                      <div className=" flex space-y-1 w-full">
                        <label htmlFor="name" className=" hidden text-lg ">Email address</label>
                        <input type="text" placeholder="Somet" className=" w-full px-4 py-2 bg-gray-200 border border-gray-700 outline-none" />
                      </div>
                     </div>

                      <div className=" flex flex-col space-y-1">
                        <label htmlFor="name" className=" text-lg ">Pnone Number</label>
                        <textarea type="text" cols="30" rows="7" className=" px-4 py-2 bg-gray-200 border border-gray-700 outline-none" ></textarea>
                      </div>
                    </form>
                </div>
        </div>
        </div>


        </div>
        </>
    )
}

export default Contact;