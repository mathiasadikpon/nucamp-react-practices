
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UsingRef from './uncontroled/UsingRef';
import RandomColorRef from './uncontroled/RandomColorRef';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="ref" element={<UsingRef/>}/>
        <Route path="random" element={<RandomColorRef/>}/>
      </Routes>

    </div>
  );
}

export default App;
