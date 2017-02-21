import React, {PropTypes} from 'react';
import constants from '../../../../constants';
import Select from './select/select';

const Types = props => {

  return (
    <div>
      <h3>Type</h3>
      <Select options={constants.types} selected="movies" id="selectType" handleChange={removeMe}/>
    </div>
  );
};

function removeMe(args) {
  console.log(args);
}

export default Types;
