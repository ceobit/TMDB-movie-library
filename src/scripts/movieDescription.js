import { getMovieCredits } from '../api.js';
import { getParameter } from './aux.js';
import { posterBigURL } from '../constants.js';

const parameter = getParameter();
const filmId = parameter['filmId'].split('/').join('');

const movieTitle = document.querySelector('.movie-title');
const shortDescription = document.querySelector('.short-description');
const moviePoster = document.querySelector('.movie-poster');
const rating = document.querySelector('.rating');

getMovieCredits(filmId).then((data) => {
  moviePoster.setAttribute('src', `${posterBigURL}${data.poster_path}`);
  movieTitle.textContent = data.title;
  shortDescription.textContent = data.tagline;
  rating.textContent = data.vote_average;
  // CONTINUE HERE
});
