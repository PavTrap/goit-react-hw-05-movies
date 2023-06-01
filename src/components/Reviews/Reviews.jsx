import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../api/Api';
import { ReviewItem } from './ReviewItem';

export const Reviews = () => {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState({});
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const getReviewsById = async (id) => {
			try{
				setLoading(true);
				const result = await getReviews(id);
				// console.log(result.results)
				setReviews(result.results);
				setLoading(false);
			} catch {
				console.log('error');
			}
		}
		getReviewsById(movieId);
	}, [movieId])

	
	return (
		<ReviewItem reviews={reviews} isLoading={isLoading} />
	)
}
