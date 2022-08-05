import React, { useState, useEffect, useSearchParams } from 'react';
import { useParams } from 'react-router-dom';
import * as fetchApi from '../../api/fetch';

export default function Cast() {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchApi
      .fetchMovieCasts(movieId)
      .then(filmCasts => setCasts(filmCasts.cast));
  }, [movieId]);
  return (
    <ul>
      {casts &&
        casts.map(({ profile_path, character, original_name, id }) => {
          return (
            <li key={id}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={original_name}
                  width="120"
                />
              )}
              <p>Actor: {original_name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
}
