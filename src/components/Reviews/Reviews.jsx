import React, { useState, useEffect, useSearchParams } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';
import * as fetchApi from '../../api/fetch';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchApi
      .fetchMovieReviews(movieId)
      .then(filmCasts => setReviews(filmCasts.results));
  }, [movieId]);
  return (
    <ul>
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
