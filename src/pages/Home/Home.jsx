import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrading } from '../../api/Api';


export const Home = () => {
	const [topFilms, setTopFilms] = useState([]);
	const [loading, setLoading] = useState(false);
	const location = useLocation();


	useEffect(()=>{
		const topFlimsList = async () => {
			try {
				setLoading(true);
				const responce = await getTrading();
				const result = await responce.results;
				setTopFilms(result);
			} catch {
				console.log('error');
			};
			// console.log(loading);
		}
		topFlimsList();
	},[loading])


// const topFilmsArray = topFilms.map(topFilm => topFilm.title)
// console.log(topFilmsArray)

	
	return(
		<div>
			<h2>Top Movies for today</h2>
			<ul>
				{topFilms.map(topFilm => {
					return(
						<li key={topFilm.id}>
							<Link to={`/movies/${topFilm.id}`} state={location}>{topFilm.title}</Link>
						</li>
					)
				})}
			</ul>
		</div>	
	)
}

export default Home;