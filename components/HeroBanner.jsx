import React from "react";
import Link from "next/link";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="grid mx-auto my-5 w-full max-w-screen-xl">
      <div className="p-10 grid grid-cols-2 h-80 bg-slate-300 rounded-lg">
        <div className="">
          <p className="text-slate-800">{heroBanner.smallText}</p>
          <h3 className="text-4xl font-bold text-slate-800">{heroBanner.midText}</h3>
          <h1 className="text-6xl font-bold text-white">{heroBanner.largeText1}</h1>
          <Link href={ ` /product/${heroBanner.product} ` }>
              <button className="mt-14 p-3 rounded-xl text-white bg-slate-800 shadow-xl" type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>
        
        <div className="grid justify-items-end place-content-end">
          <h5 className="text-slate-800">Description</h5>
          <p className=" text-slate-500">{heroBanner.desc}</p>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner