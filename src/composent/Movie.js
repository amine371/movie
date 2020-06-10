import react from "react";
const Movie =props =>{
    const n = props.rating;
    const rating=[Array(n)].map((e,i)=><span className="play"></span>)
    return(
        <div className="Movie">
            <div>
                <img width="250" alt={props.title} src={props.poster}/>
                <h1>{props.title}({props.year})</h1>
            </div>
            <p className="rating">{rating}</p>
        </div>
    );
};
export default Movie;