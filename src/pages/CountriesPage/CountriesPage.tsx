import { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { api } from "../../apiConfig/apiConfig";
import { Countries } from "../../types/CountriesInterface";
import CountryCard from "../../components/CountryCard/CountryCard";
import { useForm } from "../../contexts/ThemeContext";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import ErrorComponent from "../../components/Error/ErrorComponent";

import * as C from "./CountriesStyles";


const CountriesPage = () => {
  const { state } = useForm();

  const [countriesData, setCountriesData] = useState<Array<Countries>>([]);
  const [error, setError] = useState(null);
  const [loading, setLoadig] = useState<boolean>(true);
  const [searchedCountry, setSearchedCountry] = useState<string>("");
  const [searchedContinent, setSearchedContinent] = useState<string>("");

  useEffect(() => {
    getCountries();
    setLoadig(false);
  }, []);

  const getCountries = async () => {
    const response = await api.getCountries();
    if (response.name === "AxiosError") {
      setError(response);
    } else {
      setCountriesData(response);
    }
  };

  const filteredContinent = countriesData.filter((country) =>
    country.region.toLowerCase().includes(searchedContinent.toLowerCase())
  );
  const filteredCountries = filteredContinent.filter((country) =>
    country.name.official.toLowerCase().includes(searchedCountry.toLowerCase())
  );

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <C.CountriesArea theme={state.theme}>
      <Input
        setSearchedCountry={setSearchedCountry}
        setSearchedContinent={setSearchedContinent}
        value={searchedCountry}
      />
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="container__countries">
          {countriesData &&
            filteredCountries.map((country: Countries, index: number) => {
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
