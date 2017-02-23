import React, {PropTypes} from 'react';
import constants from '../../../../constants';
import RadioButton from './radioButton/radioButton';

const Rated = ({rated, selectRating}) => {

  const ratings = constants.ratings;
  const ratedRadioButtons = ratings.map(ratingItem => <RadioButton name="ratedRadioBtn"
                                                                   key={`ratedRadioBtn${ratingItem}`}
                                                                   label={ratingItem}
                                                                   value={rated === ratingItem}
                                                                   handleChange={selectRating}
  />);

  return (
    <div>
      <h3>Rated</h3>
      {ratedRadioButtons}
    </div>
  );

};

Rated.propTypes = {
  rated: PropTypes.string.isRequired,
  selectRating: PropTypes.func.isRequired
};

export default Rated;
