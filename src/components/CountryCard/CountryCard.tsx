import * as C from "./CountryCardStyles";
import { CountryCard } from "../../types/CountryCardInterface";
import { Link } from "react-router-dom";

const CountryCard = ({
  name,
  population,
  region,
  capital,
  flag,
}: CountryCard) => {
  return (
    <C.CountryCard>
      <Link to={`/country/${name}`}>
        <div className="country__img">
          <img src={flag} alt={`Flag of ${name}`} />
        </div>
        <div className="country__data">
          <h1 className="country--name">{name}</h1>
          <p>
            <span>Population: </span>
            {population
              .toString()
              .replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,")}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Capital: </span>
            {capital}
          </p>
        </div>
      </Link>
    </C.CountryCard>
  );
};

export default CountryCard;
