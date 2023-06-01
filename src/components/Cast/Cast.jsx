import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../api/Api';
import { CastItem } from './CastItem';

// export const Cast = () => {
// 	const { movieId } = useParams();
// 	const [credits, setCredits] = useState('');
// 	const [isLoading, setIsLoading] = useState(false);


// 	useEffect(() => {
// 		const getMoviesByCredits = async (id) => {
// 			try{
// 				setIsLoading(true);
// 				const result = await getMovieCredits(id);
// 				setCredits(result);
// 				// setIsLoading(false);
// 			} catch {
// 				console.log('error')
// 			}
// 		}
// 		getMoviesByCredits(movieId);
// 	}, [movieId])


// 	return (
		// <CastItem credits={credits} isLoading={isLoading}/>
// 	)
// }
export const Cast = () => {
	const [castList, setCastList] = useState([]);
	// const [credits, setCredits] = useState('');
	const { movieId } = useParams();

	useEffect(() => {
	  getMovieCredits(movieId).then(data => setCastList(data.cast));
	}, [movieId]);



	return (

		<CastItem castList={castList} />
	//   <div>
	// 	 {castList.length > 0
	// 		? castList.map(({ id, name, profile_path, character }) => (
	// 			 <div key={id}>
	// 				<img
	// 				  src={
	// 					 profile_path
	// 						? 'https://image.tmdb.org/t/p/w200' + profile_path
	// 						: 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
	// 				  }
	// 				  alt={name}
	// 				  width={200}
	// 				/>
	// 				<div>
	// 				  <p>
	// 					 <b>Actor:</b> {name}
	// 				  </p>
	// 				  <p>
	// 					 <b>Character:</b> {character}
	// 				  </p>
	// 				</div>
	// 			 </div>
	// 		  ))
	// 		: "Sorry, there isn't any info :("}
	//   </div>
	);
 };
 
 export default Cast;
