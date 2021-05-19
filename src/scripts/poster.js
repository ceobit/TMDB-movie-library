import { getGenre, getRatedFilms } from '../api.js';
import { posterTemplate } from '../constants.js';
import { getFromLS, saveToLS, findDuplicate, deleteFromLS } from './localStorage.js';

const imagesContainer = document.querySelector('.posters-container');

(() => {
  getRatedFilms(1)
    .then((arr) => {
      arr.forEach((el) => {
        try {
          imagesContainer.insertAdjacentHTML('beforeend', posterTemplate(el));

          //add red heart
          const hearts = document.querySelectorAll('.fa-heart');
          let filmId;
          hearts.forEach((el) => {
            filmId = el.getAttribute('data-film-id');
            if (findDuplicate(filmId)) {
              el.classList.remove('add-to-favorites_grey');
              el.classList.add('add-to-favorites_red');
            }
          });
        } catch (e) {
          console.log(e);
        }
      });
    })
    .catch((e) => console.log(e));
})();

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
  }
};

const openFilmDescriptionPage = (e) => {
  console.log(e.target);
  if (e.target.classList.contains('movie-img')) {
    const filmId = e.target.getAttribute('data-film-id');
    window.open(`../pages/movieDescription.html?filmId=${filmId}`);
  }
};

const setOwnRating = (e) => {
  if (e.target.classList.contains('fa-star')) {

    e.target.parentElement.querySelectorAll('.fa-star').forEach(el => el.classList.remove('gold-star'));

    if (e.target.classList.contains('first-star')) {
      e.target.classList.toggle('gold-star');
    }

    if (e.target.classList.contains('second-star')) {
      e.target.previousElementSibling.classList.toggle('gold-star');
      e.target.classList.toggle('gold-star');
    }

    if (e.target.classList.contains('third-star')) {
      e.target.previousElementSibling.previousElementSibling.classList.toggle('gold-star');
      e.target.previousElementSibling.classList.toggle('gold-star');
      e.target.classList.toggle('gold-star');
    }

    if (e.target.classList.contains('fourth-star')) {
      e.target.previousElementSibling.previousElementSibling.previousElementSibling.classList.toggle('gold-star');
      e.target.previousElementSibling.previousElementSibling.classList.toggle('gold-star');
      e.target.previousElementSibling.classList.toggle('gold-star');
      e.target.classList.toggle('gold-star');
    }

    if (e.target.classList.contains('fifth-star')) {
      e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.toggle('gold-star');
      e.target.previousElementSibling.previousElementSibling.previousElementSibling.classList.toggle('gold-star');
      e.target.previousElementSibling.previousElementSibling.classList.toggle('gold-star');
      e.target.previousElementSibling.classList.toggle('gold-star');
      e.target.classList.toggle('gold-star');
    }
  }
};

imagesContainer.addEventListener('click', addToFavoriteList);
imagesContainer.addEventListener('click', openFilmDescriptionPage);
imagesContainer.addEventListener('click', setOwnRating);
