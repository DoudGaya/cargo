

const Footer = () => {
    return (
        <>
        <div className=" w-full h-full text-gray-100 flex flex-col bg-black">
            <div className=" grid grid-cols-5 w-10/12 mx-auto py-20">
                <div className=" col-span-2 font-main ">
                    <h2 className=" font-bold uppercase">ABOUT US</h2>
                    <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis accusantium nostrum et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perferendis aut dolore maxime, recusandae quibusdam repudiandae saepe est? Deleniti, harum. Totam consequuntur assumenda dolorum eveniet sed ea vero?</p>
                </div>

                <div className=" flex flex-col border-l px-4 border-gray-700">
                    <p className=" uppercase font-bold">Quick LINKS </p>
                    <ul className="font-main flex mt-4 flex-col space-y-2">
                        <li className=" ">
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
                        <li className=" ">
                            <a href="" className=" flex items-center space-x-2 hover:underline ">
                                <box-icon name='instagram' type='logo' className="" rotate='90' color='#ffffff' ></box-icon>
                               <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="flex items-center space-x-2 hover:underline">
                                <box-icon name='whatsapp' type='logo' color='#ffffff' ></box-icon>
                                <span>WhatsApp</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className=" flex items-center space-x-2 hover:underline">
                            <box-icon name='twitter' type='logo'  color='#ffffff' ></box-icon>
                                <span>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className=" flex items-center space-x-2 hover:underline">
                                <box-icon name='facebook' type='logo' color='#ffffff' ></box-icon>
                                <span>Facebook</span>
                            </a>
                        </li>

                        <li>
                            <a href="" className=" flex items-center space-x-2 hover:underline">
                                <box-icon type='logo' color='#ffffff' name='linkedin'></box-icon>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className=" flex flex-col">
                    <p>Send Us A Message</p>
                    <form className=" flex flex-col space-y-2 w-full mt-4 ">
                        <div>
                            <label htmlFor="name" className="hidden">Name</label>
                            <input type="text" placeholder="Your Name here..." className=" px-2 caret-gray-700 text-black bg-gray-300 outline-none w-full flex py-1" />
                        </div>
                        <div>
                            <label htmlFor="name" className="hidden">Name</label>
                            <input type="text" placeholder="Your Name here..." className=" px-2 caret-gray-700 text-black bg-gray-300 outline-none w-full flex py-1" />
                        </div>

                        <div>
                            <label htmlFor="name" className="hidden">Name</label>
                            <textarea type="text" cols="30" rows="3" placeholder="Your Name here..." className=" px-2 caret-gray-700 text-black bg-gray-300 outline-none w-full flex py-1" ></textarea>
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