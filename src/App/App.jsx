import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
import { Layout } from '../components/SharedLayout/SharedLayout';
// import { Home } from '../pages/Home/Home';
// import { Movies } from '../pages/Movies/Movies';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
// import { Cast } from '../components/Cast/Cast';
// import { Reviews } from '../components/Reviews/Reviews'


// const Layout = lazy(() => import('../components/SharedLayout/SharedLayout'))
const Home = lazy(() => import('../pages/Home/Home'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Movies = lazy(() =>import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'))





export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  )
}