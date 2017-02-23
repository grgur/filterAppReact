import React, {PropTypes} from 'react';

import './details.scss';

const Details = ({movie}) => {

  let hasPoster = movie.Poster.length > 5;

  return (
    <article className="movie-details">
      <div className="poster-holder">
        <img
          src={hasPoster ? movie.Poster : 'http://filmmakerseo.com/imdb/imdb11.jpg'}/>
      </div>
      <div className="data-holder">
        <div>
          <span>Title: </span><span className="data-text">{movie.Title}</span>
        </div>
        <div>
          <span>Genre: </span><span className="data-text">{movie.Genre}</span>
        </div>
        <div>
          <span>Actors: </span><span className="data-text">{movie.Actors}</span>
        </div>
        <div>
          <span>Director: </span><span className="data-text">{movie.Director}</span>
        </div>
        <div>
          <span>Plot: </span><span className="data-text">{movie.Plot}</span>
        </div>
        <div>
          <span>Year: </span><span className="data-text">{movie.Year}</span>
        </div>
        <div>
          <span>IMDb Rating: </span><span className="data-text">{movie.imdbRating}</span>
        </div>
      </div>
    </article>
  );

};

Details.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Details;

