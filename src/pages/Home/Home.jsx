import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as filmApi from '../../api/fetch';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    filmApi
      .fetchTrendFilms()
      .then(popFilms => {
        setPopularMovies(popFilms.results);
      })
      .catch(error => setError(error.message));
  }, []);

  return (
    <div>
      {error && <h2>{error.message}</h2>}
      <h1>Top popular movies</h1>
      <ul>
        {popularMovies.map(({ original_title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <p>{original_title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
