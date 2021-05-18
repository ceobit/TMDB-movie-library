import { getMovieCredits, getRatedFilms, getFilm } from './api.js';

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
//   getMovieCredits(filmId).then((data) => title.textContent = data.title);
//
// };
// poster.addEventListener('click', handleTitle);