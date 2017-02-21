export const SELECT_TYPE = 'SELECT_TYPE';
export const SELECT_RATING = 'SELECT_RATING';
export const TOGGLE_GENRE = 'TOGGLE_GENRE';
export const SELECT_GROUP = 'SELECT_GROUP';

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

export function toggleGenre(genre, add) {
  return {
    type: TOGGLE_GENRE,
    genre,
    add
  }
}

export function selectGroup(group) {
  return {
    type: SELECT_GROUP,
    group
  }
}
