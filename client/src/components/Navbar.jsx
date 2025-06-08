import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
    <Link to="/" style={{ marginRight: "20px", color: "#fff" }}>Home</Link>
    <Link to="/create" style={{ color: "#fff" }}>Create Post</Link>
  </nav>
);

export default Navbar;
