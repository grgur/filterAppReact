import React, {PropTypes} from 'react';

const Groups = ({groups, selectGroup}) => {

  function getGroupsHtml() {
    return groups.map(group => <span key={`group${group.id}`} onClick={() => selectGroup(group)}>{group.name}</span>)
  }

  return (
    <div>
      <h1>GROUPS</h1>
      {getGroupsHtml()}
    </div>
  );

};

Groups.propTypes = {
  groups: PropTypes.array.isRequired,
  selectGroup: PropTypes.func.isRequired
};

export default Groups;
