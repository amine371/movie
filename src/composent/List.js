import React from 'react';
import MovieCard from './MovieCard/MovieCard';
const MoviesList = ({ moviesData, ratingSearch, nameSearch }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {moviesData
        .filter(
          (el) =>
            el.rating >= ratingSearch &&
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim())
        )
        .map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}
    </div>
  );
};
export default MoviesList;
