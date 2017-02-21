import React, {PropTypes} from 'react';
import Type from './type/type';
import Rated from './rated/rated';
import Genre from './genre/genre';

const Filters = ({filters, actions}) => {

  console.dir(filters);

  const {type, genres, rating} = filters;
  const {selectType, selectRating} = actions;

  return (
    <div>
      <Type type={type} selectType={selectType}/>
      <Rated rating={rating} selectRating={selectRating}/>
      <Genre/>
    </div>
  );
};

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default Filters;
