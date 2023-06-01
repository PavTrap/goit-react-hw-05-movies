import { useEffect, useState, useRef } from 'react';
import { Outlet, NavLink, useParams, useLocation } from 'react-router-dom';

import { getMovieDetails } from '../../api/Api';
import { MovieItem } from '../../components/MovieItem/MovieItem';


export const MovieDetails = () => {
	const [movieDetail, setMovieDetail] = useState({});
	const location = useLocation();
	const [isLoading, setLoading] = useState(false);
	const { movieId } = useParams();
	const { current } = useRef(location.state?.from ?? '/');

	// console.log(movieId)

	useEffect(() => {
		const getMovieById = async (id) => {
			try {
				setLoading(true);
				const result = await getMovieDetails(id)
				setMovieDetail(result);
			} catch {
				console.log('error')
			}
		}
		getMovieById(movieId);
	}, [movieId])

// console.log(movieDetail);

	return (
		<>
			<NavLink to={current}>Return back</NavLink>
			<MovieItem movieDetail={movieDetail} isLoading={isLoading} />
			<div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
          </div>
			
			<Outlet />
		</>
	)
}




// getMovieDetails