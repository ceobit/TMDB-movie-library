import { posterTemplate } from '../constants.js';
import { getFilmById } from '../api.js';
import { getFromLS } from './localStorage.js';

const favouriteImagesContainer = document.querySelector('.posters-container');
getFromLS().forEach((filmId) =>
  getFilmById(filmId)
    .then((data) => {
      console.log(data);
      favouriteImagesContainer.insertAdjacentHTML('beforeend', posterTemplate(data));
    })
    .catch((e) => console.log(e)),
);

// // searching :I tried  it but its not working
// const searchBar = document.forms['search-book'].querySelector('input');
// searchBar.addEventListener('keyup', function (e) {
//   const term = e.target.value.toLowerCase();
//   const books = list.getElementsByTagName('li');
//   Array.form(books).forEach(function (book) {
//     const title = book.firstElementChild.textContent;
//     if (title.toLowerCase().indexOf(term) != -1) {
//       book.style.display = 'block';
//     } else {
//       book.style.display = 'none';
//     }
//   });
// });
