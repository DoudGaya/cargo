
export default function AboutTheCompany() {
    return (
        <>
              <div className=" w-7/12 my-10 mx-auto flex flex-col justify-center item-center text-center ">
                <p className='text-orange-500 text-3xl font-anton pb-6'>Why Us</p>
                <p className=' text-base text-gray-800 dark:text-gray-200'>
                    Tempora natus enim, aliquam doloremque voluptates eum illum. Sed consectetur quam reiciendis porro in quibusdam, iusto, ab corporis praesentium ipsam quae deleniti. Ullam sed nesciunt perferendis iusto dignissimos, eligendi nisi harum beatae obcaecati sequi optio vero ratione dolores cumque suscipit neque non ex nobis qui. Molestias inventore corporis harum non magnam blanditiis, at aut quia suscipit, enim aspernatur fugit minima?
                </p>
                <div className=" grid grid-cols-3 my-10 gap-x-4">
                    <div className=" flex flex-col bg-gray-200 rounded-lg py-4 space-y-1">
                        <div className=" flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 stroke-1 stroke-yellow-500 h-16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        </div>
                        <p className=" font-banner py-2 ">Fast</p>
                    </div>
                    <div className=" flex flex-col bg-gray-200 rounded-lg py-4 space-y-1">
                        <div className=" flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 stroke-1 stroke-yellow-500 h-16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                        </div>
                        <p className="font-banner py-2 ">Reliable</p>
                        </div>
                    <div className=" flex flex-col bg-gray-200 rounded-lg py-4 space-y-1">
                        <div className=" flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 stroke-1 stroke-yellow-500 h-16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                        </svg>
                        </div>
                        <p className="font-banner py-2 ">Efficient</p>
                    </div>
                </div>
            </div>
        </>
    )
}