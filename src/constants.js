export const API_key = '5fff6fd33738e50068fa6d70b3ad22c2';
export const baseURL = 'https://api.themoviedb.org/3/';
export const posterURL = 'https://image.tmdb.org/t/p/w342';
export const posterBigURL = 'https://image.tmdb.org/t/p/w500';

export const posterTemplate = (movie) => {
  return `
  <div class="movie" data-film-id=${movie.filmId}>
  <!-- movie image -->
  <div class="movie-image-container">
    <img class="movie-img" src=${posterURL}${movie.poster} alt="poster" data-film-id=${
    movie.filmId
  }/>
    <span class="release-year">${movie.year.slice(0, 4)}</span>
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
        <div class="user-rating-stars">
        <i class="fas fa-star star-rating-user first-star"></i>
        <i class="fas fa-star star-rating-user second-star"></i>
        <i class="fas fa-star star-rating-user third-star"></i>
        <i class="fas fa-star star-rating-user fourth-star"></i>
        <i class="fas fa-star star-rating-user fifth-star"></i>
        </div>
        <span class="user-rating">#.#/10</span>
      </div>
    </div>

    <div class="favorite-container">
    <!-- set as watched -->
    <div class="not-watched" data-film-id=${movie.filmId}>not watched</div>
    <!-- add film to favorites page -->
    <i class="fas fa-heart add-to-favorites_grey" data-film-id=${movie.filmId}></i>
  </div>
  <p class="genres"></p>
  </div>
</div>`;
};
