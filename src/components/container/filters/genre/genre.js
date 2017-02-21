import React, {PropTypes} from 'react';
import constants from '../../../../constants';
import Checkbox from './checkbox/checkbox';

const Genre = ({genres, toggleGenre}) => {

  function isGenreSelected(genre) {
    return genres.includes(genre);
  }

  const genreNames = constants.genres;
  const genreCheckboxes = genreNames.map(name => <Checkbox name={name}
                                                           key={`genreChk${name}`}
                                                           label={name}
                                                           value={isGenreSelected(name)}
                                                           handleChange={toggleGenre}
  />);

  return (
    <div>
      <h3>Genre</h3>
      {genreCheckboxes}
    </div>
  )
};

Genre.propTypes = {
  genres: PropTypes.array.isRequired,
  toggleGenre: PropTypes.func.isRequired
};

export default Genre;
