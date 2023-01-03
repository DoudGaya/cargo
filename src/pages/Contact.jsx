import PageBanner from "./generals/Banner";
import Maps from './contact/Map'




const locations = [
    {
        id: 1,
        country: 'Turkiye Address',
        state: 'Kano',

        offices: [
            {
                state: 'Kano',
                address: 'Kano Office'
            },

            {
                state:'Abuja',
                address: 'Abuja Address'
            }
        ],

        contacts: [
            '090 TURKEY NUMBER 1',
            '090 TURKEY NUMBER 2'
        ]
    },

    {
        id: 1,
        country: 'Nigeria',
        offices: [
            {
                state: 'Kano',
                address: 'Kano Office'
            },

            {
                state:'Abuja',
                address: 'Abuja Address'
            }
        ],
        contacts: [
            '090 NIGERIAN NUMBER 1',
            '0902 NIGERIAN NUMBER 2'
        ],

    },

]



const address = locations.map( (one) => {
    return (
        <>
             <div className=" h-full w-full py-2 px-3">
                <div className=" flex space-x-3 items-center text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="text-2xl text-gray-200 py-2">{ one.country }</p>
                    </div>
                        <hr />

                        { one.offices.map( office => { 
                            return (
                                <>
                                 <div className=" text-white leading-7 my-4">
                                    <h3 className=" font-bold my-2">{office.state}</h3>
                                    <p className=" ml-3"> {office.address}</p>
                                </div>
                                </>
                            ) 
                            
                        } )}


                       
                    <div className=" flex space-x-4">

                        {one.contacts.map( (contact) => {
                            return (
                                <p className=" text-yellow-300 text-sm px-6 py-2 bg-blue-700 font-bold">{contact}</p>
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
        <div className=" flex h-screen w-10/12 mx-auto flex-col ">
            <Maps />
            <div className=" grid grid-cols-2 my-10 shadow-lg ">
                <div className=" flex flex-col space-y-6 py-10 px-10 bg-blue-600">
                    {address}
                </div>
            </div>
        </div>


        </div>
        </>
    )
}

export default Contact;