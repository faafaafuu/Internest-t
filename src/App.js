import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setGoods} from './actions/goods'
// import goods from './shop'
import axios from 'axios'



class App extends Component {
 componentWillMount() {
   const {setGoods} = this.props
   axios.get('./shop.json').then(({data}) => {
     setGoods(data)
   })
 }

  render() {
    const {goods, isReady} = this.props
    // console.log(goods)
    return (
      <ul>
        {!isReady ? 'Load...' : goods.goods.map(good => (
              <li key={good.id}>{good.data.title}</li>
            ))
          }
      </ul>
    )
  }
}

const mapState = ({goods}) => ({
  goods: goods.items,
  isReady: goods.isReady
})

const mapDispatchToProps = dispatch => ({
  setGoods: goods => dispatch(setGoods(goods))
})

export default connect(mapState, mapDispatchToProps)(App);
