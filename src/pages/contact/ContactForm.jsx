import bannerImage from "../../assets/imgs/banner6.jpg"



const locations = [
    {
        id: 1,
        country: 'Nigerian Addresses',
        state: 'Kano',

        offices: [
            {
                state: 'Kano Office',
                address: 'No. 1 KAARA STREET, OFF OSOLO WAY. AJAO  ESTATE. . 7/8. BUS STOP. AIRPORT ROAD.  LAGOS. '
            },

            {
                state:'Abuja Office',
                address: 'TM.YOLA IMPORT AND EXPORT NIGERIALIMITED NO 10 BALARABIU HOUSE ALONG FIRST BANK KWARI MARKET KANO NIGERIA'
            }
        ],

        contacts: [
            '+2348022760774',
            '+2348023727922'
        ]
    },

    {
        id: 1,
        country: 'Turkey Addresses',
        offices: [
            {
                state: 'Head Office',
                address: 'Aksaray Mah inkılap cad.oto ishanı No:43/33 Aksaray-fatih/ISTANBUL/TYRKEY'
            },

            {
                state:'Warehouse',
                address: 'Abdüllatif paşa sokak /Blok Lale Palas Apt.No22/A Aksaray Fatih/İSTANBUL Turkey'
            },

            {
                state:'Depo',
                address: 'Aksaray Mah Sinekli Bahçe Araligi sk altan Apt 1 No:3 Fatih İstanbul Turkey'
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
                                 <div className=" text-gray-900  leading-7 my-4">
                                    <h3 className=" font-semibold my-2">{office.state}</h3>
                                    <ul className=" list-decimal">
                                        <l className=" text-sm lowercase"> {office.address}</l>
                                    </ul>
                                </div>
                                </>
                            ) 
                            
                        } )}

                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">

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



const ContactForm = () => {
    return (
        <>
          <div className=" flex w-full justify-center mt-20 bg-cover" style={{ backgroundImage: `url(${bannerImage})` }}>
         <div className="backdrop-blur-md w-full">
        <div className=" flex w-10/12 py-10 mx-auto ">
                <div className="grid grid-cols-2 gap-x-6">
                    {address}
                </div>
        </div>
        </div>
        </div>
        </>
    )
}


export default ContactForm