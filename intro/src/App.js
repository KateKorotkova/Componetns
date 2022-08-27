import React from 'react';
import {ShopItemFunc} from './components/functional'
import { ShopItemClass } from './components/classBased';
import logo from './logo.svg';
import './App.css';
import './styles/main.css';



function App() {
  
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  let priceNumber = parseFloat((item.price).toFixed(2));
  let priceString = priceNumber.toLocaleString("en",{useGrouping: false, minimumFractionDigits: 2});
  item.price = priceString;

  //for use in one git repository
  let isFunctional = true;

  return (
    <>
        <div className="container">
          <div className="background-element">
          </div>
          <div className="highlight-window">
            <div className='highlight-overlay'></div>
          </div>
          <div className="window">
            { isFunctional ? <ShopItemFunc item={item} /> : <ShopItemClass item={item} /> }
          </div>
        </div>
    </>
  );
}

export default App;
