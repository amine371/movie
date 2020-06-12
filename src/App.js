import React, { useState } from "react";

import { moviesData } from "./Components/moviesData";
import Search from "./Components/SearchMovie/Search";
import MoviesList from "./Components/MoviesList";
import AddMovie from "./Components/AddMovie/AddMovie";

import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(1);

  const addMovie = e => {
    e.preventDefault();
    let newMovie = {
      name: name,
      rating: rating,
      image: image,
      date: date,
      description: description
    };
    return setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">
      <Search
        setNameSearch={setNameSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}
      />
      <MoviesList
        moviesData={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <AddMovie
        addMovie={addMovie}
        setName={setName}
        setRating={setRating}
        setImage={setImage}
        setDate={setDate}
        setDescription={setDescription}
      />
    </div>
  );
}

export default App;
