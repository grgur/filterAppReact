import React, {PureComponent, PropTypes} from 'react';
import onClickOutside from 'react-onclickoutside';

import './modal.scss';

class Modal extends PureComponent {

  /**
   * Used by onClickOutside HOC
   */
  handleClickOutside() {
    this.props.hideDetailsModal();
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  hideDetailsModal: PropTypes.func.isRequired
};

export default onClickOutside(Modal);
