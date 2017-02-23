import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';

import Spinner from './spinner/spinner';
import Modal from './modal/modal';
import Details from '../movies/movie/details/details';

import './notifications.scss';

/**
 * A container component for modal windows, spinners and alerts.
 */
class Notifications extends PureComponent {
  render() {
    const {modal, spinner} = this.props;
    let modalJsx = modal.visible ? <Modal><Details movie={modal.movie}/></Modal> : null;
    let overlay = modal.visible ? <div id="overlay"></div> : null;
    let spinnerJsx = spinner.visible ? <Spinner/> : null;

    return (
      <div id="notifications">
        <h1>Notifications</h1>
        {overlay}
        {modalJsx}
        {spinnerJsx}
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

export default connect(mapStateToProps)(Notifications) ;
