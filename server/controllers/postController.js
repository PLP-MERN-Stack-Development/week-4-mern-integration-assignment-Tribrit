import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate("category");
  res.json(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id).populate("category");
  res.json(post);
};

export const createPost = async (req, res) => {
  const post = new Post(req.body);
  const saved = await post.save();
  res.status(201).json(saved);
};

export const updatePost = async (req, res) => {
  const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
};
