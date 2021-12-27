import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="h-40 bg-slate-300 flex justify-around items-center">
      <div className="font-medium">Copyright © 2021 NTK Labs Inc.</div>
      <div className="text-lg ">
          <ul>
              <li>Phone: 0982311814</li>
              <li>Address: Pleiku / Gia Lai/ VietNam</li>
              <li>Email: kient2005@gmail.com</li>
          </ul>
      </div>
    </div>
  );
}

export default Footer;
