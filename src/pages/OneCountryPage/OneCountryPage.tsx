import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Country } from "../../types/CountryInterface";
import * as C from "./OneCountryPageStyles";
import { api } from "../../apiConfig/apiConfig";
import CountryInfo from "../../components/CountryInfo/CountryInfo";

const OneCountryPage = () => {
  const { name } = useParams();

  const [country, setCountry] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    name && getCountry(name);
  }, [name]);

  const getCountry = async (name: string) => {
    let country = await api.getCountry(name);
    setCountry(country);
    setLoading(false);
  };

  console.log(country);
  return (
    <C.OneCountryPage>
      <Link to="/">Back</Link>
      {loading ? (
        <div className="loading-screen">Loading...</div>
      ) : (
        <CountryInfo nativeName={country[0].name.nativeName} officialName={country[0].name.official} population={country[0].population} region={country[0].region} subregion={country[0].subregion} capital={country[0].capital} tld={country[0].tld} currencyObject={country[0].currencies} languages={country[0].languages} flag={country[0].flags.png}/>
      )}
    </C.OneCountryPage>
  );
};

export default OneCountryPage;
