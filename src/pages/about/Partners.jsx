
import partners from '../../partners'



const Logos = ( { part } ) => {
    return (
        <>
        <a href={part.url} target="_blank" className="flex items-center hover:bg-gray-200 rounded-lg justify-center py-2 px-6">
            <img src={part.logo} className=" grayscale cursor-pointer hover:grayscale-0 h-[100px] object-contain " alt="" />
        </a>
        </>
    )
}



const logo = partners.map( (single) => {
    return <Logos key={single.id}  part={single} />
})


export default function Partners() {

    return (
        <>
        <div className=" flex w-full md:py-20">
            <div className=" md:w-8/12 mx-auto grid gap-2 px-4 grid-cols-2 md:grid-cols-4">
                {logo}
            </div>
        </div>
        </>
    )
}
