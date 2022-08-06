import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as fetchApi from '../../api/fetch';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchApi
      .fetchMovieReviews(movieId)
      .then(filmCasts => setReviews(filmCasts.results))
      .catch(error => setError(error.message));
  }, [movieId]);
  return (
    <ul>
      {error && <h2>{error.message}</h2>}
      {reviews.length !== 0 ? (
        reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <p>No reviews</p>
      )}
    </ul>
  );
}
