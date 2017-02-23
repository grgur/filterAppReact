import React, {PureComponent, PropTypes} from 'react';
import {connect} from 'react-redux';
import FaBars from 'react-icons/lib/fa/bars';

import {selectType, selectRating, toggleGenre, selectGroup, loadMovies} from '../../actions';

import Filters from './filters/filters';
import Groups from './groups/groups';
import Movies from './movies/movies';
import './container.scss';

class Container extends PureComponent {

  componentWillReceiveProps(nextProps) {
    const {filters, loadMovies} = this.props;
    if (nextProps.filters !== filters) {
      loadMovies(nextProps.filters);
    }
  }

  render() {
    const {filters, groups, movies, selectType, selectRating, toggleGenre, selectGroup} = this.props;
    const filterActions = {selectType, selectRating, toggleGenre};

    return (
      <div id="container">
        <aside id="filters-menu-wrapper">
          <FaBars id="filters-menu-icon"/>
          <Filters filters={filters} actions={filterActions}/>
        </aside>
        <article id="groups-wrapper">
          <Groups groups={groups} selectGroup={selectGroup}/>
        </article>
        <article id="movies-wrapper">
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
    selectGroup: group => dispatch(selectGroup(group)),
    loadMovies: filters => dispatch(loadMovies(filters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
