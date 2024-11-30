import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./cartSlice";
// import { remove } from "./store/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  

  const handleRemove = (cartid) => {
    dispatch(remove(cartid)); 
  };

  return (
    <div>
      <h1 className="lg:text-2xl sm:text-sm text-center pt-10 font-semibold">Add to cart</h1>
      
      {cartData.length === 0 ? (
        <p className="text-center mt-10">Your cart is empty!</p>
      ) : (
        cartData.map(({ imgSrc, description, oldPrice, id }) => (
          <div key={id}>
            <div className="sm:flex justify-between items-center border-2 lg:my-10 lg:mx-20 mx-6 bg-gray-100 shadow-md hover:shadow-lg">
              <div className="sm:flex items-center gap-10">
                <img src={imgSrc} alt="" className="w-28" />
                <h1 className="font-semibold mt-2">{description}</h1>
              </div>
              <p className="lg:font-medium sm:font-thin">{oldPrice}</p>
              <button
                className="border border-black py-1 mb-4  px-5 mr-4 sm:flex-wrap mt-3 text-sm font-semibold hover:bg-gray-600"
                onClick={() => handleRemove(id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
  
};

export default Cart;

