import { getMovieCredits } from '../api.js';
import { getParameter } from './aux.js';
import { posterBigURL } from '../constants.js';
import { getFromLS, saveToLS, findDuplicate, deleteFromLS } from './localStorage.js';

const parameter = getParameter();
const filmId = parameter['filmId'].split('/').join('');

const movieTitle = document.querySelector('.des-movie-title');
const shortDescription = document.querySelector('.des-short-description');
const moviePoster = document.querySelector('.des-movie-poster');
const rating = document.querySelector('.des-rating');
const production = document.querySelector('.des-country');
const time = document.querySelector('.des-time');
const year = document.querySelector('.des-year');
const genres = document.querySelector('.des-class-genre');
const story = document.querySelector('.des-story');
const addToFavorite = document.querySelector('.des-add-btn'); // need function for add to favorites

getMovieCredits(filmId).then((data) => {
  moviePoster.setAttribute('src', `${posterBigURL}${data.poster_path}`);
  movieTitle.textContent = data.title;
  shortDescription.textContent = data.tagline;
  rating.textContent = data.vote_average;
  production.textContent = `${data.production_countries[0].name} /`;
  time.textContent = `/ ${data.runtime} min. /`;
  year.textContent = `/ ${data.release_date}`;
  genres.textContent = `● ${data.genres[0].name} ● ${data.genres[1].name}`; // if time try with loop
  story.textContent = data.overview;

  if (findDuplicate(filmId, 'favoriteList')) {
    addToFavorite.textContent = 'Remove From Favorites';
  }
});

const addToFavoriteList = (e) => {
  // get film id from HTML
  //Save the favourite movie to local storage
  if (findDuplicate(filmId, 'favoriteList')) {
    deleteFromLS(filmId, 'favoriteList');
    addToFavorite.textContent = 'Add To Favorites';
  } else {
    saveToLS(filmId, 'favoriteList');
    addToFavorite.textContent = 'Remove From Favorites';
  }
};

addToFavorite.addEventListener('click', addToFavoriteList);
