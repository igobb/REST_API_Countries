import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Country } from "../../types/CountryInterface";
import { api } from "../../apiConfig/apiConfig";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "../../contexts/ThemeContext";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import ErrorComponent from "../../components/Error/ErrorComponent";

import * as C from "./OneCountryPageStyles";

const OneCountryPage = () => {
  const { state } = useForm();
  const { name, code } = useParams();
  const [country, setCountry] = useState<Country | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    name && getCountry(name);
    code && getCountryByCode(code);
    setLoading(false);
  }, [name, code]);

  const getCountry = async (name: string) => {
    const response = await api.getCountry(name);
    if (response.name === "AxiosError") {
      setError(response);
    } else {
      setCountry(response[0]);
    }
  };

  const getCountryByCode = async (code: string) => {
    const response = await api.getCountryByCode(code);
    if (response.name === "AxiosError") {
      setError(response);
    } else {
      setCountry(response[0]);
    }
  };

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <C.OneCountryPage theme={state.theme}>
      <div className="one-country__container">
        <Link className="country-page__link" to="/">
          <BsArrowLeft className="country-page__link-arrow" />
          Back
        </Link>
        {loading ? (
          <LoadingScreen />
        ) : (
          country && (
            <CountryInfo
              nativeName={country.name.nativeName}
              officialName={country.name.official}
              population={country.population}
              region={country.region}
              subregion={country.subregion}
              capital={country.capital}
              tld={country.tld}
              currencyObject={country.currencies}
              languages={country.languages}
              borders={country.borders}
              flag={country.flags.png}
            />
          )
        )}
      </div>
    </C.OneCountryPage>
  );
};

export default OneCountryPage;
