import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';

import Spinner from './spinner/spinner';
import Modal from './modal/modal';

/**
 * A container component for modal windows, spinners and alerts.
 */
class Notifications extends PureComponent {
  render() {
    const {modal, spinner} = this.props;
    let modalJsx = modal.visible ? <Modal movie={modal.movie}/> : null;
    let spinnerJsx = spinner.visible ? <Spinner/> : null;

    return (
      <div>
        <h1>Notifications</h1>
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
