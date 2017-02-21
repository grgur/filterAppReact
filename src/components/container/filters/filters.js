import React, {PropTypes} from 'react';
import Type from './type/type';
import Rated from './rated/rated';
import Genre from './genre/genre';

const Filters = props => {

  return (
    <div>
      <Type/>
      <Rated/>
      <Genre/>
    </div>
  );

};

export default Filters;
