export const ReviewItem = ({ reviews }) => {
	return (
		<ul>
      {reviews.length > 0
        ? reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
        : "Sorry, we don't have any review for this movie"}
    </ul>
	)
}