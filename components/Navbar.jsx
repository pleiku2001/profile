import React from "react";
import Link from 'next/link'

function Navbar() {
  return (
    <div className="bg-slate-300 flex h-17 font-mono ">
      <div className="flex w-24 ">
        <div className="w-12 ml-5 mt-2 ">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Tailwind CSS</title>
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
          </svg>
        </div>
      </div>
      <div className="flex-1 justify-center items-center flex flex-row  ">
        <Link href="/">
        <a href="#main" className="font-bold m-4 text-2xl text-gray-500 hover:text-black">Home</a>

        </Link>
        <a href="#about" className="text-2xl font-bold m-4 text-gray-500 hover:text-black">About</a>
        <a href="#product" className="text-2xl font-bold m-4 text-gray-500 hover:text-black">Product</a>
        <a href="#contact" className="text-2xl font-bold m-4 text-gray-500 hover:text-black">Contact</a>
      </div>
      {/* <div className="flex w-64 flex-row items-center justify-start mr-3">
        <a
          href="#"
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Sign in
        </a>
        <a
          href="#"
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Sign up
        </a>
      </div> */}
    </div>
  );
}

export default Navbar;
