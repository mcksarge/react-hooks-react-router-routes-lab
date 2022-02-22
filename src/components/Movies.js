import React from "react";
import { movies } from "../data";

function Movies() {

  const renderMovie = movies.map((movie, i) => {
    return (
      <div key={i}>
        <h3>Title: {movie.title}</h3>
        <h4>Time: {movie.time}</h4>
        <ul>
          {movie.genres.map((genre, i) => {
            return (
              <li key={i}>{genre}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovie}
    </div>
  );
}

export default Movies;
