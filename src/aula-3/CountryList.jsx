import { useState, useEffect } from 'react';
import './CountriesList.css'; // Importando o CSS

export default function CountriesList({ moeda = 'eur' }) {
    const [listaPaises, setListaPaises] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    // useEffect para buscar os dados ao carregar
    useEffect(() => {
        // Função assíncrona para buscar os países
        async function fetchCountries() {
            try {
                setLoading(true);

                const response = await fetch(
                    `https://restcountries.com/v3.1/all`
                );
                const countries = await response.json();
                console.log('countries', countries);
                setListaPaises(countries);
            } catch (error) {
                console.error('Erro ao buscar países:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchCountries();
    }, []);

    // Filtra os países com base no input do usuário
    const filteredCountries = listaPaises?.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <h1 className="title">🌍 Lista de Países</h1>

            <div className="chip-container">
                <div className="chip active">
                    <button>sadsa</button>
                </div>
                <div className="chip">
                    <a>asdsadsa</a>
                </div>
            </div>

            {/* Campo de Pesquisa */}
            <input
                type="text"
                placeholder="Buscar país..."
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Mostra um texto de carregamento enquanto os dados não chegam */}
            {loading ? (
                <p className="loading">Carregando países...</p>
            ) : (
                <div className="grid">
                    {filteredCountries.length &&
                        filteredCountries.map((country) => {
                            return (
                                <div key={country.cca3} className="card">
                                    <img
                                        src={country.flags.svg}
                                        alt={country.name.common}
                                        className="flag"
                                    />
                                    <h2>{country.name.common}</h2>
                                    <p>
                                        <strong>Capital:</strong>
                                        {country.capital?.[0] || 'N/A'}
                                    </p>
                                    <p>
                                        <strong>
                                            Languages for this country:
                                        </strong>
                                        <div>
                                            {country.languages
                                                ? Object.values(
                                                      country.languages
                                                  ).map((language) => (
                                                      <span key={language}>
                                                          {language}
                                                      </span>
                                                  ))
                                                : 'N/A'}
                                        </div>
                                    </p>
                                    <p>
                                        <strong>Região:</strong>{' '}
                                        {country.region}
                                    </p>
                                    <p>
                                        <strong>População:</strong>{' '}
                                        {country.population.toLocaleString()}
                                    </p>
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
}
