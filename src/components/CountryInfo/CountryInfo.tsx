import React from "react";
import { SingleCountry } from "../../types/SingleCountry";
import { Link } from "react-router-dom";
import { useForm } from "../../contexts/ThemeContext";

import * as C from "./CountryInfoStyles";
import CountryInfoHeader from "./CountryInfoHeader/CountryInfoHeader";
import CountryInfoMain from "./CountryInfoMain/CountryInfoMain";
import CountryInfoBorders from "./CountryInfoBorders/CountryInfoBorders";


const CountryInfo = ({
  nativeName,
  officialName,
  capital,
  currencyObject,
  languages,
  population,
  region,
  subregion,
  tld,
  borders,
  flag,
}: SingleCountry) => {
  const { state } = useForm();




  return (
    <C.CountryInfo theme={state.theme}>
      <div className="country__flag-img">
        <img src={`${flag}`} alt="" />
      </div>
      <div className="country__data">
        <div className="main-data">
          <CountryInfoHeader officialName={officialName}/>
          <CountryInfoMain capital={capital} currencyObject={currencyObject} languages={languages} nativeName={nativeName} population={population} region={region} subregion={subregion} tld={tld}/>
        </div>
        <div className="borders-data">
         <CountryInfoBorders borders={borders}/>
        </div>
      </div>
    </C.CountryInfo>
  );
};

export default CountryInfo;
