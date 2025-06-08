import mongoose from "mongoose";
import Category from "./models/Category.js";

// Connect to the same database as the app
mongoose.connect("mongodb://localhost:27017/mern_blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const categories = [
  { name: "Tech" },
  { name: "Sports" },
  { name: "Health" },
];

async function seed() {
  try {
    await Category.deleteMany({});
    await Category.insertMany(categories);
    console.log("✅ Categories seeded");
    mongoose.disconnect();
  } catch (error) {
    console.error("❌ Error seeding categories:", error);
  }
}

seed();
