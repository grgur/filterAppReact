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
  return {
    type: SELECT_TYPE,
    newType
  }
}

export function selectRating(rated) {
  return {
    type: SELECT_RATING,
    rated
  }
}

export function toggleGenre(genre, add) {
  return {
    type: TOGGLE_GENRE,
    genre,
    add
  }
}

export function selectGroup(group) {
  return {
    type: SELECT_GROUP,
    group
  }
}

export function loadMovies(filters) {
  return dispatch => {
    dispatch(startLoadingMovies());

    getMovies(filters)
      .then(response => {
        dispatch(showMovies(response.data));
      })
      .catch(error => console.error(error));
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
