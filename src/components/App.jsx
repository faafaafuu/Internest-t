import React, { Component } from 'react';
import TableHeader from './table-list-header'
import Filter from '../containers/Filter'
import TableList from './table-list'

import { Table } from 'semantic-ui-react'
import axios from 'axios'
import './assets/Goods.sass';

class App extends Component {
 componentWillMount() {
   const {setGoods} = this.props
   axios.get('./shop.json').then(({data}) => {
     setGoods(data)
   })
 }

  render() {
    const {goods, isReady} = this.props
    return (
      <div className="container">
        <Filter />
        <Table compact='very'>
          <TableHeader/>
          <Table.Body>
          {!isReady
              ? 'Load...'
              : goods.map((good, i) => <TableList key={i} {...good} />)}
          </Table.Body>
        </Table>
       </div> 
    )
  }
}
export default App;
