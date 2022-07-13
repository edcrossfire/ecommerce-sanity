import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="flex justify-between mb-[18px] relative">
      <h3 className="cursor-pointer pl-4 pt-4">
        <Link href="/">Shoe Store</Link>
      </h3>

      <button type="button" onClick={() => setShowCart(true)} className="pr-4 pt-4">
        <AiOutlineShopping className="primary-base-fill text-[25px] cursor-pointer relative transition-transform ease-in-out duration-300 hover:transform hover:scale-105"/>
        <span className=" absolute text-[10px] primary-subdued-bg on-primary-text rounded-full w-[16px] h-[16px] text-center font-semibold top-[13px]">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar