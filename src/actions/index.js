export const SELECT_TYPE = 'SELECT_TYPE';
export const SELECT_RATING = 'SELECT_RATING';
export const TOGGLE_GENRE = 'TOGGLE_GENRE';
export const SELECT_GROUP = 'SELECT_GROUP';
export const LOAD_MOVIES_START = 'LOAD_MOVIES_START';
export const LOAD_MOVIES_FINISH = 'LOAD_MOVIES_FINISH';

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

export function loadMovies(filters) {
  return dispatch => {
    dispatch(startLoadingMovies());

    // TODO: make an API call here
    // stubbed it out with a timeout just to make it async
    let movies = [
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
      },
      {
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "1977",
        "Rated": "PG",
        "Released": "25 May 1977",
        "Runtime": "121 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "George Lucas",
        "Writer": "George Lucas",
        "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
        "Language": "English",
        "Country": "USA",
        "Awards": "Won 6 Oscars. Another 48 wins & 28 nominations.",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZGEzZTExMDEtNjg4OC00NjQxLTk5NTUtNjRkNjA3MmYwZjg1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Metascore": "92",
        "imdbRating": "8.7",
        "imdbVotes": "955,091",
        "imdbID": "tt0076759",
        "Type": "movie",
        "Response": "True"
      }
    ];
    setTimeout(() => dispatch(showMovies(movies)), 150);
  }
}

function startLoadingMovies() {
  return {
    type: LOAD_MOVIES_START
  }
}

function showMovies(movies) {
  return {
    type: LOAD_MOVIES_FINISH,
    movies
  }
}
