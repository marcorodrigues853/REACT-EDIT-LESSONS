import { useEffect, useState } from "react";
import CardCountries from "../components/Countries/CardCountries";
import CardCountriesTeste from "../components/Countries/CardCountriesTeste";
import { perEnvironmentPlugin } from "vite";

function CountryCurrency({ currency }) {
  const [currencyPaises, setCurrencyPaises] = useState();

  console.log("currency dos paises", currencyPaises);
  const paises = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/currency/${currency}`
    );
    const data = await response.json();

    setCurrencyPaises(data);
  };

  useEffect(() => {
    paises();
  }, []);

  return (
    <div>
      {currencyPaises &&
        currencyPaises.map((country) => (
          <div>
            <CardCountries key={country.ccn3} country={country} />
            <CardCountriesTeste key={country.ccn3} 
                name= {country.name.common}
                flag= {country.flags}
                capital= {country.capital}
                population= {country.population}

             />
          </div>
        ))}
    </div>
  );
}

export default CountryCurrency;
