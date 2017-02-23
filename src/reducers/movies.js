import constants from '../constants';
import {defaultMovies} from './defaults';
import {LOAD_MOVIES_START, LOAD_MOVIES_FINISH} from '../actions';

const loadingState = {
  status: constants.movieStatus.LOADING,
  movies: []
};

function movies(state = defaultMovies, action) {
  switch (action.type) {

    case LOAD_MOVIES_START:
      return loadingState;

    case LOAD_MOVIES_FINISH:
      return {
        status: constants.movieStatus.DONE,
        movies: action.movies.slice()
      };

    default:
      return state;
  }
}

export default movies;
