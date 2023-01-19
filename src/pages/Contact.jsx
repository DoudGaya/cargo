import PageBanner from "./generals/Banner";
import Maps from './contact/Map'
import AddressCard from "./contact/AddressCard";


const contact = [
    {
        country: 'Turkey',
        state: 'Istanbul',
        address: 'Head Office: Aksaray Mha Inkılap Cad Oto Isyanı No 43/33 Aksaray Fatih/İstanbul/Turkey',
        contact: ['+902125872381', '+0905393809466']
    },
    {
        country: 'Turkey',
        state: 'Istanbul',
        address: 'Branch: Abdüllatif Pasa Sokak Blok Lale Palas Apt No 22/A Aksaray Fatih/Istanbul Turkey',
        contact: ['+902125862730', '+0905325016879']
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