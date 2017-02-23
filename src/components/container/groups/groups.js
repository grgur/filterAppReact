import React, {PropTypes} from 'react';

import Group from './group/group';

import './groups.scss';

const Groups = ({groups, selectGroup}) => {

  function getGroupElements() {
    return groups.map((group, index) => <Group key={`group${group.id}`} index={index} group={group} selectGroup={selectGroup}/>)
  }

  return (
    <div id="groups">
      {getGroupElements()}
    </div>
  );

};

Groups.propTypes = {
  groups: PropTypes.array.isRequired,
  selectGroup: PropTypes.func.isRequired
};

export default Groups;
