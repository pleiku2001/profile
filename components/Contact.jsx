import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div className="h-screen  flex justify-around items-center " id="contact">
      <div className=" flex ">
        <Image alt="" src="/img10.svg" width={400} height={400} />
      </div>
      <div className="bg-blue-400 flex items-center font-mono w-1/3 h-2/5 justify-center rounded-md">
        <form action="">
          <div>
            <label htmlFor="">Email: </label>
            <input type="email" className="w-60" />
          </div>
          <div className="mt-3 flex">
            <label htmlFor="">Text: </label>
            <textarea type="text" className="w-60 h-20 ml-4" />
          </div>
          <div className="flex justify-center my-4">
            <button className="bg-red-700 p-2 w-20 hover:text-black hover:bg-white rounded-md text-white"> Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
