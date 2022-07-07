import React from "react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="grid mx-auto my-5 w-full max-w-screen-xl">
      <div className="p-10 grid grid-cols-2 h-80 bg-slate-300">
        <div>
          <p className="text-slate-800">SMALL TEXT</p>
          <h3 className="text-4xl font-bold text-slate-800">MID TEXT</h3>
          <Link href="/product/ID">
              <button className="mt-14 p-3 rounded-xl text-white bg-slate-800 shadow-xl" type="button">BUTTON TEXT</button>
          </Link>
        </div>
        
        <div className="grid justify-items-end place-content-end">
          <h5 className="text-slate-800">Description</h5>
          <p className=" text-slate-500">DESCRIPTION</p>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner