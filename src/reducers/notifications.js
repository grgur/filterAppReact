import {combineReducers} from 'redux';
import {defaultModal, defaultSpinner} from './defaults';
import {LOAD_MOVIES_START, LOAD_MOVIES_FINISH, SHOW_DETAILS_MODAL, HIDE_DETAILS_MODAL} from '../actions';

function modal(state = defaultModal, action) {
  switch (action.type) {

    case SHOW_DETAILS_MODAL:
      return {
        visible: true,
        movie: action.details
      };

    case HIDE_DETAILS_MODAL: {
      return {
        visible: false
      }
    }

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
