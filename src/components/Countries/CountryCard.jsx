import { useState } from 'react';

function CountryCard({ pais }) {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <div
            className="card"
            style={{ backgroundColor: isSelected ? 'gray' : 'white' }}>
            <img className="flag" src={pais.bandeira} />
            <h2>{pais.name}</h2>
            <p onClick={() => setIsSelected((antes) => !antes)}>
                {pais.capital}
            </p>
            <p>
                <strong>IDIOMA:</strong> {pais.idioma}
            </p>
            <p>{pais.numberOfHabitants}</p>

            <button
                className="button"
                onClick={() => setIsSelected((antes) => !antes)}>
                clicke me
            </button>
            <button
                className="button"
                onClick={() => setIsSelected((antes) => !antes)}>
                clicke me2
            </button>
        </div>
    );
}

export default CountryCard;
