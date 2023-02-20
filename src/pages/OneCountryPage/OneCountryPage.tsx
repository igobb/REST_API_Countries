import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Country } from "../../types/CountryInterface";
import * as C from "./OneCountryPageStyles";
import { api } from "../../apiConfig/apiConfig";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
import { BsArrowLeft } from "react-icons/bs";

const OneCountryPage = () => {
  const { name, code } = useParams();

  const [country, setCountry] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    name && getCountry(name);
    code && getCountryByCode(code);
  }, [name, code]);

  const getCountry = async (name: string) => {
    let country = await api.getCountry(name);
    setCountry(country);
    setLoading(false);
  };

  const getCountryByCode = async(code: string) => {
    let country = await api.getCountryByCode(code);
    setCountry(country);
    setLoading(false);
  }

  console.log(country);
  return (
    <C.OneCountryPage>
      <Link className="country-page__link" to="/"><BsArrowLeft className="country-page__link-arrow"/>Back</Link>
      {loading ? (
        <div className="loading-screen">Loading...</div>
      ) : (
        <CountryInfo nativeName={country[0].name.nativeName} officialName={country[0].name.official} population={country[0].population} region={country[0].region} subregion={country[0].subregion} capital={country[0].capital} tld={country[0].tld} currencyObject={country[0].currencies} languages={country[0].languages} borders={country[0].borders} flag={country[0].flags.png}/>
      )}
    </C.OneCountryPage>
  );
};

export default OneCountryPage;
