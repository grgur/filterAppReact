const defaultModal = {visible: false};
const defaultSpinner = {visible: false};
const defaultType = 'movie';
const defaultRating = 'N/A';
const defaultGenres = ['Action', 'Comedy'];
const defaultGroups = [
  {
    id: '1',
    name: 'Adult series',
    type: 'series',
    rated: 'R',
    genres: ['Action', 'Crime', 'Adventure']
  },
  {
    id: '2',
    name: 'Family movies',
    type: 'movie',
    rated: 'G',
    genres: ['Comedy', 'Family']
  },
  {
    id: '3',
    name: 'Fantasy movies',
    type: 'movie',
    rated: 'PG-13',
    genres: ['Fantasy']
  }
];
const defaultMovies = {
  status: 'DONE',
  movies: []
};

export {
  defaultType,
  defaultRating,
  defaultGenres,
  defaultGroups,
  defaultMovies,
  defaultModal,
  defaultSpinner
};
