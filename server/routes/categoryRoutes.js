import express from "express";
import Category from "../models/Category.js";


const router = express.Router();

// Get all categories
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// Create category
router.post("/", async (req, res) => {
  const category = new Category({ name: req.body.name });
  await category.save();
  res.status(201).json(category);
});

export default router;
