import { getRatedFilms } from '../api.js';
import { posterURL } from '../constants.js';
import { getFromLS, saveToLS, findDuplicate, deleteFromLS } from './localStorage.js';

const imagesContainer = document.querySelector('.posters-container');

const posterTemplate = (movie) => {
  return `<div class="movie" data-film-id=${movie.filmId}>
        <!-- movie image -->
        <div class="movie-image-container">
          <img class="movie-img" src=${posterURL}${movie.poster} alt="poster" data-film-id=${movie.filmId}/>
          <p class="genres">drama, romance, historical</p>
          <span class="release-year">####</span>
        </div>
        <!-- movie title -->
        <div class="movie-description">
          <h2 class="movie-title">${movie.title}</h2>
          <div class="ratings-favorites-container">
            <!-- IMDb rating -->
            <div class="imdb-rating-container">
              <span>IMDb</span>
              <i class="fas fa-star star-rating-imdb"></i>
              <span class="imdb-rating">${movie.vote_average}</span>
            </div>
            <!-- user rating -->
            <div class="user-rating-container">
              <span class="rated-not-rated">Your rating:</span>
              <i class="fas fa-star star-rating-user"></i>
              <i class="fas fa-star star-rating-user"></i>
              <i class="fas fa-star star-rating-user"></i>
              <i class="fas fa-star star-rating-user"></i>
              <i class="fas fa-star star-rating-user"></i>
              <span class="user-rating">#.#/10</span>
            </div>
          </div>
          <div class="favorite-container">
            <!-- set as watched -->
            <div class="watched">not watched</div>
            <!-- add film to favorites page -->
            <i class="fas fa-heart add-to-favorites_grey" data-film-id=${movie.filmId}></i>
          </div>
        </div>`;
};

getRatedFilms(1)
  .then((arr) => {
    arr.forEach((el) => {
      imagesContainer.insertAdjacentHTML('beforeend', posterTemplate(el));
    });
  })
  .then((w) => {
    const favoriteIconList = document.querySelectorAll('.add-to-favorites');
  })
  .catch((e) => console.log(e));

const addToFavoriteList = (e) => {
  let filmId = 0;
  // get film id from HTML
  filmId = e.target.getAttribute('data-film-id');

  if (e.target.classList.contains('fa-heart')) {
    e.target.classList.toggle('add-to-favorites_grey');
    e.target.classList.toggle('add-to-favorites_red');

    //Save the favourite movie to local storage
    if (findDuplicate(filmId)) {
      deleteFromLS(filmId);
    } else {
      saveToLS(filmId);
    }

    console.log(getFromLS());
  }
};

const openFilmDescriptionPage = (e) => {
  console.log(e.target);
  if (e.target.classList.contains('movie-img')) {
    const filmId = e.target.getAttribute('data-film-id');
    window.open(`../pages/movieDescription.html?filmId=${filmId}`);
  }
};

imagesContainer.addEventListener('click', addToFavoriteList);
imagesContainer.addEventListener('click', openFilmDescriptionPage);
