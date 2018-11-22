
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Filter from '../components/table-sort'
import * as filterActions from '../actions/filter'

const mapStateToProps = ({goods}) => ({
    filterBy: goods.filterBy
  })
  
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
