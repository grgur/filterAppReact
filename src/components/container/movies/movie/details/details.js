import React, {PropTypes} from 'react';

import './details.scss';

const Details = ({movie}) => {

  const {poster, title, genre, actors, director, year, rating} = movie;
  let hasPoster = poster.length > 5;

  return (
    <article className="movie-details">
      <div className="poster-holder">
        <img
          src={hasPoster ? poster : 'http://filmmakerseo.com/imdb/imdb11.jpg'}/>
      </div>
      <div className="data-holder">
        <div>
          <span>Title: </span><span className="data-text">{title}</span>
        </div>
        <div>
          <span>Genre: </span><span className="data-text">{genre.join(', ')}</span>
        </div>
        <div>
          <span>Actors: </span><span className="data-text">{actors}</span>
        </div>
        <div>
          <span>Director: </span><span className="data-text">{director}</span>
        </div>
        <div>
          <span>Year: </span><span className="data-text">{year}</span>
        </div>
        <div>
          <span>IMDb Rating: </span><span className="data-text">{rating}</span>
        </div>
      </div>
    </article>
  );

};

Details.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Details;

