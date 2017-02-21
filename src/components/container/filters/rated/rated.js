import React, {PropTypes} from 'react';
import constants from '../../../../constants';
import RadioButton from './radioButton/radioButton';

const Rated = props => {

  const ratings = constants.ratings;
  const ratedRadioButtons = ratings.map(rating => <RadioButton name="ratedRadioBtn"
                                                               key={`ratedRadioBtn${rating}`}
                                                               label={rating}
                                                               value={false}
                                                               handleChange={removeMe}
  />);

  return (
    <div>
      <h3>Rated</h3>
      {ratedRadioButtons}
    </div>
  );

};

function removeMe(name, value) {
  console.log(name, value);
}

export default Rated;
