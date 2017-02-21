import React, {PropTypes} from 'react';

import constants from '../../../../constants';
import Select from './select/select';

const Types = ({type, selectType}) => {
  return (
    <div>
      <h3>Type</h3>
      <Select options={constants.types}
              selected={type} id="selectType"
              handleChange={e => selectType(e.target.value)}
      />
    </div>
  );
};

Types.propTypes = {
  type: PropTypes.string.isRequired,
  selectType: PropTypes.func.isRequired
};

export default Types;
