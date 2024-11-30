import { Heart, Menu, Search, ShoppingBag, UserRoundCheck } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidenav from "./Sidenav";

function Navbar() {
  const items = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className=" py-10 flex justify-between  px-10  ">
        <div className="flex">
          <div className="flex gap-6">
            
            <Menu onClick={() => setIsOpen(true)} />
            <img
              className="w-32 flex justify-center lg:block"
              src="../../public/images/logo.png"
              alt=""
            />
          </div>
          <div className="hidden lg:block ">
            <ul className="flex   gap-5 px-10 font-medium text-lg">
              <li>HOME</li>
              <li>SHOP</li>
              <li>WOMEN</li>
              <li>MEN</li>
              <li>OUTWEAR</li>
              <li>BLOG</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-3">
          <UserRoundCheck className="hidden lg:block" />
          <Search className="hidden lg:block" />
          <Heart className="hidden lg:block" />
          <div className="relative justify-center pt-1">
            <Link to="/cart">
              <ShoppingBag />
              <span className="cartCount size-5 justify-center  -top-3 -right-2 absolute p-1 text-sm rounded-full bg-red-700 text-white">
                {items.length}
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Sidenav isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
}

export default Navbar;
