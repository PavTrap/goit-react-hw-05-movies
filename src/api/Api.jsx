import axios from 'axios';

const KEY = '7118a78180f97ae5603b01b858fdf311';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrading = async () => {
	const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
	return response.data;
};

export const searchMovies = async (query) => {
	const response = await axios.get(`search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
	return response.data;
 };

 export const getMovieDetails = async (id) => {
	const response = await axios.get(`movie/${id}?api_key=${KEY}&language=en-US`);
	return response.data;
 };

 export const getMovieCredits = async (id) => {
	const response = await axios.get(`movie/${id}/credits?api_key=${KEY}&language=en-US`);
	return response.data;
 };
 
 export const getReviews = async (id) => {
	const response = await axios.get(`movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`);
	return response.data;
 };