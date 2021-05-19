
import { getRatedFilms } from '../api.js';
import { posterTemplate } from '../constants.js';
import { getFromLS, saveToLS, findDuplicate, deleteFromLS } from './localStorage.js';

const imagesContainer = document.querySelector('.posters-container');

(() => {
  getRatedFilms(1)
    .then((arr) => {
      arr.forEach((el) => {
        console.log('here');
        try {
          imagesContainer.insertAdjacentHTML('beforeend', posterTemplate(el));
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

// Small Stuff
// set to 'watched' or 'not watched'
const watched = document.querySelectorAll('.watched');
console.log(watched);
console.log(watched[0].classList);
// if (watched.classList.contains('not-watched')) console.log(watched);




