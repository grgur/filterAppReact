import React, {PropTypes} from 'react';
import Type from './type/type';
import Rated from './rated/rated';
import Genre from './genre/genre';

const Filters = ({filters, actions}) => {

  console.dir(filters);

  const {type, genres, rating} = filters;
  const {selectType} = actions;

  return (
    <div>
      <Type type={type} selectType={selectType}/>
      <Rated/>
      <Genre/>
    </div>
  );
};

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default Filters;
