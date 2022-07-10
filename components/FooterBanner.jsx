import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner: {discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image} }) => {
  return (
    <div className=" bg-slate-300 grid mx-auto rounded-lg h-[400px] mt-[120px] w-full max-w-screen-xl relative pt-[100px] pb-[40px]">
      <div className="flex justify-between px-10">
        <div>
          <p>{discount}</p>
          <h3 className="text-6xl font-bold text-white">{largeText1}</h3>
          <h3 className="text-6xl font-bold text-white">{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div>
          <p>{smallText}</p>
          <h3 className="text-4xl font-bold text-slate-800">{midText}</h3>
          <p>{desc}</p>
          <Link href={` /product/${product} `}>
              <button className="mt-14 p-3 rounded-xl text-white bg-slate-800 shadow-xl" type="button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner