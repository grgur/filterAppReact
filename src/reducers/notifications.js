import {combineReducers} from 'redux';
import {defaultModal, defaultSpinner} from './defaults';

function modal(state = defaultModal, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function spinner(state = defaultSpinner, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({modal, spinner})
