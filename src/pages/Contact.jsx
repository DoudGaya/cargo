import PageBanner from "./generals/Banner";
import Maps from './contact/Map'
import AddressCard from "./contact/AddressCard";



const contact = [
    {
        country: 'Turkey',
        state: 'Istanbul',
        address: 'HEAD OFFICE: ARKSARY MAH.INKLAP CAD. OTO ÍŞHANI. No: 43/33 AKSARAY-FATIH/TURKKEY',
        contact: ['905325016879', '905393809466']
    },
    {
        country: 'Turkey',
        state: 'Istanbul',
        address: 'BRANCH: ABDULLATIFPASA SOKAK, B/ BLOCK LALE PALAS APT. NO.22/ AKSARAY/ FATIH/ ISTANBUL',
        contact: ['905522768481', '905372005134']
    },
    {
        country: 'Nigeria',
        state: 'Lagos',
        address: 'No. 1 Kwara Street, Off Osolo Way. Ajoa  Estate. 7/8. Bus Stop. Airport Road. Lagos.',
        contact: ['+2348061975050', '+2348158949110']
    },
    {
        country: 'Nigeria',
        state: 'Kano',
        address: 'TM YOLA Import and Export Nigeria Limited No 10 Bala Rabiu House Along First Bank Kwari Market Kano Nigeria',
        contact: ['+2348022760774', '+2348023727922']
    },
]


const Contact = () => {
    return (
        <>
        <div className="">
            {/* <ContactBanner /> */}
            <PageBanner banner="Contact" />
            <div className="w-10/12 mx-auto">
                <Maps />
            </div>
                <AddressCard contact={contact} />
            </div>
        </>
    )
}

export default Contact;