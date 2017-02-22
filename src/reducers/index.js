import {combineReducers} from 'redux';
import filters from './filters';
import groups from './groups';
import movies from './movies';

export default combineReducers({filters, groups, movies});
