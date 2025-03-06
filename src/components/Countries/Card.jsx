import { useState } from "react";

function Card({ name, idiomas, numberOfHabitants, bandeira, capital }) {
  const [lightTheme, setTheme] = useState(true);
  return (
    <div className="card" style={{ backgroundColor: lightTheme ? 'white' : '#333' }}>
      <img className="flag" src={bandeira} />
      <h2>{name}</h2>
      <p><strong>Capital: </strong>{capital}</p>
      <p>
        <strong>Language: </strong> {idiomas}
      </p>
      <p><strong>Population: </strong>{numberOfHabitants}</p>
      <button onClick={() => setTheme(()=> !lightTheme)}>Click me!</button>
    </div>
  );
}

export default Card;
