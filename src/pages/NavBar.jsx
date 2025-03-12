import { Link } from "react-router";
import HomePage from "./HomePage";
import ButtonChildren from "../components/Children/ButtonChildren";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        margin: "10px",
      }}
    >
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="continents">
        <button>Continents</button>
      </Link>
      <ButtonChildren>
        <h1>Ola</h1>
      </ButtonChildren>
    </nav>
  );
}

export default Navbar;
