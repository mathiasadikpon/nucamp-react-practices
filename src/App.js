import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import UsingRef from "./uncontroled/UsingRef";
import RandomColorRef from "./uncontroled/RandomColorRef";
import ControlledForm from "./controled/MyControledForm";
import ControlledLoginForm from "./controled/ControlledLoginForm";
import SimpleForm from "./formiks/MyFormik";

function App() {
  return (
    <div className="App">
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li class="list-group-item">
          <Link to="ref">useRef</Link>
        </li>
        <li class="list-group-item">
          <Link to="random">Random</Link>
        </li>
        <li class="list-group-item">
          <Link to="inputform">InputForm</Link>
        </li>
        <li class="list-group-item">
          <Link to="inputform">InputForm</Link>
        </li>
        <li class="list-group-item">
          <Link to="controlledloginform">Log In Form</Link>
        </li>
        <li>
          <Link to="formikform">Formik Form</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="ref" element={<UsingRef />} />
        <Route path="random" element={<RandomColorRef />} />
        <Route path="inputform" element={<ControlledForm />} />
        <Route path="controlledloginform" element={<ControlledLoginForm />} />
        <Route path="formikform" element={<SimpleForm />} />
      </Routes>
    </div>
  );
}

export default App;
