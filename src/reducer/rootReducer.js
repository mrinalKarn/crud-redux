import Reducer from './reducer';
import UserReducer from "./userReducer";
import UserReducerPagination from './userPagReducer';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    post: Reducer,
    user : UserReducer,
    userPage : UserReducerPagination
});

export default allReducers;