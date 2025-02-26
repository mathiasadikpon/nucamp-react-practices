import { Button } from "bootstrap";
import { useState } from "react";

const ControlledForm = () => {
  const [inputValue, updateInputValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    updateInputValue(e.target.value);
  };
  return (
    <form>
      <input type="text" value={inputValue} onChange={handleChange} />
      {inputValue && <button type="submit">Submit</button>}
    </form>
  );
};

export default ControlledForm;
