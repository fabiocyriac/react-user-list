import {combineReducers} from 'redux';
import {userReducer} from './user-reducer';
import {activeUserReducer} from './active-user-reducer';


const allReducers = combineReducers({
  users: userReducer,
  activeuser: activeUserReducer

});

export default allReducers;