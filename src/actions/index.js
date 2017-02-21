export const SELECT_TYPE = 'SELECT_TYPE';
export const SELECT_RATING = 'SELECT_RATING';

export function selectType(newType) {
  return {
    type: SELECT_TYPE,
    newType
  }
}

export function selectRating(rating) {
  return {
    type: SELECT_RATING,
    rating
  }
}


