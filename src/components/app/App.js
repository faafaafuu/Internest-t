import React from 'react';
import Goods from '../goods/goods'// delete
import Sort from '../sort-panel/sort'
import {goods} from '../shop.json'



const App = () => {
  return (
    <div> 
      <Sort />
      <Goods goods={goods}/>
    </div>
  )
}

export default App;
