
const Steps = ( { bannerImg } ) => {

  const step = [
    {
      id: 1,
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 stroke-white h-6 ">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
    </svg>
    ),
      title: 'Get in a call with one of our agents',
      
    },

    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 stroke-white h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>

      ),
      title: 'Get your package to one our office',
      
    },

    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 stroke-white h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>

      ),
      title: 'Create your shipment order and make payment',
      
    },

    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 stroke-white h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: 'Get some nice coffee and wait for your delivery',
      
    },
  ]
  return (
      <>
     <div className=" flex flex-col dark:text-white  text-gray-900 items-center space-y-6">
     <div className="grid gap-x-6 py-6 grid-cols-1 gap-y-6 md:gap-y-0 md:grid-cols-2">
          <div className="">
            <img src={bannerImg} alt="" className=' rounded-md h-[300px] w-full object-cover' srcSet="" />
          </div>
          <div className="flex flex-col space-y-3 my-auto">
            <p className=' text-xl text-sky-900 dark:text-sky-100 md:text-3xl font-banner font-bold'>Your Shipping Partner</p>
            <p className='text-xl md:text-2xl'>We are comitted to providing fast and efficient shipping services to all our customers in the best way possible </p>
            <div className=" flex items-start py-2">
            <a href="tel:+0905393809466" className='text-lg text-white dark:bg-black items-center space-x-3 px-3 py-2 rounded-md bg-sky-500  flex'>
              {step[0].icon}
              <div className="">Talk To Someone</div>
              </a>
            </div>
           
          </div>

         
      </div>

      <div className=" mb-6">
      <p className=' text-sky-900 dark:text-sky-100 text-xl font-bold font-banner'>The Shipment Steps</p>
      <div className=" py-6 grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
       {
        step.map( (em) => {
          return (
            <div key={em.id} className=" px-6 flex flex-col py-4 dark:bg-black bg-white shadow-lg shadow-gray-600/10 rounded-lg space-y-3 ">
              <div className=" flex place-items-end space-x-2">
               <div className=" p-2 bg-sky-500 rounded-lg">
               {em.icon}
               </div>
                <small className=' text-sky-900 text-lg dark:text-sky-100 font-banner '>Step {em.id}</small>
              </div>
              <p className="">{em.title} </p>
            </div>
          )
        })
       }
      </div>
      </div>
     </div>
      </>
  )
}
export default Steps