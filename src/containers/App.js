import App from '../components/App';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as goodsActions from '../actions/goods'
import orderBy from 'lodash/orderBy'

const sortBy = (goods, filterBy, searchQuery) => {
  // console.log('1111',filterBy, goods)
  
  switch(filterBy) {
    case 'title':
      return orderBy(goods, 'data.title', 'asc');
    case 'price':
      return orderBy(goods, 'data.price', 'asc');
    case 'oldPrice':
      return orderBy(goods, 'data.oldPrice', 'desc');
    default:
      return goods;
  }
}

const filterGoods = (g, searchQuery) => {
  console.log('-',g)
  return g.filter(
    ev =>
      ev.data.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );
}


const searchGoods = (goods, filterBy, searchQuery) => {
  return sortBy(filterGoods(goods, searchQuery), filterBy);
};
const mapStateToProps = ({ goods, filter }) => ({
  goods: goods.items && searchGoods(goods.items, filter.filterBy, filter.searchQuery),
  isReady: goods.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(goodsActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

// import App from '../components/App';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as goodsActions from '../actions/goods'
// import orderBy from 'lodash/orderBy'
// (function() {
//   console.log(goods)
// })()

// const sortBy = (goods, filterBy) => {
//   // console.log('1111',filterBy, goods)
//   console.log('--',goods.goods)
//   switch(filterBy) {
//     case 'all':
//       return goods.goods;
//     case 'title':
//       return orderBy(goods.goods, 'data.title', 'asc');
//     case 'price':
//       return orderBy(goods.goods, 'data.price', 'desc');
//     case 'oldPrice':
//       return orderBy(goods.goods, 'data.oldPrice', 'desc');
//     default:
//       return goods.goods;
//   }
// }

// const filterGoods = (goods, searchQuery) => {
//   console.log('00', goods)
//   goods.filter((e) => 
//     e.data.title.toLowerCase().indexOf(searchQuery.toLowerCase())
//   )
// }

// const searchGoods = (goods, filterBy, searchQuery) => {
//   return sortBy(filterGoods(goods, searchQuery), filterBy)
// }

// const mapStateToProps = ({goods, filter}) => ({
//   goods: sortBy(goods.items, goods.filterBy, filter.searchQuery),
//   isReady: goods.isReady
// })

// const mapDispatchToProps = dispatch => ({
//   ...bindActionCreators(goodsActions, dispatch),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);
