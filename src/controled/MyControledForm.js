import { useState } from "react";

const ControlledForm = () =>{
const [inputValue, updateInputValue] = useState('');

return (<form>
    <input type="text" value={inputValue} onClick={""} />
</form>);

};

export default ControlledForm;