import {defaultGroups} from './defaults';

/**
 * This is just a stub. All grops are predefined but if we wanted to make them editable
 * we would do it here.
 * @param state
 * @param action
 */
function groups(state = defaultGroups, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default groups;
