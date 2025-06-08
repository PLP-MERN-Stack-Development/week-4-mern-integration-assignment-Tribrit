import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPost } from "../services/postService";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id).then(setPost);
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Category: {post.category?.name}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
