import socials from "../../socials"


const Socials = () => {

    // console.log(socials)
    const socia = socials.map(item => {
        return (
            <div className="py-2 space-x-3 flex" key={item.name}>
                <a href={item.link} target="_blank" className=" px-3 bg-orange-400 transform hover:scale-125 ease-linear duration-150 hover:border-2 hover:border-transparent delay-100 cursor-pointer flex space-x-2 items-center py-2 w-full">
                    {item.svg}
                    <p>
                        {item.name}
                    </p>
                </a>
            </div>
        )
    })
    return (
        <>
            <div className="md:w-8/12 w-10/12 bg-white/40 bg-sky-900 drop-shadow-lg shadow-sky-900  py-4 grid grid-cols-1 md:grid-cols-4 px-10 gap-3 mx-auto">
                {socia}
            </div>
        </>
    )
}


export default Socials