const defaultType = 'movie';
const defaultRating = 'N/A';
const defaultGenres = ['Action', 'Comedy'];
const defaultGroups = [
  {
    name: 'Adult series',
    type: 'series',
    rating: 'R',
    genres: ['Action', 'Crime', 'Adventure']
  },
  {
    name: 'Family movies',
    type: 'movie',
    rating: 'G',
    genres: ['Comedy', 'Family']
  },
  {
    name: 'Fantasy movies',
    type: 'movie',
    rating: 'PG-13',
    genres: ['Fantasy']
  }
];

export {
  defaultType,
  defaultRating,
  defaultGenres,
  defaultGroups
};
