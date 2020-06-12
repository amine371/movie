import React, { useState } from "react";

import {Container } from "./Components/Container";
import Search from "./Components/SearchMovie/Search";
import List from "./Components/List";
import "./App.css";

function App() {
  const [List, setList] = useState(Container);
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
    return setList([...List, newMovie]);
  };

  return (
    <div className="App">
      <Search
        setNameSearch={setNameSearch}
        setRatingSearch={setRatingSearch}
        ratingSearch={ratingSearch}
      />
      <List
        Container={List}
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
