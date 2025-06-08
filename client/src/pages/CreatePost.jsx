import { useEffect, useState } from "react";
import { createPost } from "../services/postService";
import { getCategories } from "../services/categoryService";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ title, content, category });
    navigate("/");
  };

  return (
    <div>
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        <br />
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
        <br />
        <select value={category} onChange={e => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          {categories.map(c => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePost;
