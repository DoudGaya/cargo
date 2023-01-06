import PageBanner from "./generals/Banner";
import Maps from './contact/Map'
import ContactForm from "./contact/ContactForm";


const Contact = () => {
    return (
        <>
        <div className="">
        {/* <ContactBanner /> */}
        <PageBanner banner="Contact" />
        <div className="w-10/12 mx-auto">
            <Maps />
        </div>
            <ContactForm />
        </div>
        </>
    )
}

export default Contact;