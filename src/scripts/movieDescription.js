import { getMovieCredits } from '../api.js';

const movieTitle = document.querySelector('.movie-title');
const shortDescription = document.querySelector('.short-description');

getMovieCredits('101').then((data) => {
  movieTitle.textContent = data.title;
  shortDescription.textContent = data.tagline;
});
