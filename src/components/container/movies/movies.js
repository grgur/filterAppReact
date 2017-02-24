import React, {PropTypes} from 'react';

import constants from '../../../constants';
import Movie from './movie/movie';

import './movies.scss';

const Movies = ({movies, showDetailsModal}) => {

  function getMovieElements() {
    if (movies.status === constants.movieStatus.DONE && !movies.movies.length) {
      return <h2>No items satisfy the selected filter!</h2>
    } else if (movies.status === constants.movieStatus.START) {
      return <h2>Start by selecting any of the groups or filters</h2>
    }

    return movies.movies.map(m => <Movie key={m.imdbID}
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
