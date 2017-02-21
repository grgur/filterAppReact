import {defaultType, defaultRating, defaultGenres} from './defaults';
import {combineReducers} from 'redux';

import {SELECT_TYPE, SELECT_RATING, TOGGLE_GENRE} from '../actions';

function type(state = defaultType, action) {
  switch (action.type) {

    case SELECT_TYPE:
      return action.newType;

    default:
      return state;
  }
}

function toggleGenre(genres, genre, add) {
  if (add) {
    return genres.concat(genre);
  } else {
    return genres.filter(g => g !== genre);
  }
}

function genres(state = defaultGenres, action) {
  switch (action.type) {

    case TOGGLE_GENRE:
      return toggleGenre(state, action.genre, action.add);

    default:
      return state;
  }
}

function rating(state = defaultRating, action) {
  switch (action.type) {

    case SELECT_RATING:
      return action.rating;

    default:
      return state;
  }
}

export default combineReducers({type, genres, rating});
