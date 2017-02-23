import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';

import {hideDetailsModal} from '../../../actions'

import Spinner from './spinner/spinner';
import Modal from './modal/modal';
import Details from '../movies/movie/details/details';

import './notifications.scss';

/**
 * A container component for modal windows, spinners and alerts.
 */
class Notifications extends PureComponent {
  render() {
    const {modal, spinner, hideDetailsModal} = this.props;
    let overlay = modal.visible ? <div id="overlay"></div> : null;
    let modalElement = modal.visible ? <Modal hideDetailsModal={hideDetailsModal}><Details movie={modal.movie}/></Modal> : null;
    let spinnerElement = spinner.visible ? <Spinner/> : null;

    return (
      <div id="notifications">
        {overlay}
        {modalElement}
        {spinnerElement}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    modal: state.notifications.modal,
    spinner: state.notifications.spinner
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hideDetailsModal: () => dispatch(hideDetailsModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications) ;
