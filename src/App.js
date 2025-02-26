import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RandomColorRef from './using-ref/RandomColorRef';
import UsingfRef from './using-ref/UsingRef';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ref" element={<UsingfRef/>}/>
        <Route path="/random" element={<RandomColorRef/>}/>
      </Routes>

    </div>
  );
}

export default App;
