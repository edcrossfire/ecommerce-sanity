import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price }}) => {
  return (
    <div className="pt-8 px-4 cursor-pointer">
      <Link href={` /product/${slug.current} `}>
        <div className="">
          <img src={urlFor(image && image[0])} className="w-[225px] h-[225px] object-cover rounded-lg scale-100 hover:scale-105 transition ease duration-300" />
          <p>{name}</p>
          <p className="font-semibold">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product