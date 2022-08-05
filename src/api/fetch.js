const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '?api_key=5c9ace2476c46656758ceca732bea2c0';

async function fetchApi(url) {
    const res = await fetch(url);
      return res.ok ?  res.json() : Promise.reject(new Error('Not found'));
}

export function fetchTrendFilms() {
   return fetchApi(`${BASE_URL}/trending/movie/day${KEY}`)
}

export function fetchMovie(movieName) {
   return fetchApi(`${BASE_URL}/search/movie${KEY}&page=1&query=${movieName}`)
}

export function fetchMovieDetails(movieId) {
   return fetchApi(`${BASE_URL}/movie/${movieId}${KEY}`)
}

export function fetchMovieCasts(movieId) {
   return fetchApi(`${BASE_URL}/movie/${movieId}/credits${KEY}`)
}

export function fetchMovieReviews(movieId) {
   return fetchApi(`${BASE_URL}/movie/${movieId}/reviews${KEY}`)
}