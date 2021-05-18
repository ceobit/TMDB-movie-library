import { getMovieCredits, getRatedFilms, getFilm, getFilmById } from './api.js';
import {saveToLS, clearLs, deleteFromLS} from './scripts/localStorage.js';
// getRatedFilms(1).then(arr => console.log(arr));
// getMovieCredits("123").then((data) => console.log(data));

//
// const poster = document.querySelector('.poster');
// const title = document.querySelector('.film_title');
//
//
// const handleTitle = (e) => {
//
//   const filmId = e.target.parentElement.getAttribute('data-filmId');
//
// getMovieCredits('101').then((data) => saveToLS(data));
//
// };
// poster.addEventListener('click', handleTitle);

//getFilm(1, '101').then((data) => console.log(data));


// getFilmById('191').then(data => saveToLS(data.filmId));

// const film = document.querySelector('.movie');
//
// const openWindow = (e) => {
//   const descr = window.open('./pages/movieDescription.html');
//   console.log('hello');
// };
//
// film.addEventListener('click', openWindow);