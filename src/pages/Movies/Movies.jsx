import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import * as fetchApi from '../../api/fetch';

export default function Movies() {
  const [movieName, setMovieName] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchName = searchParams.get('name') ?? '';
  useEffect(() => {
    if (!movieName) {
      console.log('Noname');
      return;
    }
    fetchApi
      .fetchMovie(movieName)
      .then(movies => setMoviesList(movies.results));
  }, [movieName]);

  const handleInputChange = evt => {
    const name = evt.currentTarget.value;
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    setMovieName(searchName);
  };

  return (
    <div>
      <form>
        <input type="text" value={searchName} onChange={handleInputChange} />
        <button type="submit" onClick={handleOnSubmit}>
          Search
        </button>
      </form>
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
