import React, {PropTypes} from 'react';

import Movie from './movie/movie';

import './movies.scss';

const Movies = ({movies, showDetailsModal, hideDetailsModal}) => {

  function getMovieElements() {
    return movies.movies.map(m => <Movie key={m.imdbID}
                                         movie={m}
                                         showDetailsModal={showDetailsModal}
                                         hideDetailsModal={hideDetailsModal}
    />);
  }

  return (
    <div id="movies">
      <h1>MOVIES</h1>
      {getMovieElements()}
    </div>
  );

};

Movies.propTypes = {
  movies: PropTypes.object.isRequired,
  showDetailsModal: PropTypes.func.isRequired,
  hideDetailsModal: PropTypes.func.isRequired
};

export default Movies;
