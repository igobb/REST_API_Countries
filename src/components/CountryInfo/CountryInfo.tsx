import React from "react";
import * as C from "./CountryInfoStyles";
import { SingleCountry } from "../../types/SingleCountry";

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
  flag,
}: SingleCountry) => {
  let currencyKey: Array<string> = [""];
  currencyObject ? (currencyKey = Object.keys(currencyObject)) : null;
  let languagesValue: Array<string> = [""];
  languages ? (languagesValue = Object.values(languages)) : null;
  let nativeNameKey: Array<string> = [""];
  nativeName ? (nativeNameKey = Object.keys(nativeName)) : null;

  console.log(nativeName);

  return (
    <C.CountryInfo>
      <div className="country__flag-img">
        <img src={`${flag}`} alt="" />
      </div>
      <div className="country__data">
        <div className="data__header">
          <h2>{officialName ? officialName : "No data"}</h2>
        </div>
        <div className="data__main-info">
          <div className="main-info__left">
            <p>
              Native name:{" "}
              {nativeName
                ? nativeNameKey.map((key, index, arr) => {
                    return (
                      <span key={index} style={{ marginLeft: "5px" }}>
                        {nativeName[key].official}
                        {arr.length > 1 && index < arr.length -1 ? ' |' : ''}
                      </span>
                    );
                  })
                : "No data"}
            </p>

            <p>Population: {population ? population : "No data"}</p>
            <p>Region: {region ? region : "No data"}</p>
            <p>Sub region: {subregion ? subregion : "No data"}</p>
            <p>
              Capital:{" "}
              {capital
                ? capital.map((oneCapital) => {
                    return oneCapital;
                  })
                : "No data"}
            </p>
          </div>
          <div className="main-info__right">
            <p>
              Top Level Domain:{" "}
              {tld
                ? tld.map((oneItem) => {
                    return oneItem;
                  })
                : "No data"}
            </p>
            <p>
              Currencies:{" "}
              {currencyObject
                ? currencyKey.map((shortCurrencyName, index, arr) => {
                    return (
                      <span key={index} style={{ marginLeft: "5px" }}>
                        {currencyObject[shortCurrencyName].name}
                        {arr.length > 1 && index < arr.length -1 ? ' |' : ''}
                      </span>
                    );
                  })
                : "No data"}
            </p>
            <p>
              Languages:{" "}
              {languages
                ? languagesValue.map((language, index, arr) => {
                    return (
                      <span key={index} style={{ marginLeft: "5px" }}>
                        {language}
                        {/* USUNIĘCIE | KIEDY JEST TYLKO JEDEN ELEMENT */}
                        {arr.length > 1 && index < arr.length -1 ? ' |' : ''}
                      </span>
                    );
                  })
                : "No data"}
            </p>
          </div>
        </div>
        <div className="data__borders"></div>
      </div>
    </C.CountryInfo>
  );
};

export default CountryInfo;
