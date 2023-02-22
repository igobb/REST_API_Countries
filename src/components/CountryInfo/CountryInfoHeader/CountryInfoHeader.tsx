interface officialNameInterface {
    officialName: string
}

const CountryInfoHeader = ({officialName}:officialNameInterface) => {
  return (
    <div className="data__header">
      <h2>{officialName ? officialName : "No data"}</h2>
    </div>
  );
};

export default CountryInfoHeader;
