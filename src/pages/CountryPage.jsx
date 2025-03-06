import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardCountries from "../components/Countries/CardCountries";

function CountryPage() {
  let params = useParams();
  const [fetchCountry, setFetchCountry] = useState();

  const countries = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${params.name}`
    );
    const fetchCountry = await response.json();
    setFetchCountry(fetchCountry[0]);
    console.log("countries,", fetchCountry[0]);
  };
  useEffect(() => {
    countries();
  }, []);
  return <div>{fetchCountry && <CardCountries country={fetchCountry}/>}</div>;
}

export default CountryPage;
