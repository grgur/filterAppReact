import React, {PropTypes} from 'react';
import Type from './type/type';
import Rated from './rated/rated';
import Genre from './genre/genre';

const Filters = ({filters, actions}) => {
  const {type, genre, rated} = filters;
  const {selectType, selectRating, toggleGenre} = actions;
  return (
    <div id="filters-wrapper">
      <Type type={type} selectType={selectType}/>
      <Rated rated={rated} selectRating={selectRating}/>
      <Genre genre={genre} toggleGenre={toggleGenre}/>
    </div>
  );
};

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default Filters;
