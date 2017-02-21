import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {selectType, selectRating, toggleGenre, selectGroup} from '../../actions';

import Filters from './filters/filters';
import Groups from './groups/groups';
import Movies from './movies/movies';

class Container extends Component {
  render() {
    const {filters, groups, selectType, selectRating, toggleGenre, selectGroup} = this.props;
    const filterActions = {selectType, selectRating, toggleGenre};

    return (
      <div id="container">
        <aside>
          <Filters filters={filters} actions={filterActions}/>
        </aside>
        <article>
          <Groups groups={groups} selectGroup={selectGroup}/>
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
    toggleGenre: (genre, add) => dispatch(toggleGenre(genre, add)),
    selectGroup: group => dispatch(selectGroup(group))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
