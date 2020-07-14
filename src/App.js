import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BoxForm from './components/BoxForm';
import DispayBox from './components/DispayBox';

function App() {

  const [boxes, setBoxes]=useState([]);

  return (
    <div className="App">
      <BoxForm boxes={boxes} setBoxes={setBoxes}/>
      <DispayBox boxes={boxes}/>
    </div>
  );
}

export default App;
