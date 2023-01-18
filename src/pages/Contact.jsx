import PageBanner from "./generals/Banner";
import Maps from './contact/Map'
import ContactForm from "./contact/ContactForm";


const contact = [
    {
        country: 'Turkey',
        state: 'Istanbul',
        address: 'Office 1 aksaray mha inkılap cad oto isyanı no 43/33 Aksaray fatih/İstanbul/Turkey',
        contact: ['+902125872381', '+0905393809466']
    },
    {
        country: 'Turkey',
        state: 'Istanbul',
        address: 'Office 1 aksaray mha inkılap cad oto isyanı no 43/33 Aksaray fatih/İstanbul/Turkey',
        contact: ['+902125862730', '+0905325016879']
    },
    {
        country: 'Nigeria',
        state: 'Lagos',
        address: 'No. 1 KAARA STREET, OFF OSOLO WAY. AJAO  ESTATE. 7/8. BUS STOP. AIRPORT ROAD. LAGOS.',
        contact: ['2348061975050', '2348158949110']
    },
    {
        country: 'Nigeria',
        state: 'Kano',
        address: 'TM.YOLA IMPORT AND EXPORT NIGERIALIMITED NO 10 BALARABIU HOUSE ALONG FIRST BANK KWARI MARKET KANO NIGERIA',
        contact: ['2348022760774', '2348023727922']
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
            <ContactForm contact={contact} />
        </div>
        </>
    )
}

export default Contact;