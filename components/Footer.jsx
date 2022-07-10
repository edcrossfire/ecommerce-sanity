import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" text-center mt-[20px] pt-[30px] pb-[15px] font-semibold flex flex-col justify-center items-center space-y-3">
      <p>2022 Shoe Store. All rights reserved.</p>
      <div className="flex space-x-3"><AiFillInstagram /><AiOutlineTwitter /></div>
    </div>
  )
}

export default Footer