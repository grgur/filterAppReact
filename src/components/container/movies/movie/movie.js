import React, {PropTypes} from 'react';

import './movie.scss';

const Movie = ({movie, showDetailsModal}) => {
  return (
    <div className="movie" onClick={() => showDetailsModal(movie)}>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  )
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  showDetailsModal: PropTypes.func.isRequired
};

export default Movie;
