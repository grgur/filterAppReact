import React, {PropTypes} from 'react';
import constants from '../../../../constants';
import Checkbox from './checkbox/checkbox';

const Genre = props => {

  const genreNames = constants.genres;
  const genreCheckboxes = genreNames.map(name => <Checkbox name={name}
                                                           key={`genreChk${name}`}
                                                           label={name}
                                                           value={false}
                                                           handleChange={removeMe}
  />);

  return (
    <div>
      <h3>Genre</h3>
      {genreCheckboxes}
    </div>
  )
};

function removeMe(name, value) {
  console.log(name, value);
}

export default Genre;
