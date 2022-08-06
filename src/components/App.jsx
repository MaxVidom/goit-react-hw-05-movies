import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const Layout = lazy(() => import('./Layout'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
