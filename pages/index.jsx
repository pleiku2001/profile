import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Product from "../components/Product";
import styles from "../styles/Home.module.css";


function Home({ posts }) {
 
    return (
      <div className="">
        <Head>
          <title>Tailwind_MuiUI_App</title>
          <meta name="description" content="Create App by Tailwind + MuiMaterial" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Main/>
        <About/>
        <Product posts={posts}/>
        <Contact/>
      </div>
    );
  
}



export async function getStaticProps() {

  
    const res = await fetch("http://localhost:3000/api/hello");
    const posts = await res.json();
    return {
      props: { posts },
    };
  }

export default Home

