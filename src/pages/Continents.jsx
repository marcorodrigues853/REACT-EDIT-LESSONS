import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardCountries from "../components/Countries/CardCountries";

function Continents() {
  const { continents } = useParams();
  const [fetchContinents, setFetchContinents] = useState();

  const countries = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${continents}`

    );
    console.log("continents", continents);
    const data = await response.json();
    setFetchContinents(data);

    console.log("continents", fetchContinents);
  };
  useEffect(() => {
    countries();
  }, [continents]);
  return <>
  {fetchContinents && 
    fetchContinents.map((country)=>
      (<CardCountries country={country} />))
  }
  </>;
}

export default Continents;
