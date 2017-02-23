import React, {PropTypes} from 'react';

import constants from '../../../constants';
import Movie from './movie/movie';

import './movies.scss';

const Movies = ({movies, showDetailsModal}) => {

  function getMovieElements() {
    if (movies.status !== constants.movieStatus.LOADING && !movies.movies.length) {
      return <h2>Please select a filter!</h2>
    }

    return movies.movies.map(m => <Movie key={Math.random()}
                                         movie={m}
                                         showDetailsModal={showDetailsModal}
    />);
  }

  return (
    <div id="movies">
      {getMovieElements()}
    </div>
  );

};

Movies.propTypes = {
  movies: PropTypes.object.isRequired,
  showDetailsModal: PropTypes.func.isRequired,
};

export default Movies;
