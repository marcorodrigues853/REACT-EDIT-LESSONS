import { useState } from 'react';

import './Countries.css';
import CountryCard from './CountryCard';
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
            name: 'Espanha',
            moeda: 'eur',
            idioma: 'espanol',
            numberOfHabitants: 51_000_000,
            bandeira: 'https://flagcdn.com/w320/es.png',
            capital: 'Madrid',
        },
        {
            name: 'Espanhalovaquia',
            moeda: 'eur',
            idioma: 'espanol',
            numberOfHabitants: 51_000_000,
            bandeira: 'https://flagcdn.com/w320/sl.png',
            capital: 'QUALQERT COISA',
        },
    ]);

    const [search, setSearch] = useState('');
    const [form, setForm] = useState({
        name: '',
        moeda: '',
        idioma: '',
        numberOfHabitants: '',
        bandeira: '',
        capital: '',
    });

    // USetate spor cada campo

    function handleChange(event) {
        console.log('event: ' + event.target.name + ': ' + event.target.value);

        const keyName = event.target.name;
        const value = event.target.value;
        setForm({
            ...form,
            // key (nome, ): value
            [keyName]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setListaPaises([
            ...listaPaises,
            { ...form, numberOfHabitants: Number(form.numberOfHabitants) },
        ]);
        setForm({
            name: '',
            moeda: '',
            idioma: '',
            numberOfHabitants: '',
            bandeira: '',
            capital: '',
        });
    };

    const [labelBotao, setLabelBotao] = useState('clicar aqui!!!');
    const [cor, setCor] = useState('royalblue');
    const [isDark, setIsDark] = useState(true);

    console.log('listaPaise', listaPaises);
    console.log('search', search);
    return (
        <div
            className="container"
            style={{ backgroundColor: isDark ? '#3333' : 'white' }}>
            <h1 className="title">🌍 Lista de Países</h1>

            {/* Campo de Pesquisa */}
            <div className="flex">
                <input
                    type="text"
                    placeholder="Search país..."
                    className="search-input"
                    value={search}
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                />
                <button>SEARCH</button>
            </div>
            {/* GRELHA */}
            <div className="grid">
                {listaPaises
                    // .filter((pais) => "Portugal" === "Portu")
                    .filter((pais) =>
                        pais.name
                            .toLocaleLowerCase()
                            .startsWith(search.toLocaleLowerCase())
                    )
                    .map((pais, index) => (
                        <CountryCard pais={pais} key={index} />
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
                    onClick={() => {
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
                        ]);
                    }}>
                    adiconar USA
                </button>
                <button
                    onClick={() =>
                        setListaPaises((prev) => [
                            ...prev,
                            {
                                name: 'Italy',
                                moeda: 'usd',
                                idioma: 'Italian',
                                numberOfHabitants: 51_000_000,
                                bandeira: 'https://flagcdn.com/w320/it.png',
                                capital: 'Milan',
                            },
                        ])
                    }>
                    adiconar ITALY
                </button>
            </div>

            <form onSubmit={handleSubmit} className="container form ">
                <input
                    type="text"
                    name="name"
                    placeholder="Country Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="moeda"
                    placeholder="Currency"
                    value={form.moeda}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="idioma"
                    placeholder="Language"
                    value={form.idioma}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="numberOfHabitants"
                    placeholder="Population"
                    value={form.numberOfHabitants}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="bandeira"
                    placeholder="Flag URL"
                    value={form.bandeira}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="capital"
                    placeholder="Capital"
                    value={form.capital}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Country</button>
            </form>
        </div>
    );
}

export default Countries;
