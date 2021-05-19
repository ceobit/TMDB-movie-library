import { API_key, baseURL } from './constants.js';

const searchApi = {
  getMoviesByName(page, movie) {
    return fetch(
      `${baseURL}search/movie?api_key=${API_key}&language=en&query=${movie}&page=${page}`,
    );
  },
  getMoviesById(filmId) {
    return fetch(`${baseURL}movie/${filmId}?api_key=${API_key}&language=en`);
  },
  getMovieCredits(filmId) {
    return fetch(`${baseURL}movie/${filmId}?api_key=${API_key}&language=en`);
  },
  getRatedMovies(page) {
    return fetch(`${baseURL}movie/top_rated?api_key=${API_key}&language=en&page=${page}`);
  },
  getGenre() {
    return fetch(`${baseURL}genre/movie/list?api_key=${API_key}&language=en`);
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

export const getFilmById = (filmId) => {
  return searchApi
    .getMoviesById(filmId)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return {
        poster: data.poster_path,
        filmId: data.id,
        title: data.title,
        vote_average: data.vote_average,
        vote_count: data.vote_count,
        year: data.release_date,
        genres: data.genres,
      };
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
        year: film.release_date,
        genres: film.genre_ids,
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

export const getGenre = () => {
  return searchApi
    .getGenre()
    .then((res) => {
      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      alert(err);
    });
};
