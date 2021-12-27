import React from "react";
import Image from "next/image";
function Main() {
  return (
    <div className="w-full h-screen bg-ero-pattern bg-cover bg-center relative  my-10  overflow-x-hidden" id="main">
      <Image
        src="https://cdn.pixabay.com/photo/2021/12/12/17/40/mountains-6865680_960_720.jpg"
        layout="fill"
        alt=""
        className="flex object-contain"
      ></Image>
    </div>
  );
}

export default Main;
