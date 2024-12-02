import React from "react";
import { X } from 'lucide-react';

function Sidenav({ isOpen, close }) {
  return (
    <div className={`fixed z-50  ml-4  left-0 -top-1 bottom-0 w-[300px] bg-white ${isOpen ?"translate-x-0"  : "-translate-x-full"} transition-transform`}>
      <div className="mt-3">
      <div className="flex justify-between">
        <img className="w-24 h-auto ml-4" src="../../public/images/logo.png" alt="" />
        <X className="bg-slate-300 mr-6" onClick={close} />
      </div>
      <div className=" mt-3 ml-4">
        <ul>
          <h1 className="text-lg font-bold mb-3">Main menu</h1>
          <li className="mb-3">HOME</li>
          <li className="mb-3">MEN</li>
          <li className="mb-3">WOMEN</li>
          <li className="mb-3">OUTWEAR</li>
          <li className="mb-3">BLOG</li>
          <li className="mb-3">CONTACTS</li>
          </ul>
          </div>
        
        <div  className=" mt-3 ml-4 ">
            <ul>
              <h1 className="text-lg font-bold mb-3">Catgriese</h1>
          <li className="mb-3">Kids</li>
          <li className="mb-3">Baby</li>
          <li className="mb-3">Shoes</li>
          <li className="mb-3">Bag</li>
          <li className="mb-3">Men</li>
          <li className="mb-3">Women</li>
          
          <li className="mb-3">Accessrise</li>
          <li className="mb-3">Watches</li>
          <li className="mb-3">Trouser</li>
          <li className="mb-3">T-Shirts</li>
          <li className="mb-3">Wallets</li>
          <li className="mb-3">Belts</li>
           </ul>
          </div>
      
    </div>
    </div>
  );
}

export default Sidenav;
