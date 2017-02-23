import {combineReducers} from 'redux';
import {defaultModal, defaultSpinner} from './defaults';
import {LOAD_MOVIES_START, LOAD_MOVIES_FINISH} from '../actions';

function modal(state = defaultModal, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function spinner(state = defaultSpinner, action) {
  switch (action.type) {

    case LOAD_MOVIES_START:
      return {visible: true};

    case LOAD_MOVIES_FINISH:
      return {visible: false};

    default:
      return state;
  }
}

export default combineReducers({modal, spinner})
