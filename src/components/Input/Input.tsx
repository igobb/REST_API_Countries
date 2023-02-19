import * as C from "./InputStyles";

const Input = () => {
  return (
    <C.InputArea>
      <input type="text" placeholder="Search for a country..." />
      <select>
        <option value="Filter by Region" disabled selected>
          Filter by Region
        </option>
      </select>
    </C.InputArea>
  );
};

export default Input;
