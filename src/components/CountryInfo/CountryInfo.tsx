import React from "react";
import * as C from "./CountryInfoStyles";
import { SingleCountry } from "../../types/SingleCountry";
import { Link } from "react-router-dom";

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
        <div className="main-data">
          <div className="data__header">
            <h2>{officialName ? officialName : "No data"}</h2>
          </div>
          <div className="data__main-info">
            <div className="main-info__left">
              <p>
                <span className="info-bold">Native name:</span>{" "}
                {nativeName
                  ? nativeNameKey.map((key, index, arr) => {
                      return (
                        <span key={index} style={{ marginLeft: "5px" }}>
                          {nativeName[key].official}
                          {arr.length > 1 && index < arr.length - 1 ? " |" : ""}
                        </span>
                      );
                    })
                  : "No data"}
              </p>

              <p>
                <span className="info-bold">Population:</span>{" "}
                {population
                  ? population
                      .toString()
                      .replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,")
                  : "No data"}
              </p>
              <p>
                <span className="info-bold">Region:</span>{" "}
                {region ? region : "No data"}
              </p>
              <p>
                <span className="info-bold">Sub region:</span>{" "}
                {subregion ? subregion : "No data"}
              </p>
              <p>
                <span className="info-bold">Capital:</span>{" "}
                {capital
                  ? capital.map((oneCapital) => {
                      return oneCapital;
                    })
                  : "No data"}
              </p>
            </div>
            <div className="main-info__right">
              <p>
                <span className="info-bold">Top Level Domain:</span>{" "}
                {tld
                  ? tld.map((oneItem) => {
                      return oneItem;
                    })
                  : "No data"}
              </p>
              <p>
                <span className="info-bold">Currencies:</span>{" "}
                {currencyObject
                  ? currencyKey.map((shortCurrencyName, index, arr) => {
                      return (
                        <span key={index} style={{ marginLeft: "5px" }}>
                          {currencyObject[shortCurrencyName].name}
                          {arr.length > 1 && index < arr.length - 1 ? " |" : ""}
                        </span>
                      );
                    })
                  : "No data"}
              </p>
              <p>
                <span className="info-bold">Languages:</span>{" "}
                {languages
                  ? languagesValue.map((language, index, arr) => {
                      return (
                        <span key={index} style={{ marginLeft: "5px" }}>
                          {language}
                          {/* USUNIĘCIE | KIEDY JEST TYLKO JEDEN ELEMENT */}
                          {arr.length > 1 && index < arr.length - 1 ? " |" : ""}
                        </span>
                      );
                    })
                  : "No data"}
              </p>
            </div>
          </div>
        </div>
        <div className="borders-data">
          <div className="data__borders">
            <span className="info-bold">Border Countries:</span>
            {borders ? (
              borders.map((borderingCountry, index) => {
                return (
                  <Link
                    to={`/code/${borderingCountry}`}
                    key={index}
                    className="data__borders--country-container"
                  >
                    <p>{borderingCountry}</p>
                  </Link>
                );
              })
            ) : (
              <div className="data__borders--no-borders">
                <p>This country has no borders</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </C.CountryInfo>
  );
};

export default CountryInfo;
