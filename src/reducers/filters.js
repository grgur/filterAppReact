import {defaultType, defaultRating, defaultGenres} from './defaults';
import {combineReducers} from 'redux';

import {SELECT_TYPE, SELECT_RATING, TOGGLE_GENRE, SELECT_GROUP} from '../actions';

function type(state = defaultType, action) {
  switch (action.type) {

    case SELECT_TYPE:
      return action.newType;

    case SELECT_GROUP:
      return action.group.type;

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

    case SELECT_GROUP:
      return action.group.genres.slice();

    default:
      return state;
  }
}

function rating(state = defaultRating, action) {
  switch (action.type) {

    case SELECT_RATING:
      return action.rating;

    case SELECT_GROUP:
      return action.group.rating;

    default:
      return state;
  }
}

export default combineReducers({type, genres, rating});
