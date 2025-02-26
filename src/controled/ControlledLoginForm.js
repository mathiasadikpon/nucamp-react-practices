import { useState } from "react";
const initialValues = { username: "", password: "" };
const ControlledLoginForm = () => {
  const [formValues, updateFormValues] = useState(initialValues);
  const { username, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    updateFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={username}
          onChange={handleChange}
          name="username"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <input
          value={password}
          onChange={handleChange}
          name="password"
          placeholder="Enter your password"
        />
      </div>
      {username && password && <button type="submit">Login</button>}
    </form>
  );
};

export default ControlledLoginForm;
