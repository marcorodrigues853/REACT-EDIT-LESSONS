import { useEffect, useState, useSyncExternalStore } from "react";
import CountriesList from "../../aula-3/CountryList";
import "./Countries.css";
import Card from "./Card";
import CardCountries from "./CardCountries";

function Countries() {
  const [listaPaises, setListaPaises] = useState([
    {
      name: "Portugal",
      moeda: "eur",
      idioma: "portugues",
      numberOfHabitants: 10_000_000,
      bandeira: "https://flagcdn.com/w320/pt.png",
      capital: "Lisboa",
    },
    {
      name: "Cuba",
      moeda: "cup",
      idioma: "espanol",
      numberOfHabitants: 11_000_000,
      bandeira: "https://flagcdn.com/w320/cu.png",
      capital: "Habana",
    },
    {
      name: "Spain",
      moeda: "eur",
      idioma: "espanol",
      numberOfHabitants: 51_000_000,
      bandeira: "https://flagcdn.com/w320/es.png",
      capital: "Madrid",
    },
  ]);
  const [search, setSearch] = useState("");

  const [nomePais, setNomePais] = useState("");
  const [currencyPais, setCurrencyPais] = useState("");
  const [idiomaPais, setIdiomaPais] = useState("");
  const [populationPais, setPopulationPais] = useState("");
  const [flagPais, setFlagPais] = useState("");
  const [capitalPais, setCapitalPais] = useState("");
  const [loading, setLoading] = useState(true);

  const [fetchCountries, setFetchCountries] = useState([]);

  const countries = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://restcountries.com/v3.1/all");
      const fetchCountries = await response.json();

      setFetchCountries(fetchCountries);
      console.log("Lista de paises:", fetchCountries);
    } catch (erro) {
      console.log("Erro ao carregar: ", erro);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    countries();
  },[]);

  const usaCountry = {
    name: "Usa",
    moeda: "usd",
    idioma: "English",
    numberOfHabitants: 51_000_000,
    bandeira: "https://flagcdn.com/w320/us.png",
    capital: "",
  };
  
  const [labelBotao, setLabelBotao] = useState("clicar aqui!!!");
  const [cor, setCor] = useState("lightgray");
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className="container"
      style={{ backgroundColor: isDark ? "#3333" : "lightblue" }}
    >
      <h1 className="title">🌍 Lista de Países</h1>
      {loading && <h2>Loading... {loading}</h2>}

      {/* Campo de Pesquisa */}
      <input
        type="text"
        placeholder="Buscar país..."
        className="search-input"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      {/* GRELHA */}
      <div className="grid" style={{ background: cor }}>
        {fetchCountries
          .filter((country) =>
            country.name.common.toLowerCase().startsWith(search.toLowerCase())
          )
          .map((country, index) => (
            <CardCountries country={country} key={index} />
          ))}
      </div>

      <div className="flex">
        <button
          className="btn-color"
          onClick={() => setLabelBotao(Math.floor(Math.random() * 1000))}
        >
          {labelBotao}
        </button>
        <button className="btn-color" onClick={() => setCor("yellow")}>
          mudar background
        </button>

        <button
          className="btn-color"
          onClick={() => setIsDark((prev) => !prev)}
        >
          is dark ? {isDark ? "sim" : "nao"}
        </button>
        <button
          className="btn-color"
          onClick={() =>
            setListaPaises((prev) => [
              ...prev,
              {
                name: "Usa",
                moeda: "usd",
                idioma: "English",
                numberOfHabitants: 51_000_000,
                bandeira: "https://flagcdn.com/w320/us.png",
                capital: "Washinton",
              },
            ])
          }
        >
          adicionar USA
        </button>
        <button
          className="btn-color"
          onClick={() => [
            setListaPaises((prev) => [
              ...prev,
              {
                name: "Brasil",
                moeda: "real",
                idioma: "portugues",
                numberOfHabitants: 99_000_000,
                bandeira: "https://flagcdn.com/w320/br.png",
                capital: "Brasilia",
              },
            ]),
          ]}
        >
          adicionar novo país
        </button>
      </div>
      <form className="container form ">
        <input
          type="text"
          name="name"
          placeholder="Country Name"
          value={nomePais}
          required
          onChange={(event) => {
            setNomePais(event.target.value);
          }}
        />
        <input
          type="text"
          name="moeda"
          placeholder="Currency"
          value={currencyPais}
          required
          onChange={(event) => {
            setCurrencyPais(event.target.value);
          }}
        />
        <input
          type="text"
          name="idioma"
          placeholder="Language"
          value={idiomaPais}
          required
          onChange={(event) => {
            setIdiomaPais(event.target.value);
          }}
        />
        <input
          type="number"
          name="numberOfHabitants"
          placeholder="Population"
          value={populationPais}
          required
          onChange={(event) => {
            setPopulationPais(event.target.value);
          }}
        />
        <input
          type="text"
          name="bandeira"
          placeholder="Flag URL"
          value={flagPais}
          required
          onChange={(event) => {
            setFlagPais(event.target.value);
          }}
        />
        <input
          type="text"
          name="capital"
          placeholder="Capital"
          value={capitalPais}
          required
          onChange={(event) => {
            setCapitalPais(event.target.value);
          }}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            setListaPaises((prev) => [
              ...prev,
              {
                name: nomePais,
                moeda: currencyPais,
                idioma: idiomaPais,
                numberOfHabitants: populationPais,
                bandeira: flagPais,
                capital: capitalPais,
              },
            ]);
          }}
        >
          Add Country
        </button>
      </form>
    </div>
  );
}

export default Countries;
