import axios from 'axios';
import {createQuery} from './query';
import constants from '../constants';

function getMovies(filter) {
  const query = createQuery(filter);
  return axios.get(constants.apiUrl + query);
}

export {
  getMovies
}
