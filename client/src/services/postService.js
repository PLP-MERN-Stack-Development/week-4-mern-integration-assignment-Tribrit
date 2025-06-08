import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

export const getPosts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getPost = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const createPost = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};
