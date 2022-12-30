import React from "react";
import shortBanner from '../../assets/imgs/plane_cargo.jpg'


const Socials = ( { phone, email }) => {

    return (
        <>
            <div className=" flex text-white space-x-6">
                <a href="mailto:contact@afrikaglobal.com" className=" space-x-3 rounded-md  bg-stone-600 items-center justify-center text-center px-4 py-2 flex ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                        <p className="">{email}</p>
                </a>
                <a href="mailto:contact@afrikaglobal.com" className=" space-x-3 rounded-md bg-stone-600 items-center justify-center text-center px-4 py-2 flex ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                    </svg>
                        <p className="">{phone}</p>
                </a>
            </div>
        </>
    )
}








const OfficeAddress = ( { office }) => {

    const contents = (
        <div className=" px-20 py-20 flex flex-col">
        <div className=" flex flex-col  my-auto space-y-3">
        <h1 className=" uppercase text-2xl font-bold">{office.title}</h1>
          <div className=" border-b-2 w-3/12 border-yellow-600"></div>
          <p>{office.description}</p>
          <div className="flex flex-col space-y-3 ">
              <p className=" font-banner text-orange-500 text-lg">Talk to Someone</p>
              <div className="">
                  <Socials email={office.email} phone={office.phone} />
              </div>
          </div>
        </div>
      </div>
    )
    
    const image = (
        <div className=" bg-cover p-6 h-[400px] "  >
            <img src={shortBanner} alt="" className=" w-full h-full object-cover" />
        </div>
    )







let first;
let second;

if (office.firstSection) {
   first = image
   second = contents
} else {
   first = contents
   second = image
}

    return (
        <>
        <div className="flex w-full ">
            <div className=" grid grid-cols-2 w-full px-20 ">
                {first}
                {second}
            </div>
        </div>
        </>
    )
}

export default OfficeAddress