import React, {PropTypes} from 'react';

const Types = props => {
  return (
    <div>
      <h3>Type</h3>
      <select id="selectType">
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
    </div>
  );
};

export default Types;
