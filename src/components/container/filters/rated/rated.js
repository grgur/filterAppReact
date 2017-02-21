import React, {PropTypes} from 'react';

const Rated = props => {

  return (
    <div>
      <h3>Rated</h3>
      <input name="ratedRadioBtn" type="radio" id="ratedG"/><label htmlFor="ratedG">G</label>
      <input name="ratedRadioBtn" type="radio" id="ratedPG"/><label htmlFor="ratedPG">PG</label>
      <input name="ratedRadioBtn" type="radio" id="ratedPG-13"/><label htmlFor="ratedPG-13">PG-13</label>
      <input name="ratedRadioBtn" type="radio" id="ratedR"/><label htmlFor="ratedR">R</label>
      <input name="ratedRadioBtn" type="radio" id="ratedNC-17"/><label htmlFor="ratedNC-17">NC-17</label>
    </div>
  );

};

export default Rated;
