import React from 'react';
import { useForm } from "../../contexts/ThemeContext";
import { Input } from "../../types/InputInterface";

import * as C from "./InputStyles";

const Input = ({value, setSearchedCountry, setSearchedContinent} : Input) => {
  const {state} = useForm()

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedCountry(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement> ) => {
    setSearchedContinent(event.target.value)
  }

  return (
    <C.InputArea theme={state.theme}>
      <input type="text" placeholder="&#x1F50E;&#xFE0E; Search for a country..." value={value} onChange={handleSearchChange}/>
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
