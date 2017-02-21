import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Filters from './filters/filters';
import Groups from './groups/groups';
import Movies from './movies/movies';

class Container extends Component {

  render() {

    console.log(this.props);

    return (
      <div id="container">
        <aside>
          <Filters/>
        </aside>
        <article>
          <Groups/>
        </article>
        <article>
          <Movies/>
        </article>
      </div>
    )
  }

}

Container.propTypes = {
  type: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  rating: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  const {filters} = state;
  const {type, genres, rating} = filters;
  return {
    type,
    genres,
    rating
  }
}

export default connect(mapStateToProps)(Container);
