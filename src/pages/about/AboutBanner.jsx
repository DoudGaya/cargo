import aboutBanner from '../../assets/imgs/banner5.jpg'
import AboutTheCompany from './AbousTheCompany'


const AboutBanner = () => {
    return (
        <>
        <div className="h-[400px] bg-cover bg-top" style={{ backgroundImage: `url(${aboutBanner})`}}>
            <div className=" h-full bg-stone-900/40 w-full flex items-center justify-center">
                <p className='  text-3xl text-white font-anton tracking-wide font-bold'>Home <span className=' text-3xl font-bold text-white'>{'>'}</span> about</p> 
            </div>

             <AboutTheCompany />

            <div className=" w-full bg-yellow-400 px-10">
                    something goods
            </div>
        </div>
        </>
    )
}

export default AboutBanner