import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner: {discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image} }) => {
  return (
    <div className="surface-base shadow-md grid rounded-xl h-[400px] mt-[120px] w-full relative pt-[100px] pb-[40px]">
      <div className="flex justify-between px-10">
        <div>
          <p>{discount}</p>
          <h3 className="">{largeText1}</h3>
          <h3 className="">{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div>
          <p>{smallText}</p>
          <h4 className="">{midText}</h4>
          <p className="mb-14">{desc}</p>
          <Link href={` /product/${product} `}>
              <button className="primary-button" type="button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner