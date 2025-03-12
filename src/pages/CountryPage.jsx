import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardCountries from "../components/Countries/CardCountries";
import CountryCurrency from "./CountryCurrency";
import CardCountriesTeste from "../components/Countries/CardCountriesTeste";

function CountryPage() {
  const { name } = useParams();
  const [fetchCountry, setFetchCountry] = useState();
  const [currencyOfCountry, setCurrencyOfCountry] = useState();

  const countries = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const fetchCountry = await response.json();

    setFetchCountry(fetchCountry[0]);

    const currency = Object.keys(fetchCountry[0].currencies)[0];

    setCurrencyOfCountry(currency);

    console.log("currency", currency);
    console.log("paises", fetchCountry);
    console.log(
      "paises object kleys",
      Object.keys(fetchCountry[0].currencies)[0]
    );
  };
  useEffect(() => {
    countries();
  }, []);
  return (
    <div>
      <div>
        {fetchCountry && (
          <>
            <CardCountries country={fetchCountry} />
            <CardCountriesTeste
              name={fetchCountry.name.common}
              flag={fetchCountry.flags.png}
              capital={"suecia"}
              population={fetchCountry.population}
            />

            <h1>Paises da mesma moeda</h1>
            <section id="currency">
              <CountryCurrency currency={currencyOfCountry} />
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default CountryPage;
