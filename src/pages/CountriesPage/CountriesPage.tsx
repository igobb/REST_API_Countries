import { useEffect, useState } from "react";
import * as C from "./CountriesStyles";

import Input from "../../components/Input/Input";
import { api } from "../../apiConfig/apiConfig";
import { Countries } from "../../types/CountriesInterface";
import CountryCard from "../../components/CountryCard/CountryCard";

const CountriesPage = () => {
  //co lepsze - null czy pusta tablica?
  const [countriesData, setCountriesData] = useState<Array<Countries>>([]);
  const [loading, setLoadig] = useState<boolean>(true);
  // const [error, setError] = useState(null);
  const [searchedCountry, setSearchedCountry] = useState<string>('')

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    let countries = await api.getCountries();
    setCountriesData(countries);
    setLoadig(false);
  };

  const filteredCountries = countriesData.filter(country => country.name.official.toLowerCase().includes(searchedCountry.toLowerCase()) || country.region.toLowerCase().includes(searchedCountry.toLowerCase()))

  console.log(countriesData);
  console.log(searchedCountry);
  // country.name.official.includes(searchedCountry)
  return (
    <C.CountriesArea>
      <Input setSearchedCountry={setSearchedCountry} value={searchedCountry}/>
      {loading ? (
        <div className="loading-screen">Loading...</div>
      ) : (
        <div className="container__countries">
          {countriesData &&
            filteredCountries.map((country: Countries, index : number) => {
              return (
                <CountryCard
                  key={index}
                  name={country.name.official}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  flag={country.flags.png}
                />
              );
            })}
        </div>
      )}
    </C.CountriesArea>
  );
};

export default CountriesPage;
