import React, {PropTypes} from 'react';

import Movie from './movie/movie';

const Movies = ({movies}) => {

  function getMoviesHtml() {
    return movies.movies.map(m => <Movie key={m.imdbID} movie={m}/>);
  }

  return (
    <div>
      <h1>MOVIES</h1>
      {getMoviesHtml()}
    </div>
  );

};

Movies.propTypes = {
  movies: PropTypes.object.isRequired
};

export default Movies;
