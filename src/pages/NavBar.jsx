import { Link } from "react-router";
import HomePage from "./HomePage";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="continents">
        <button>Continents</button>
      </Link>
    </nav>
  );
}

export default Navbar;
