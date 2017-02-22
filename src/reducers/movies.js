import {defaultMovies} from './defaults';

function movies(state = defaultMovies, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default movies;
