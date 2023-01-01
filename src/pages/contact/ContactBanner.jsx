import banner from "../../assets/imgs/banner5.jpg";
import { Link } from "react-router-dom";
const ContactBanner = () => {
    return (
        <>
        <div className="h-[400px] bg-cover bg-top" style={{ backgroundImage: `url(${banner})`}}>
            <div className=" h-full bg-stone-900/40 w-full flex items-center justify-center">
                <p className='  text-3xl text-white font-anton tracking-wide font-bold'> <Link to={`/`}>Home</Link> <span className=' text-3xl font-bold text-white'>{'>'}</span>Contact</p> 
            </div>
        </div>
        </>
    )
}

export default ContactBanner;