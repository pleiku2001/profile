import { useRouter } from "next/router";
import Image from "next/image";


export const getStaticProps = async ({ params }) => {
    const res = await fetch('http://localhost:3000/api/hello')
    const posts = await res.json()
    const playlistList = posts.filter((p) => p.id.toString() === params.id);
    return {
      props: {
        post: playlistList[0],
      },
    };
  };
  

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/hello')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
};

const Product = ({ post }) => {
    const router = useRouter();
  
    if (router.fallback) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="h-[490px] ">
          <h1 className="flex justify-center mt-2 font-bold font-mono text-2xl" >{post.name}</h1>
          <div className="flex justify-center mt-10">

          <Image src={post.source} alt="" width={300} height={300}/>
          </div>
      </div>
    );
  };
   
  export default Product;
 