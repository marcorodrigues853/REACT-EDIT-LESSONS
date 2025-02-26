import { useState, useEffect } from 'react';
import './CountriesList.css'; // Importando o CSS

export default function CountriesList({ moeda }) {
    const OldCountries = ['Portugal', 'Spain', 'France'];

    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    // Função assíncrona para buscar os países
    const fetchCountries = async () => {
        try {
            const response = await fetch(
                `https://restcountries.com/v3.1/currency/${moeda}`
            );
            const countries = await response.json();
            setCountries(countries);
        } catch (error) {
            console.error('Erro ao buscar países:', error);
        } finally {
            setLoading(false);
        }
    };

    // useEffect para buscar os dados ao carregar
    useEffect(() => {
        fetchCountries();
    }, []);

    // Filtra os países com base no input do usuário
    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <h1 className="title">🌍 Lista de Países</h1>

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
                    {filteredCountries.map((country) => (
                        <div key={country.cca3} className="card">
                            <img
                                src={country.flags.svg}
                                alt={country.name.common}
                                className="flag"
                            />
                            <h2>{country.name.common}</h2>
                            <p>
                                <strong>Capital:</strong>{' '}
                                {country.capital?.[0] || 'N/A'}
                            </p>
                            <p>
                                <strong>Região:</strong> {country.region}
                            </p>
                            <p>
                                <strong>População:</strong>{' '}
                                {country.population.toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
