import React, { Component } from 'react';
import Goods from './components/Goods'// delete
import {goods} from './shop.json'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Goods goods={goods}/>
      </div>
    );
  }
}

export default App;
