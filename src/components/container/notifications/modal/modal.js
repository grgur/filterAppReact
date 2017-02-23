import React, {PropTypes} from 'react';

import './modal.scss';

const Modal = ({movie}) => {

  console.dir(movie);

  return (
    <div className="modal">
      <h1>
        Hi I'm a Modal
      </h1>
    </div>
  )
};

Modal.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Modal;
