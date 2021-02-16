import reducer from './reducer';
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    post: reducer
});

export default allReducers;