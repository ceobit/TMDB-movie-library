import { API_key, baseURL } from './constants.js';

const searchApi = {
  getMoviesByName(page, movie) {
    return fetch(
      `${baseURL}search/movie?api_key=${API_key}&language=en&query=${movie}&page=${page}`,
    );
  },
  getMovieCredits(filmId) {
    return fetch(`${baseURL}movie/${filmId}?api_key=${API_key}&language=en`);
  },
  getRatedMovies(page) {
    return fetch(`${baseURL}movie/top_rated?api_key=${API_key}&language=en&page=${page}`);
  },
};

export const getFilm = (page, movieName) => {
  return searchApi
    .getMoviesByName(page, movieName)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.results.map((film) => ({
        poster: film.poster_path,
        filmId: film.id,
        title: film.title,
        vote_average: film.vote_average,
        vote_count: film.vote_count,
      }));
    })
    .catch((err) => {
      alert(err);
    });
};

export const getRatedFilms = (page) => {
  return searchApi
    .getRatedMovies(page)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.results.map((film) => ({
        poster: film.poster_path,
        filmId: film.id,
        title: film.title,
        vote_average: film.vote_average,
        vote_count: film.vote_count,
      }));
    })
    .catch((err) => {
      alert(err);
    });
};

export const getMovieCredits = (filmId) => {
  return searchApi
    .getMovieCredits(filmId)
    .then((res) => {
      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      alert(err);
    });
};
