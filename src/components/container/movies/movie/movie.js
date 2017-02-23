import React, {PropTypes} from 'react';

const Movie = ({movie, showDetailsModal, hideDetailsModal}) => {

  return (
    <div onClick={() => showDetailsModal(movie)}>
      {movie.Title}
    </div>
  )

};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  showDetailsModal: PropTypes.func.isRequired,
  hideDetailsModal: PropTypes.func.isRequired
};

export default Movie;
