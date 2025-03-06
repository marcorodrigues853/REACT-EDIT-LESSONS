import { useState } from "react";

function CardCountries({ country }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className="card"
      style={{ backgroundColor: isSelected ? "gray" : "white" }}
    >
      <img className="flag" src={country.flags.png} />
      <h2>{country.name.common}</h2>
      {/* <p>{country.capital[0]}</p> */}
      {/* <pre>JSON.stringify{(country.languages)}</pre> */}
      <p>
        <strong>Languages:</strong>
        {country.languages ? (
          Object.values(country.languages).map((language) => (
            <span key={language}> {language} - </span>
          ))
        ) : (
          <span>sem informações</span>
        )}
      </p>
      <p>
        <strong>Population: </strong>
        {country.population}
      </p>
      {/* <button className="btn-color" onClick={() => alert(`O meu país é: ${pais.name}`)}>
        clica-me
      </button> */}
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
