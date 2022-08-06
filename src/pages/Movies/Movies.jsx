import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import * as fetchApi from '../../api/fetch';

export default function Movies() {
  const [movieName, setMovieName] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [inputName, setInputName] = useState('');
  const location = useLocation();
  // const searchName = searchParams.get('name') ?? '';
  useEffect(() => {
    if (!movieName) {
      console.log('Noname');
      return;
    }
    fetchApi
      .fetchMovie(movieName)
      .then(movies => setMoviesList(movies.results))
      .catch(error => setError(error.message));
  }, [movieName]);

  useEffect(() => {
    setInputName(searchParams.get('name') ?? '');
    setMovieName(searchParams.get('name') ?? '');
  }, [searchParams]);
  const handleInputChange = evt => {
    setInputName(evt.currentTarget.value);
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    const name = inputName;
    const nextParams = name !== '' ? { name } : {};
    setMovieName(inputName);

    setSearchParams(nextParams);
  };

  return (
    <div>
      <form>
        <input type="text" value={inputName} onChange={handleInputChange} />
        <button type="submit" onClick={handleOnSubmit}>
          Search
        </button>
      </form>
      {error && <h2>{error.message}</h2>}
      {moviesList.map(({ original_title, id }) => {
        return (
          <div key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <p>{original_title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
