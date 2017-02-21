import {defaultType, defaultRating, defaultGenres} from './defaults';
import {combineReducers} from 'redux';

function type(state = defaultType, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function genres(state = defaultGenres, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function rating(state = defaultRating, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({type, genres, rating});
