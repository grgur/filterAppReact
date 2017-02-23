import React, {PropTypes} from 'react';

const Group = ({group, selectGroup}) => {

  return (
    <span onClick={() => selectGroup(group)}>
      <span>{group.name}</span>
    </span>
  );

};

Group.propTypes = {
  group: PropTypes.object.isRequired,
  selectGroup: PropTypes.func.isRequired
};

export default Group;
