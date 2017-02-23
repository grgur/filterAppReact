import React, {PropTypes} from 'react';
import constants from '../../../../constants';
import Checkbox from './checkbox/checkbox';

const Genre = ({genre, toggleGenre}) => {

  function isGenreSelected(genreName) {
    return genre.includes(genreName);
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
  genre: PropTypes.array.isRequired,
  toggleGenre: PropTypes.func.isRequired
};

export default Genre;
