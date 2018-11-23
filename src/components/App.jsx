import React, { Component } from 'react';
// import SearchEngine from './table-search'
import Filter from '../containers/Filter'
// import TableBody from './table-body'
import TableList from './table-list'
import { Table } from 'semantic-ui-react'
import TableHeader from './table-list-header'
import axios from 'axios'

import './assets/Goods.sass';

class App extends Component {
 componentWillMount() {
   const {setGoods} = this.props
   axios.get('./shop.json').then(({data}) => {
     setGoods(data)
   })
 }

//  listSort = () => {
//   const {goods, isReady} = this.props
//   if(!isReady) {
//     console.log(11, goods)
//     return 'load...';
//   }
//   if(goods) {
//     console.log(22)
//     return goods.goods.map(good => <TableList key={good.id} {...good}  />)
//   }
//   if(!goods){
//     console.log(33)
//     return goods.map(good => <TableList key={good.id} {...good}  />)
//   }
//   else {
//     return console.log(234)
//   }
//  }

  render() {
    const {goods, isReady} = this.props
    return (
        <div className="container">
        {/* <SearchEngine /> */}
        <Filter />
        <Table compact='very'>
        <TableHeader/>
        <Table.Body>
        {!isReady
            ? 'Загрузка...'
            : goods.map((good, i) => <TableList key={i} {...good} />)}
        </Table.Body>
        </Table>
        </div> 
    )
  }
}
export default App;
