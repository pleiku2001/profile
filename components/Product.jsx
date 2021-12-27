import Image from "next/image";
import React from "react";

import Link from "next/link";

function Product({ posts }) {
  return (
    <div id="product">
      <div className="font-mono font-bold text-5xl flex justify-center mt-5">
        Product
      </div>
      <div className="h-screen grid grid-cols-3 gap-10 m-5 my-10 ">
        {posts.map((post) => (
          <Link href={`/product/${encodeURIComponent(post.id)}`} key={post.id} passHref >
            <div className="bg-slate-400 rounded-lg flex justify-center items-center hover:bg-gray-600 cursor-pointer">
              <div >
                <Image src={post.source} alt="" width={300} height={300} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Product;
