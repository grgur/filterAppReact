import React, {PropTypes} from 'react';

import Movie from './movie/movie';

import './movies.scss';

const Movies = ({movies}) => {

  function getMoviesHtml() {
    return movies.movies.map(m => <Movie key={m.imdbID} movie={m}/>);
  }

  return (
    <div id="movies">
      <h1>MOVIES</h1>
      {getMoviesHtml()}
    </div>
  );

};

Movies.propTypes = {
  movies: PropTypes.object.isRequired
};

export default Movies;
