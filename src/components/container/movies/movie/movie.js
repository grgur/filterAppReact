import React, {PropTypes} from 'react';

const Movie = ({movie}) => {

  return (
    <div>
      {movie.Title}
    </div>
  )

};

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie;
