import React, { useState } from "react";
import { User } from "lucide-react";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Button = () => {
  const { isSideVisible, setIsSIteVisble } = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const totalItems = cartItems.length;

  return (
    <div className="flex gap-4 sm:py-8 py-4 pr-4 sm:pr-0">
      <User className="hidden sm:block" />
      <Search className="hidden sm:block" />
      <Heart className="hidden sm:block" />
      <Link to={"/cart"}>
        <span className="absolute font-bold bg-red-600 px-1 sm:right-9 right-5 sm:top-8">
          {totalItems}
        </span>
        <Lock />
      </Link>
    </div>
  );
};
export default Button;
