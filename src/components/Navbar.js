import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>
      <Link to="/todos">Todos</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;