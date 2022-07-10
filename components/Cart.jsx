import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    const data = await response.json();
    toast.loading('Redirecting...');
    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="w-screen h-screen bg-slate-900/[0.8] fixed z-50 transition-all ease-in-out duration-100" ref={cartRef}>
      <div className="h-screen w-4/5 lg:w-[600px] bg-white float-right pt-[40px] pl-[20px] pb-[10px] relative">
        <button type="button" onClick={() => setShowCart(false)} className="flex items-center space-x-3">
          <AiOutlineLeft />
          <span>Your Cart</span>
          <span>({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="">
            <AiOutlineShopping size={150}/>
            <h3>Your shopping cart is empty.</h3>
            <Link href="/">
              <button type="button" className="mt-14 p-3 rounded-xl text-white bg-slate-800 shadow-xl" onClick={() => setShowCart(false)}>Continue Shopping</button>
            </Link>
          </div>
        )}

        <div className="mt-[15px] overflow-auto max-h-[70vh] pt-[20px] pb-[10px]">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div key={item._id} className="flex gap-[30px] p-[20px]">
                <img src={urlFor(item?.image[0])} className="w-[180px] h-[150px] rounded-lg object-cover" />
                <div className="flex flex-col justify-between w-[350px]">
                  <div className="">
                    <h5 className="font-semibold">{item.name}</h5>
                    <h4 className="font-semibold">${item.price}</h4>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                    <p className="flex items-center justify-evenly border w-full">
                        <div className="w-fit p-[8px] cursor-pointer" onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></div>
                        <div className="border-x px-5 w-fit p-[8px] cursor-pointer text-[20px]" onClick="">{item.quantity}</div>
                        <div className="w-fit p-[8px] cursor-pointer" onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></div>
                    </p>
                    </div>
                    <button type="button" onClick={() => onRemove(item)} className="text-[24px] cursor-pointer bg-transparent border-none"><TiDeleteOutline /></button>
                  </div>
                </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="absolute bottom-[12px] right-[5px] w-full pt-[30px] pb-[65px] px-5">
              <div className="flex justify-between">
                <h3 className="font-semibold">Subtotal:</h3>
                <h3 className="font-semibold">${totalPrice}</h3>
              </div>
              <div>
                <button type="button" className="mt-14 p-3 rounded-xl w-full text-white bg-slate-800 shadow-xl" onClick={handleCheckout}>Pay with Stripe</button>
              </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart