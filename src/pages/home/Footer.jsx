import socials from "../../socials";
import { useState } from "react";
const Footer = () => {

const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
})

const gettingValues = (event) => {
    const {value, name} = event.target
    setFormData((prevForm) => {
       return{...prevForm, [name]: value }
    })
    console.log(formData)
}


const SocialLinkCard = ({item }) => {
    return (
            <li  className="">
                <a href={item.link}  className=" flex items-center space-x-2 hover:underline ">
                   <div className=" fill-fuchsia-50">
                   {item.svg}
                   </div>
                    {/* <box-icon name='instagram' type='logo' className="" rotate='90' color='#ffffff' ></box-icon> */}
                   <span>{item.name}</span>
                </a>
            </li>
    )
}
    return (
        <>
        <div className=" w-full h-full text-gray-100 flex flex-col bg-black">
            <div className=" grid grid-cols-1 gap-6 md:grid-cols-5 w-10/12 mx-auto py-20">
               
                <div className=" col-span-1 border-l px-4 border-gray-700 md:col-span-2 font-main ">
                    <h2 className=" font-bold uppercase">ABOUT US</h2>
                    <p className="mt-4">
                    Africa Global is a leading logistics and freight forwarding company that 
                    offers customized solutions to its customers in Africa, with a focus on providing cost-effective services. 
                    The company has established reliable transportation routes to various African countries, especially Nigeria,
                    and has a strong reputation as a trusted service provider. Africa Global works closely with its 
                    clients to understand their specific needs and develop comprehensive service plans to meet those requirements.
                    </p>
                </div>
                
                <div className=" flex flex-col border-l px-4 border-gray-700">
                    <p className=" uppercase font-bold">Quick LINKS </p>
                    <ul className="font-main flex mt-4 flex-col space-y-2">
                        <li className="">
                            <a href="" className=" hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="" className=" hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="" className=" hover:underline">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="" className=" hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                 <div className=" flex flex-col border-l px-4 border-gray-700">
                    <p className=" uppercase font-bold">Social LINKS </p>
                    <ul className="font-main flex mt-4 flex-col space-y-2">
                       {
                        socials.map(item => <SocialLinkCard item={item} key={item.id} /> )
                       }
                    </ul>
                </div>
                <div className=" flex flex-col">
                    <p>Contact Us</p>
                    <form className=" flex flex-col space-y-2 w-full mt-4 ">
                        <div>
                            <label htmlFor="name" className="hidden">Name</label>
                            <input type="text" onChange={gettingValues} name="name" placeholder="Name" className=" px-2 caret-gray-700 text-black bg-gray-300 outline-none w-full flex py-1" />
                        </div>
                        <div>
                            <label htmlFor="name" className="hidden">Name</label>
                            <input type="text" onChange={gettingValues} name="email" placeholder="Email" className=" px-2 caret-gray-700 text-black bg-gray-300 outline-none w-full flex py-1" />
                        </div>

                        <div>
                            <label htmlFor="name" className="hidden">Name</label>
                            <textarea type="text" onChange={gettingValues} name="message" cols="30" rows="3" placeholder="Message" className=" px-2 caret-gray-700 text-black bg-gray-300 outline-none w-full flex py-1" ></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div className=" bg-stone-900 text-gray-600 w-full border-t border-gray-700 text-center py-2 justify-center">
                <p>Developed by Abdulrahman Dauda </p>
            </div>
        </div>
        </>
    )
}


export default Footer;