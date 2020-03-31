import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [product, setProduct] = useState();
  
  const clickHandler = () => {
    const newProduct = axios.get('https://epamsystems06-alliance-prtnr-eu02-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/Product-Show?pid=25518360M');
    setProduct(newProduct);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn react app rebuild
        </a>
        <button onClick={clickHandler}>Get Product</button>
      </header>
    </div>
  );
}

export default App;
