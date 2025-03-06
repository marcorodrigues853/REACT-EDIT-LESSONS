import { useState } from "react";
import { Link } from "react-router";

function CardCountries({ country }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div style={{ display: "grid", gap: "12px" }}>
      <Link to={`/country/${country.name.common}`}>
        <div
          className="card"
          style={{ backgroundColor: isSelected ? "gray" : "white" }}
        >
          <img className="flag" src={country.flags.png} />
          <h2>{country.name.common}</h2>
          <p>
            <strong>Country:</strong> {country.capital?.[0] || "sem capital"}
          </p>
          {/* <pre>JSON.stringify{(country.languages)}</pre> */}
          <p>
            <strong>Languages:</strong>
            {country.languages ? (
              <span>{Object.values(country.languages).join(", ")}</span>
            ) : (
              <span>sem informações</span>
            )}
          </p>
          <p>
            <strong>Population: </strong>
            {country.population}
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

export default CardCountries;
