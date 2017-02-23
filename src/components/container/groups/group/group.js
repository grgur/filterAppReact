import React, {PropTypes} from 'react';

import './group.scss';

const Group = ({group, index, selectGroup}) => {

  return (
    <div className="group" onClick={() => selectGroup(group)}>
      <div className="number-circle">{index}</div>
      <div className="group-name">{group.name}</div>
    </div>
  );

};

Group.propTypes = {
  group: PropTypes.object.isRequired,
  selectGroup: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default Group;
