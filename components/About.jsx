import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="h-screen  flex relative" id="about" >
      <div className="absolute top-20 right-5 text-3xl flex flex-col gap-5 justify-center mt-40 font-bold">
        <div >
          Name: <span className="font-mono">NGUYEN TRUNG KIEN</span>
        </div>
        <div>
          Job: <span className="font-mono">Student</span>
        </div>
        <div>
            School: <span  className="font-mono" >University of Information Technology VNU-HCM</span> 
        </div>
      </div>
      <div className="absolute flex top-20 left-10">
        <Image src="/img1.svg" width={600} height={600} alt="" />
      </div>
    </div>
  );
}

export default About;
