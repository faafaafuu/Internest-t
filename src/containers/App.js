import App from '../components/App';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as goodsActions from '../actions/goods'
import orderBy from 'lodash/orderBy'

const sortBy = (goods, filterBy) => {
  // console.log('1111',filterBy, goods)
  // console.log('--',goods.goods)
  switch(filterBy) {
    case 'all':
      return goods.goods;
    case 'title':
      return orderBy(goods.goods, 'data.title', 'asc');
    case 'price':
      return orderBy(goods.goods, 'data.price', 'asc');
    case 'oldPrice':
      return orderBy(goods.goods, 'data.oldPrice', 'desc');
    default:
      return goods.goods;
  }
}


const mapStateToProps = ({goods}) => ({
  goods: sortBy(goods.items, goods.filterBy),
  isReady: goods.isReady
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(goodsActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
