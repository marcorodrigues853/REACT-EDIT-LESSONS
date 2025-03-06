import { useEffect, useState } from "react";
import CountriesList from "../../aula-3/CountryList";
import "./Countries.css";
import Card from "./Card";
import AddCountry from "./AddCountry";





function Countries() {
  const [listaPaises, setListaPaises] = useState([
   /* {
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
    },*/

    
  ]); 

  const fetchCountries = async ()=> {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const result = await response.json();
    setListaPaises(result);
   
   }

  useEffect(() => {
    fetchCountries();
  },[])

  const usaCountry = {
    name: "Usa",
    moeda: "usd",
    idioma: "English",
    numberOfHabitants: 51_000_000,
    bandeira: "https://flagcdn.com/w320/us.png",
    capital: "",
  };

  const [loading, setLoading] = useState(true);
  console.log("listaPaises", listaPaises);
  const [labelBotao, setLabelBotao] = useState("clicar aqui!!!");
  const [cor, setCor] = useState("royalblue");
  const [isDark, setIsDark] = useState(true);
  const [search, setSearch] = useState("");
//   const [name, setName] = useState("");
//   const [currency, setCurrency] = useState("");
//   const [language, setLanguage] = useState("");
//   const [population, setPopulation] = useState("");
//   const [flag, setFlag] = useState("");
//   const [capital, setCapital] = useState("");

  const [newCountry, setNewCountry] = useState({
    name: '',
    moeda: '',
    idioma:'',
    numberOfHabitants:'',
    bandeira:'',
    capital:''
  });

function eventCountry(event){
    setNewCountry({
        ...newCountry, [event.target.name]: event.target.value,
    });
}

  return (
    <div
      className="container"
      style={{ backgroundColor: isDark ? "#3333" : "white" }}
    >
      <h1 className="title">🌍 Lista de Países</h1>

      {/* Campo de Pesquisa */}
      <input
        type="text"
        placeholder="Search country..."
        className="search-input"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {/* GRELHA */}
      <div className="grid">
        {listaPaises
          .filter((pais) =>
            pais.name.common.toLowerCase().startsWith(search.toLowerCase())
          )
          .map((pais) => (
            <Card
              name={pais.name.common}
              bandeira={pais.flags.svg}
              capital= {pais.capital}
            //  idiomas={Object.values(pais?.languages)?.map(language => <p>{language}</p>)} //no funciona
            idiomas={pais.language?.eng || 'n/a'} 
            numberOfHabitants={pais.population}
      
            />
            // <div className="card" key={index}>
            //     <img className="flag" src={pais.bandeira} />
            //     <h2>{pais.name}</h2>
            //     <p>{pais.capital}</p>
            //     <p>
            //         <strong>IDIOMA:</strong> {pais.idioma}
            //     </p>
            //     <p>{pais.numberOfHabitants}</p>
            // </div>
          ))}
      </div>

      <div className="flex">
        <button onClick={() => setLabelBotao(Math.floor(Math.random() * 1000))}>
          {labelBotao}
        </button>
        <button onClick={() => setCor("yellow")}>mudar a cor {cor}</button>

        <button onClick={() => setIsDark((prev) => !prev)}>
          is dark ? {isDark ? "sim" : "nao"}
        </button>
        <button
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
          adiconar USA
        </button>
        <button
          onClick={() =>
            setListaPaises((prev) => [
              ...prev,
              {
                name: "Italy",
                moeda: "eur",
                idioma: "Italian",
                numberOfHabitants: 120_000,
                bandeira: "https://flagcdn.com/w320/it.png",
                capital: "Rome",
              },
            ])
          }
        >
          Add a country
        </button>
      </div>

      <form className="container form ">
        <input
          type="text"
          name="name"
          placeholder="Country Name"
          value={newCountry.name}
          onChange={eventCountry}
          required
        />
        <input
          type="text"
          name="moeda"
          placeholder="Currency"
          value={newCountry.currency}
          onChange={eventCountry}
          required
        />
        <input
          type="text"
          name="idioma"
          placeholder="Language"
          value={newCountry.language}
          onChange={eventCountry}
          required
        />
        <input
          type="number"
          name="numberOfHabitants"
          placeholder="Population"
          value={newCountry.population}
          onChange={eventCountry}
          required
        />
        <input
          type="text"
          name="bandeira"
          placeholder="Flag URL"
          value={newCountry.flag}
          onChange={eventCountry}
          required
        />
        <input
          type="text"
          name="capital"
          placeholder="Capital"
          value={newCountry.capital}
          onChange={eventCountry}

          required
        />
        <button
          onClick={(event) => {
            event.preventDefault();

            setListaPaises((prev) => [
              ...prev,
              
                // name: name,
                // moeda: currency,
                // idioma: language,
                // numberOfHabitants: population,
                // bandeira: flag,
                // capital: capital,
                newCountry
              ,
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
