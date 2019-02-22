
import { combineReducers } from 'redux';
import restaurantList from './restaurantList'

const todos = combineReducers({
    restaurantList: restaurantList
});

export default todos;