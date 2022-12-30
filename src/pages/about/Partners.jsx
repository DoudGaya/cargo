import evergreen from '../../assets/imgs/partners/evergreen.png'
import hapag from '../../assets/imgs/partners/hapag.png'
import cma from '../../assets/imgs/partners/cma-cgm.png'
import maersk from '../../assets/imgs/partners/mearsk.png'



const partners = [
    {
        id: 1,
        company: 'Mearsk',
        logo: evergreen,
    },
    {
        id: 1,
        company: 'cma-cgm',
        logo: cma,
    },
    {
        id: 1,
        company: 'Hapag-Lloyd',
        logo: hapag,
    },
    {
        id: 1,
        company: 'Mearsk',
        logo: maersk,
    },
]




const Logos = ( { part } ) => {
    return (
        <>
        <div className=" bg-yellow-200 flex items-center justify-center py-2 px-6">
            <img src={part.logo} className=" h-[100px] object-contain " alt="" />
        </div>
        </>
    )
}


const logo = partners.map( (single) => {
    return <Logos key={single.id} part={single} />
})


export default function Partners() {

    return (
        <>

        <div className=" flex w-full bg-yellow-300  py-10">
            <div className=" w-8/12 mx-auto grid gap-2 grid-cols-4">
                {logo}
            </div>
        </div>
        
        </>
    )
}
