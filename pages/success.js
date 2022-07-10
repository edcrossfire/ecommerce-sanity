import React, {useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className=" min-h-[60vh]">
        <div className="w-fit m-auto mt-[160px] p-[50px] rounded-lg flex flex-col items-center justify-center bg-slate-500">
            <p>
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your order!</h2>
            <p className="pb-4">Check your email inbox for the receipt.</p>
            <p className="text-center">If you have any questions, please email 
                <a href="mailto:hi@edcartwright.com"> hi@edcartwright.com</a>
            </p>
            <Link href="/">
                <button type="button" className="mt-14 p-3 rounded-xl w-full text-white bg-slate-800 shadow-xl">Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Success