import { useState } from "react";
import { Link } from "react-router";

function CardCountriesTeste({ name, flag, capital, population }) {
  const [isSelected, setIsSelected] = useState(false);
console.log("name pais", name);
  return (
    <div style={{ display: "grid", gap: "12px" }}>
      <Link to={`/country/${name}`}>
        <div
          className="card"
          style={{ backgroundColor: isSelected ? "gray" : "white" }}
        >
          <img className="flag" src={flag} />
          <h2>{name}</h2>
          <p>
            <strong>Capital:</strong> {capital || "sem capital"}
          </p>
          <p></p>
          <p>
            <strong>Population: </strong>
            {population}
          </p>
        </div>
      </Link>
      <button
        className="btn-color"
        onClick={() => setIsSelected((prev) => !prev)}
      >
        clica-me e mudo de cor
      </button>
    </div>
  );
}

export default CardCountriesTeste;
