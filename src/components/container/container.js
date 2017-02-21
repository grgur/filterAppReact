import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {selectType, selectRating, toggleGenre} from '../../actions';

import Filters from './filters/filters';
import Groups from './groups/groups';
import Movies from './movies/movies';

class Container extends Component {
  render() {
    const {filters, groups, selectType, selectRating, toggleGenre} = this.props;
    const filterActions = {selectType, selectRating, toggleGenre};

    console.dir(groups);

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
  const {filters, groups} = state;
  return {
    filters,
    groups
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectType: type => dispatch(selectType(type)),
    selectRating: rating => dispatch(selectRating(rating)),
    toggleGenre: (genre, add) => dispatch(toggleGenre(genre, add))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
