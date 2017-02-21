import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {selectType, selectRating} from '../../actions';

import Filters from './filters/filters';
import Groups from './groups/groups';
import Movies from './movies/movies';

class Container extends Component {
  render() {
    const {filters} = this.props;
    const {selectType, selectRating} = this.props;
    const filterActions = {selectType, selectRating};
    return (
      <div id="container">
        <aside>
          <Filters filters={filters} actions={filterActions}/>
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
  filters: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {filters} = state;
  return {
    filters
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectType: type => dispatch(selectType(type)),
    selectRating: rating => dispatch(selectRating(rating))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
