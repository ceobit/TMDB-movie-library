import { getMovieCredits } from '../api.js';
// import { getParameter } from './scripts/aux.js';
// const parameter = getParameter();
// const filmId = parameter['filmId'];

const movieTitle = document.querySelector('.movie-title');
const shortDescription = document.querySelector('.short-description');
const moviePoster = document.querySelector('.movie-poster');
const rating = document.querySelector('.rating');

getMovieCredits('101').then((data) => {
  //   moviePoster.textContent = data.poster_path; <----- is not working with image
  movieTitle.textContent = data.title;
  shortDescription.textContent = data.tagline;
  rating.textContent = data.vote_average;
  // CONTINUE HERE
});
