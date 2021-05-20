import { getRatedFilms, getFilm } from '../api.js';
import { posterTemplate } from '../constants.js';
import { saveToLS, findDuplicate, deleteFromLS } from './localStorage.js';

const imagesContainer = document.querySelector('.posters-container');
const foundContainer = document.querySelector('.found-container');
const searchButton = document.querySelector('.searchbutton');
const searchbar = document.querySelector('.searchbar');

(() => {
  getRatedFilms(1)
    .then((arr) => {
      arr.forEach((el) => {
        // to fill movies in the main page
        try {
          imagesContainer.insertAdjacentHTML('beforeend', posterTemplate(el));

          //add red heart
          const hearts = document.querySelectorAll('.fa-heart');
          let filmId;
          hearts.forEach((el) => {
            filmId = el.getAttribute('data-film-id');
            if (findDuplicate(filmId, 'favoriteList')) {
              el.classList.remove('add-to-favorites_grey');
              el.classList.add('add-to-favorites_red');
            }
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

    if (findDuplicate(filmId, 'favoriteList')) {
      //delete the favourite movie from local storage
      deleteFromLS(filmId, 'favoriteList');
    } else {
      //Save the favourite movie to local storage
      saveToLS(filmId, 'favoriteList');
    }
  }
};

const openFilmDescriptionPage = (e) => {
  if (e.target.classList.contains('movie-img')) {
    const filmId = e.target.getAttribute('data-film-id');
    window.open(`../pages/movieDescription.html?filmId=${filmId}`);
  }
};

const setOwnRating = (e) => {
  if (e.target.classList.contains('fa-star')) {
    e.target.parentElement
      .querySelectorAll('.fa-star')
      .forEach((el) => el.classList.remove('gold-star'));

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
      e.target.previousElementSibling.previousElementSibling.previousElementSibling.classList.toggle(
        'gold-star',
      );
      e.target.previousElementSibling.previousElementSibling.classList.toggle('gold-star');
      e.target.previousElementSibling.classList.toggle('gold-star');
      e.target.classList.toggle('gold-star');
    }

    if (e.target.classList.contains('fifth-star')) {
      e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.toggle(
        'gold-star',
      );
      e.target.previousElementSibling.previousElementSibling.previousElementSibling.classList.toggle(
        'gold-star',
      );
      e.target.previousElementSibling.previousElementSibling.classList.toggle('gold-star');
      e.target.previousElementSibling.classList.toggle('gold-star');
      e.target.classList.toggle('gold-star');
    }
  }
};

const handleWatched = (e) => {
  if (e.target.classList.contains('watched')) {
    e.target.textContent = 'not watched';
    e.target.classList.add('not-watched');
    e.target.classList.remove('watched');
  } else if (e.target.classList.contains('not-watched')) {
    e.target.textContent = 'watched';
    e.target.classList.add('watched');
    e.target.classList.remove('not-watched');
  }

  const filmId = e.target.getAttribute('data-film-id');

  //Save watched to local storage
  if (findDuplicate(filmId, 'watchedList')) {
    deleteFromLS(filmId, 'watchedList');
  } else {
    saveToLS(filmId, 'watchedList');
  }
};

const findFilm = (e) => {
  e.preventDefault();

  //remove children
  while (foundContainer.lastElementChild) {
    foundContainer.removeChild(foundContainer.lastElementChild);
  }

  const title = document.querySelector('.found-title');

  const movieName = searchbar.value;
  if (movieName) {
    title.textContent = 'Search result';

    // request to API by movie name
    getFilm(1, movieName).then((arr) => {
      if (!arr.length) {
        title.textContent = 'Nothing found';
      }
      arr.forEach((el, index) => {
        if (index < 10) foundContainer.insertAdjacentHTML('beforeend', posterTemplate(el));
      });
    });
  } else {
    title.textContent = '';
  }

  searchbar.value = '';
};

imagesContainer.addEventListener('click', addToFavoriteList);
imagesContainer.addEventListener('click', openFilmDescriptionPage);
imagesContainer.addEventListener('click', setOwnRating);
imagesContainer.addEventListener('click', handleWatched);

foundContainer.addEventListener('click', addToFavoriteList);
foundContainer.addEventListener('click', openFilmDescriptionPage);
foundContainer.addEventListener('click', setOwnRating);
foundContainer.addEventListener('click', handleWatched);
searchButton.addEventListener('click', findFilm);
