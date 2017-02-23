import React, {PropTypes} from 'react';

import './modal.scss';

const Modal = ({children}) => {
  return (
    <div className="modal">
      <div className="modal-body">
        {children}
      </div>
    </div>
  )
};

Modal.propTypes = {
  children: PropTypes.element.isRequired
};

export default Modal;
