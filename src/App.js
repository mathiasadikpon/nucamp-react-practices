
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UsingRef from './uncontroled/UsingRef';
import RandomColorRef from './uncontroled/RandomColorRef';
import ControlledForm from './controled/MyControledForm';
import ControlledLoginForm from './controled/ControlledLoginForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="ref" element={<UsingRef/>}/>
        <Route path="random" element={<RandomColorRef/>}/>
        <Route path="inputform" element = {<ControlledForm />}/>
        <Route path="controlledloginform" element = {<ControlledLoginForm />}/>
      </Routes>

    </div>
  );
}

export default App;
