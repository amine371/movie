import react from "react";
import MovieCard from './MovieCard/MovieCard';

const List = ({ moviesData, ratingSearch, nameSearch }) => {
    );
    return(
{moviesData
        .filter(
          (el) =>
            el.rating >= ratingSearch &&
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim())
        )
        .map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}
export default List;
