import React from "react";

function Container12sl() {
  return (
    <div className="lg:flex justify-between ml-4 flex-wrap lg:ml-12 mr-12 mt-8 py-14">
      <div className="text-sm">
        <img
          className="w-40 h-10 mb-4"
          src="/public/images/logo-300x67clotya.webp"
          alt=""
        />
        <p>Quis ipsum suspendisse ultrices gravida.</p>
        <h1>Risus commodo viverra maecenas</h1>
        <h2> accumsan lacus vel facilisis in termapol.</h2>
        <h2 className="mt-3">(+800) 1234 5678 90 – info@example.com</h2>
      </div>

      <div>
        <h1 className="text-xl font-semibold mb-3">Information</h1>

        <ul>
          <li>About us</li>
          <li>Privacy Policy</li>
          <li>Return Policy</li>
          <li>Shipping Policy</li>
          <li>Dropshipping</li>
        </ul>
      </div>

      <div>
        <h1 className="text-xl font-semibold mb-3">Account</h1>
        <ul className="list-none">
          <li>Dashbord</li>
          <li>My Orders</li>
          <li>Wishlist</li>
          <li>Account details</li>
          <li>Track My Orders</li>
        </ul>
      </div>

      <div>
        <h1 className="text-xl font-semibold mb-3">Shop</h1>
        <ul className="list-none">
          <li>Affilate</li>
          <li>Bestseller</li>
          <li>Discount</li>
          <li>Late Products</li>
          <li>Sale Products</li>
        </ul>
      </div>

      <div>
        <h1 className="text-xl font-semibold mb-3">Categories</h1>
        <ul className="list-none">
          <li>Men</li>
          <li>Women</li>
          <li>Outwears</li>
          <li>Bags</li>
          <li>Shoes</li>
        </ul>
      </div>
    </div>
  );
}

export default Container12sl;
