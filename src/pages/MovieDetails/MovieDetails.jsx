import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import * as fetchApi from '../../api/fetch';

export default function MovieDetails({ id }) {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backPage = location.state.from ?? '/';
  const backFrom = useRef(backPage);

  useEffect(() => {
    fetchApi
      .fetchMovieDetails(movieId)
      .then(movieDetail => setMovie(movieDetail));
  }, [movieId]);
  const { poster_path, original_title, overview, genres, vote_average } = movie;

  return (
    <div>
      <Link to={backPage}>Back</Link>
      <div>
        {poster_path && (
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        )}
        <h1>{original_title}</h1>
        <p>Average Score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        {genres &&
          genres.map(({ id, name }) => {
            return <span key={id}>{name}</span>;
          })}
      </div>
      <div>
        <ul>
          <li>
            <Link to="cast" state={{ from: backFrom.current }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backFrom.current }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
