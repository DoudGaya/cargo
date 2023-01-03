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
            '090 3322 111 22',
            '0902 223 34 422'
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
            '090 3322 111 22',
            '0902 223 34 422'
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
                    <p className="text-2xl text-gray-200 py-2">Turkiye Address</p>
                    </div>
                        <hr />
                        <p className=" text-white leading-7 my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur fugit vitae doloribus sequi eum ipsam consequatur laudantium fuga, veniam repudiandae.</p>
                    <div className=" flex space-x-4">
                        <p className=" text-yellow-300 text-sm px-6 py-2 bg-blue-700 font-bold">080 6224 98 34</p>
                        <p className=" text-yellow-300 text-sm px-6 py-2 bg-blue-700 font-bold">080 6224 98 34</p>
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
        <div className=" flex h-screen w-8/12 mx-auto flex-col ">
            <Maps />
            <div className=" grid grid-cols-2 my-10 shadow-lg ">
                <div className=" flex flex-colspace-y-6 py-10 px-10 bg-blue-600">
               

                </div>
                <div className=""></div>

            </div>
        </div>


        </div>
        </>
    )
}

export default Contact;