import axios from 'axios';

import API_key from './constants';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const searchApi = {
  getMoviesByName(page, movie) {
    return api.get(`search/movie?api_key=${API_key}&language=en&query=${movie}&page=${page}`);
  },
  getMovieCredits(filmId) {
    return api.get(`/movie/${filmId}?api_key=${API_key}&language=ru`);
  },
  getRatedMovies(page) {
    return api.get(`/movie/top_rated?api_key=${API_key}&language=ru&page=${page}`);
  },
};
