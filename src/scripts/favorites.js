import { posterTemplate } from '../constants.js';
import { getFilmById } from '../api.js';
import { deleteFromLS, findDuplicate, getFromLS, saveToLS } from './localStorage.js';

const imagesContainer = document.querySelector('.posters-container');

const favouriteImagesContainer = document.querySelector('.posters-container');
getFromLS().forEach((filmId) =>
  getFilmById(filmId)
    .then((data) => {
      console.log(data);
      favouriteImagesContainer.insertAdjacentHTML('beforeend', posterTemplate(data));

      //add red heart
      const hearts = document.querySelectorAll('.fa-heart');
      let filmId;
      hearts.forEach((el) => {
        filmId = el.getAttribute('data-film-id');
        el.classList.remove('add-to-favorites_grey');
        el.classList.add('add-to-favorites_red');
      });
    })
    .catch((e) => console.log(e)),
);

const deleteFromFavoriteList = (e) => {
  let filmId = 0;
  // get film id from HTML
  filmId = e.target.getAttribute('data-film-id');

  if (e.target.classList.contains('fa-heart')) {
    deleteFromLS(filmId);
    e.target.parentElement.parentElement.parentElement.remove();
  }
};

imagesContainer.addEventListener('click', deleteFromFavoriteList);
