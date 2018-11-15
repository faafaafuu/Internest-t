import React, { Component } from 'react';
import Goods from './components/Goods'// delete
import {goods} from './shop.json'
import './App.css';

class App extends Component {
  // state = {
  //   goods: {goods},
  //   inputValue: ''
  // }
  render() {
    // const {goods, inputValue} = this.state
    
    return (
      <div className="App"> 
        <Goods goods={goods}/>
      </div>
    );
  }
}

export default App;
