import { useRouter } from "next/router";

// router is required for fallback: true
const Feaching = ({ post }) => {
  const router = useRouter();

  if (router.fallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <h1>Post page</h1> */}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
 
export default Feaching;

export const getStaticProps = async ({ params }) => {
   // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
};

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
};