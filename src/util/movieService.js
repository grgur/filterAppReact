import axios from 'axios';
import queryString from 'query-string';
import constants from '../constants';

function getMovies(filter) {
  const query = '?' + queryString.stringify(filter);
  return axios.get(constants.apiUrl + query);
}

export {
  getMovies
}
