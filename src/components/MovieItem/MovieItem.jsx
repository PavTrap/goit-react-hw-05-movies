// import { Link } from 'react-router-dom';


export const MovieItem = ({ movieDetail }) => {
	const {
		backdrop_path,
		original_title,
		vote_average,
		overview,
		genres,
		release_date,
	 } = movieDetail;
	const percent = Math.round(vote_average * 10);

	 return(
		<>
			<div>
				{/* <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${backdrop_path}`}  width={320} height={380} alt="poster" /> */}
				<img
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${backdrop_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`
          }
          width={320}
          height={380}
          loading="lazy"
          alt="poster"
        />
				<div>
					<h2>{original_title} ({release_date})</h2>
					<p>User Score: {percent}%</p>
					<h3>Overview</h3>
					<p>{overview}</p>
					<h3>Genres</h3>
					<ul>
             		{/* {genres.map(({ id, name }) => <li key={id}>{name}</li>)} */}
						{genres && genres.length && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
					</ul>
				</div>
				{/* <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="Cast">Cast</Link>
              </li>
              <li>
                <Link to="Reviews">Reviews</Link>
              </li>
            </ul>
          </div> */}
			</div>
		</>
	 );
}