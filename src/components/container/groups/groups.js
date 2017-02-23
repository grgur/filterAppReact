import React, {PropTypes} from 'react';

import Group from './group/group';

import './groups.scss';

const Groups = ({groups, selectGroup}) => {

  function getGroupElements() {
    return groups.map(group => <Group key={`group${group.id}`} group={group} selectGroup={selectGroup}/>)
  }

  return (
    <div id="groups">
      <h1>GROUPS</h1>
      {getGroupElements()}
    </div>
  );

};

Groups.propTypes = {
  groups: PropTypes.array.isRequired,
  selectGroup: PropTypes.func.isRequired
};

export default Groups;
