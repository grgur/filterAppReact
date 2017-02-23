import React, {PropTypes, PureComponent} from 'react';
import onClickOutside from 'react-onclickoutside';

class Movie extends PureComponent {

  /**
   * Used by onClickOutside HOC
   */
  handleClickOutside() {
    this.props.hideDetailsModal();
  }

  render() {
    const {movie, showDetailsModal} = this.props;

    return (
      <div onClick={() => showDetailsModal(movie)}>
        {movie.Title}
      </div>
    )
  }

}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  showDetailsModal: PropTypes.func.isRequired,
  hideDetailsModal: PropTypes.func.isRequired
};

export default onClickOutside(Movie);
