interface CountryInfoMainInterface {
    nativeName: {
        key: {
            official: string,
        }
    }
    population: number,
    region: string,
    subregion: string,
    capital: Array<string>,
    tld: Array<string>,
    languages: Array<string>
    currencyObject: {
        key: {
            name: string
        }
    }
}

const CountryInfoMain = ({
  nativeName,
  population,
  region,
  subregion,
  capital,
  tld,
  currencyObject,
  languages,
}:CountryInfoMainInterface) => {
  let currencyKey: Array<string> = [""];
  currencyObject ? (currencyKey = Object.keys(currencyObject)) : null;
  let languagesValue: Array<string> = [""];
  languages ? (languagesValue = Object.values(languages)) : null;
  let nativeNameKey: Array<string> = [""];
  nativeName ? (nativeNameKey = Object.keys(nativeName)) : null;
  return (
    <div className="data__main-info">
      <div className="main-info__left">
        <p>
          <span className="info-bold">Native name:</span>{" "}
          {nativeName
            ? nativeNameKey.map((key, index, arr) => {
                return (
                  <span key={index} style={{ marginLeft: "5px" }}>
                    {nativeName[key as keyof typeof nativeName].official}
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
                    {
                      currencyObject[
                        shortCurrencyName as keyof typeof currencyObject
                      ].name
                    }
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
  );
};

export default CountryInfoMain;
