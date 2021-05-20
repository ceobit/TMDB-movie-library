import { posterTemplate } from '../constants.js';
import { getFilmById } from '../api.js';
import {deleteFromLS, findDuplicate, getFromLS} from './localStorage.js';

const imagesContainer = document.querySelector('.posters-container');

const favouriteImagesContainer = document.querySelector('.posters-container');

//to fill  list of favorites movies from Local storage
getFromLS('favoriteList').forEach((filmId) =>
  getFilmById(filmId)
    .then((data) => {
      favouriteImagesContainer.insertAdjacentHTML('beforeend', posterTemplate(data));
      //add red heart
      const hearts = document.querySelectorAll('.fa-heart');
      let filmId;
      hearts.forEach((el) => {
        filmId = el.getAttribute('data-film-id');
        el.classList.remove('add-to-favorites_grey');
        el.classList.add('add-to-favorites_red');
      });

    //add watched
    const watched = document.querySelectorAll('.not-watched');
    watched.forEach((el) => {
      filmId = el.getAttribute('data-film-id');
      if (findDuplicate(filmId, 'watchedList')) {
        el.classList.remove('not-watched');
        el.classList.add('watched');
        el.textContent = 'watched';
      }
    });

    })
    .catch((e) => console.log(e)),
);

const deleteFromFavoriteList = (e) => {
  let filmId = 0;
  // get film id from HTML
  filmId = e.target.getAttribute('data-film-id');

  if (e.target.classList.contains('fa-heart')) {
    deleteFromLS(filmId, 'favoriteList');
    e.target.parentElement.parentElement.parentElement.remove();
  }
};

const openFilmDescriptionPage = (e) => {
  console.log(e.target);
  if (e.target.classList.contains('movie-img')) {
    const filmId = e.target.getAttribute('data-film-id');
    window.open(`../pages/movieDescription.html?filmId=${filmId}`);
  }
};

imagesContainer.addEventListener('click', deleteFromFavoriteList);
imagesContainer.addEventListener('click', openFilmDescriptionPage);
