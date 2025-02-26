import { useState } from 'react';
import CountriesList from '../../aula-3/CountryList';
import './Countries.css';
function Countries() {
    const [listaPaises, setListaPaises] = useState([
        {
            name: 'Portugal',
            moeda: 'eur',
            idioma: 'portugues',
            numberOfHabitants: 10_000_000,
            bandeira: 'https://flagcdn.com/w320/pt.png',
            capital: 'Lisboa',
        },
        {
            name: 'Cuba',
            moeda: 'cup',
            idioma: 'espanol',
            numberOfHabitants: 11_000_000,
            bandeira: 'https://flagcdn.com/w320/cu.png',
            capital: 'Habana',
        },
        {
            name: 'Spain',
            moeda: 'eur',
            idioma: 'espanol',
            numberOfHabitants: 51_000_000,
            bandeira: 'https://flagcdn.com/w320/es.png',
            capital: 'Madrid',
        },
    ]);

    const usaCountry = {
        name: 'Usa',
        moeda: 'usd',
        idioma: 'English',
        numberOfHabitants: 51_000_000,
        bandeira: 'https://flagcdn.com/w320/us.png',
        capital: '',
    };

    console.log('listaPaises', listaPaises);
    const [labelBotao, setLabelBotao] = useState('clicar aqui!!!');
    const [cor, setCor] = useState('royalblue');
    const [isDark, setIsDark] = useState(true);

    return (
        <div
            className="container"
            style={{ backgroundColor: isDark ? '#3333' : 'white' }}>
            <h1 className="title">🌍 Lista de Países</h1>

            {/* Campo de Pesquisa */}
            <input
                type="text"
                placeholder="Buscar país..."
                className="search-input"
                value={'ola'}
            />

            {/* GRELHA */}
            <div className="grid">
                {listaPaises.map((pais, index) => (
                    <div className="card" key={index}>
                        <img className="flag" src={pais.bandeira} />
                        <h2>{pais.name}</h2>
                        <p>{pais.capital}</p>
                        <p>
                            <strong>IDIOMA:</strong> {pais.idioma}
                        </p>
                        <p>{pais.numberOfHabitants}</p>
                    </div>
                ))}
            </div>

            <div className="flex">
                <button
                    onClick={() =>
                        setLabelBotao(Math.floor(Math.random() * 1000))
                    }>
                    {labelBotao}
                </button>
                <button onClick={() => setCor('yellow')}>
                    mudar a cor {cor}
                </button>

                <button onClick={() => setIsDark((prev) => !prev)}>
                    is dark ? {isDark ? 'sim' : 'nao'}
                </button>
                <button
                    onClick={() =>
                        setListaPaises((prev) => [
                            ...prev,
                            {
                                name: 'Usa',
                                moeda: 'usd',
                                idioma: 'English',
                                numberOfHabitants: 51_000_000,
                                bandeira: 'https://flagcdn.com/w320/us.png',
                                capital: 'Washinton',
                            },
                        ])
                    }>
                    adiconar USA
                </button>
            </div>
        </div>
    );
}

export default Countries;
