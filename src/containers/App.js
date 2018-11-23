import App from '../components/App';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as goodsActions from '../actions/goods'
import orderBy from 'lodash/orderBy'

//Сортировка 
const sortBy = (goods, filterBy, searchQuery) => {
  
  switch(filterBy) {
    // По алфавиту
    case 'title':
      return orderBy(goods, 'data.title', 'asc');
    // По цене (от меньшего к большему)
    case 'price':
      return orderBy(goods, 'data.price', 'asc');
    // По старой цене (от большего к меньшему)
    case 'oldPrice':
      return orderBy(goods, 'data.oldPrice', 'desc');
    default:
      return goods;
  }
}

const filterGoods = (g, searchQuery) => {

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