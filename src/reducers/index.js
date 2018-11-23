import {combineReducers} from 'redux';
import goods from './goods';
import filter from './filter'

export default combineReducers({goods, filter})