import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';

import {selectType, selectRating, toggleGenre, selectGroup} from '../../actions';

import Filters from './filters/filters';
import Groups from './groups/groups';
import Movies from './movies/movies';

class Container extends PureComponent {
  render() {
    const {filters, groups, movies, selectType, selectRating, toggleGenre, selectGroup} = this.props;
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
          <Movies movies={movies}/>
        </article>
      </div>
    )
  }
}

Container.propTypes = {
  filters: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {filters, groups, movies} = state;
  return {
    filters,
    groups,
    movies
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
