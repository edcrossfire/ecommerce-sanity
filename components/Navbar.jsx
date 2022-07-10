import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="flex justify-between mb-[18px] relative">
      <p className="cursor-pointer pl-4 pt-4">
        <Link href="/">Shoe Store</Link>
      </p>

      <button type="button" onClick={() => setShowCart(true)} className="pr-4 pt-4">
        <AiOutlineShopping className="fill-slate-700 text-[25px] cursor-pointer relative transition-transform ease-in-out duration-300 hover:transform hover:scale-105"/>
        <span className=" absolute text-[10px] text-white bg-slate-600 rounded-full w-[16px] h-[16px] text-center font-semibold top-[10px]">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar