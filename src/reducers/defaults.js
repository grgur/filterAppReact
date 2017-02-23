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
const defaultMovies = {
  status: 'DONE',
  movies: [
    {
      "Title": "The Lord of the Rings: The Fellowship of the Ring",
      "Year": "2001",
      "Rated": "PG-13",
      "Released": "19 Dec 2001",
      "Runtime": "178 min",
      "Genre": "Adventure, Drama, Fantasy",
      "Director": "Peter Jackson",
      "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)",
      "Actors": "Alan Howard, Noel Appleby, Sean Astin, Sala Baker",
      "Language": "English, Sindarin",
      "Country": "New Zealand, USA",
      "Awards": "Won 4 Oscars. Another 110 wins & 122 nominations.",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNmFmZDdkODMtNzUyMy00NzhhLWFjZmEtMGMzYjNhMDA1NTBkXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
      "Metascore": "92",
      "imdbRating": "8.8",
      "imdbVotes": "1,292,127",
      "imdbID": "tt0120737",
      "Type": "movie",
      "Response": "True"
    }
  ]
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
