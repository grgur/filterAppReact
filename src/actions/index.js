import {getMovies} from '../util/movieService';

export const SELECT_TYPE = 'SELECT_TYPE';
export const SELECT_RATING = 'SELECT_RATING';
export const TOGGLE_GENRE = 'TOGGLE_GENRE';
export const SELECT_GROUP = 'SELECT_GROUP';
export const LOAD_MOVIES_START = 'LOAD_MOVIES_START';
export const LOAD_MOVIES_FINISH = 'LOAD_MOVIES_FINISH';
export const SHOW_DETAILS_MODAL = 'SHOW_DETAILS_MODAL';
export const HIDE_DETAILS_MODAL = 'HIDE_DETAILS_MODAL';

export function selectType(newType) {
  const action = {
    type: SELECT_TYPE,
    newType
  };
  return updateFilters(action);
}

export function selectRating(rated) {
  const action = {
    type: SELECT_RATING,
    rated
  };
  return updateFilters(action);
}

export function toggleGenre(genre, add) {
  const action = {
    type: TOGGLE_GENRE,
    genre,
    add
  };
  return updateFilters(action);
}

export function selectGroup(group) {
  const action = {
    type: SELECT_GROUP,
    group
  };
  return updateFilters(action);
}

function updateFilters(action) {
  return dispatch => {
    dispatch(action);
    dispatch(loadMovies());
  }
}

function loadMovies() {
  return (dispatch, getState) => {
    const filters = getState().filters;

    dispatch(startLoadingMovies());

    getMovies(filters)
      .then(response => dispatch(showMovies(response.data)))
      .catch(error => dispatch(showMovies([])));
  }
}

function startLoadingMovies() {
  return {
    type: LOAD_MOVIES_START
  }
}

function showMovies(movies) {
  return {
    type: LOAD_MOVIES_FINISH,
    movies
  }
}

export function showDetailsModal(details) {
  return {
    type: SHOW_DETAILS_MODAL,
    details
  }
}

export function hideDetailsModal() {
  return {
    type: HIDE_DETAILS_MODAL
  }
}
