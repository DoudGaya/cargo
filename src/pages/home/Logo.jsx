import logo from '../../assets/imgs/logo_nav.png'

export default function Logo() {
    return (
        <>
        <div className=" flex items-center mx-auto py-10">
            <img src={logo} className=" h-[300px] drop-shadow-md rounded-full w-[300px]" alt="Logo" srcSet="" />
        </div>
            
        </>
    )
}