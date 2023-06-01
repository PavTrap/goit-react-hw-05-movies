// export const CastItem = ({ credits }) => {
// 	const { cast } = credits;
// 	// console.log(credits.map(item => console.log(item)))
// 	return(
// 		<div>
// 			{cast.map(item => {
// 					return (
// 					<div key={item.id}>
// 						<img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${item.profile_path}`} alt="poster-actor"></img>
// 						<div>{item.name}</div>
// 						<div>Character: {item.character}</div>
// 					</div>
// 					);
// 				})}
// 		</div>
// 	)
// }

export const CastItem = ({ castList }) => {
	return(
		<div>
		 {castList.length > 0
			? castList.map(({ id, name, profile_path, character }) => (
				 <div key={id}>
					<img
					  src={
						 profile_path
							? 'https://image.tmdb.org/t/p/w200' + profile_path
							: 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
					   // `https://image.tmdb.org/t/p/w138_and_h175_face/${profile_path}`
						}
					  alt={name}
					  width={200}
					/>
					<div>
					  <p>
						 <b>Actor:</b> {name}
					  </p>
					  <p>
						 <b>Character:</b> {character}
					  </p>
					</div>
				 </div>
			  ))
			: "Sorry, there isn't any info :("}
	  </div>
	)

}