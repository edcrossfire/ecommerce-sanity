import React from "react";
import Link from "next/link";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="grid my-5 w-full">
      <div className="p-10 lg:px-20 flex justify-end h-80 surface-base rounded-xl shadow-md bg-[url('../public/images/hero-shoes.jpg')] bg-cover bg-center bg-blend-normal">
        <div className="text-right">
          <h4 className="">Discover</h4>
          <p className="mb-4">The most unique shoes.</p>
          <Link href={ ` /product/mens-shoes-1 ` }>
              <button className="primary-button" type="button">Shop Now</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner