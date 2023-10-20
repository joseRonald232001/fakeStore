import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiShoppingBag } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <header className=" w-full  ">
        <nav className="w-full h-[100px] z-20 bg-light-blue fixed flex items-center justify-between px-2 font-bold shadow">
          <h1>fakeStore</h1>
          <div className="flex gap-5 ">
            <BiShoppingBag />
            <AiOutlineHeart />
            <CgProfile />
            <AiOutlineMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
