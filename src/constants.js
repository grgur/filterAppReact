const constants = {
  types: [
    {label: 'Movie', value: 'content'},
    {label: 'Series', value: 'series'},
    {label: 'Episode', value: 'episode'}
  ],
  ratings: ['G', 'PG', 'PG-13', 'R', 'NC-17', 'N/A'],
  genres: ['Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Family', 'Fantasy', 'Horror', 'Romance'],
  movieStatus: {
    LOADING: 'LOADING',
    DONE: 'DONE'
  }
};

export default constants;
