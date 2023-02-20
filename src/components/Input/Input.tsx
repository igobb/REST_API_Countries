import * as C from "./InputStyles";
import { Input } from "../../types/InputInterface";

const Input = ({value, setSearchedCountry} : Input) => {

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedCountry(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement> ) => {
    setSearchedCountry(event.target.value)
  }

  return (
    <C.InputArea>
      <input type="text" placeholder="Search for a country..." value={value} onChange={handleSearchChange}/>
      <select onChange={handleFilterChange}>
        <option value="" >
          Filter by Region
        </option>
        <option value='Africa'>
          Africa
        </option>
        <option value='America'>
        America
        </option>
        <option value='Asia'>
        Asia
        </option>
        <option value='Europe'>
        Europe
        </option>
        <option value='Oceania'>
        Oceania
        </option>
      </select>
    </C.InputArea>
  );
};

export default Input;
