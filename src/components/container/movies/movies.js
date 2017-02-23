import React, {PropTypes} from 'react';

import Movie from './movie/movie';

import './movies.scss';

const Movies = ({movies, showDetailsModal}) => {

  function getMovieElements() {
    return movies.movies.map(m => <Movie key={m.imdbID}
                                         movie={m}
                                         showDetailsModal={showDetailsModal}
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
};

export default Movies;
