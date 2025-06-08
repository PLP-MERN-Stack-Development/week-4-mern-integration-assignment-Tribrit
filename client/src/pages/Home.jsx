import { useEffect, useState } from "react";
import { getPosts } from "../services/postService";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      {posts.map(post => (
        <div key={post._id}>
          <h2><Link to={`/post/${post._id}`}>{post.title}</Link></h2>
          <p>Category: {post.category?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
