import { useState } from "react";

function Card({ pais }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className="card"
      style={{ backgroundColor: isSelected ? "gray" : "white" }}
    >
      <img className="flag" src={pais.bandeira} />
      <h2>{pais.name}</h2>
      <p>{pais.capital}</p>
      <p>
        <strong>IDIOMA:</strong> {pais.idioma}
      </p>
      <p>{pais.numberOfHabitants}</p>
      {/* <button className="btn-color" onClick={() => alert(`O meu país é: ${pais.name}`)}>
        clica-me
      </button> */}
      <button className="btn-color" onClick={() => setIsSelected(prev => !prev )} >
        clica-me
      </button>
    </div>
  );
}

export default Card;
