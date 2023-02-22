import { Link } from "react-router-dom";

interface CountryInfoBordersInterface {
    borders: Array<string>
}

const CountryInfoBorders = ({borders}:CountryInfoBordersInterface) => {
  return (
    <>
      <span className="info-bold">Border Countries:</span>
      <div className="data__borders">
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
    </>
  );
};

export default CountryInfoBorders;
