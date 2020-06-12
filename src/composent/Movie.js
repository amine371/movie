import react from "react";
const Movie = ({ starIndex = () => {}, rating }) => {
  const stars = (x) => {
    let star = [];
    for (let i = 0; i < 5; i++) {
      if (i < x) {
        star.push(
          <span className='rating' onClick={() => starIndex(i + 1)}>
            ★
          </span>
        );
      } else {
        star.push(
          <span
            className='rating'
            style={{ cursor: 'pointer' }}
            onClick={() => starIndex(i + 1)}
          >
            ☆
          </span>
        );
      }
    }
    return star;
  };
  return <div>{stars(rating)}</div>;
};
export default Movie;
