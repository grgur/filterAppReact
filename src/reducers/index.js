import {combineReducers} from 'redux';
import filters from './filters';
import groups from './groups';
import movies from './movies';
import notifications from './notifications';

export default combineReducers({filters, groups, movies, notifications});
