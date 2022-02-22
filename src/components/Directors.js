import React from "react";
import { directors } from "../data";

function Directors() {

  const renderDirectors = directors.map((director, i) => {
    return (
      <div key={i}>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map((movie, i) => {
            return (
              <li key={i}>{movie}</li>
            )
          })}
        </ul>
      </div>
    )
  })


  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  )
}

export default Directors;
