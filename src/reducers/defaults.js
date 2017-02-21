const defaultType = 'movie';
const defaultRating = 'N/A';
const defaultGenres = ['Action', 'Comedy'];
const defaultGroups = [
  {
    id: '1',
    name: 'Adult series',
    type: 'series',
    rating: 'R',
    genres: ['Action', 'Crime', 'Adventure']
  },
  {
    id: '2',
    name: 'Family movies',
    type: 'movie',
    rating: 'G',
    genres: ['Comedy', 'Family']
  },
  {
    id: '3',
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
