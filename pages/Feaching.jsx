import React from 'react'

function Feaching({ posts }) {
    return (
      <ul>
        {posts.map((post) => (
          <li key="" >{post.title}</li>
        ))}
      </ul>
    )
  }
export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return {
      props: { posts },
    };
  }
  export default Feaching