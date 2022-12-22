import aboutBanner from '../../assets/imgs/banner5.jpg'


const AboutBanner = () => {
    return (
        <>
        <div className="h-[400px] bg-cover bg-top" style={{ backgroundImage: `url(${aboutBanner})`}}>
            <div className=" h-full bg-stone-900/40 w-full flex items-center justify-center">
                <p className='  text-3xl text-white font-anton tracking-wide font-bold'>Home <span className=' text-3xl font-bold text-white'>{'>'}</span> about</p> 
            </div>
            <div className=" w-8/12 mx-auto flex flex-col justify-center item-center text-center py-8">
                <p className=' text-orange-500 text-3xl font-anton pb-6'>About Our Company</p>
                <p className=' text-xl'>
               explicabo est error nihil quia consectetur reiciendis eos minus molestiae modi magnam dolores corrupti. Eos deleniti dolorem est, non tempora, voluptates veritatis officiis esse necessitatibus minus quas nisi. Tempora natus enim, aliquam doloremque voluptates eum illum. Sed consectetur quam reiciendis porro in quibusdam, iusto, ab corporis praesentium ipsam quae deleniti. Ullam sed nesciunt perferendis iusto dignissimos, eligendi nisi harum beatae obcaecati sequi optio vero ratione dolores cumque suscipit neque non ex nobis qui. Molestias inventore corporis harum non magnam blanditiis, at aut quia suscipit, enim aspernatur fugit minima?
                </p>
                <div className=" flex flex-col spcae-x-6 items-start">
                        <div className=" bg-slate-400">
                            Hello here
                        </div>
                </div>
            </div>

            <div className=" w-full bg-yellow-400 px-10">
                    something goods
            </div>
        </div>
        </>
    )
}

export default AboutBanner