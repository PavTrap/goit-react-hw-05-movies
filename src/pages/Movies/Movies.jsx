import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Search from '../../components/Search/Search';
import { searchMovies } from '../../api/Api';


export const Movies = () =>{
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    // if (query === '') {
    //   return;
    // }
    if (searchQuery) {
      setQuery(searchQuery);
    }

    const getMovieByName = async query => {
      try {
        setLoading(true);

        const { results } = await searchMovies(query);
        setMovies(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieByName(query);
  }, [query, searchQuery]);

  // const handlerFormSubmit = search => {
  //   setQuery(search);
  // };

  return (
    <div>
      <h3>Movies</h3>
      <Search></Search>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {movies.map(item => {
            return (
              <li key={item.id}>
                <Link to={`/movies/${item.id}`} state={{ from: location }}>
                  {item.original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default Movies;