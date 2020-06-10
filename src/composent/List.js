import react from "react";
import Movie from "./Movie.js";

const list=props=>{
    const MoviesArray =props.movies;
    const moviesItems=MoviesArray.map((item)=>
    <Movie{..item}/>
    );
    return(
        <div className="list">{moviesItems</div>
    );
}
export default List;