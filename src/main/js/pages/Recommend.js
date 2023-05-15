import React, { Component } from 'react';
import { useState } from 'react';
import Recommend from '../api/recommendMovies';


const RecommendMovie = (allMovies) => {
  //console.log(allMovies.numberOfMovies);

  const results = async () => {
    const response = await fetch(
      `http://localhost:8080/api/moviesInfoes?size=${allMovies.numberOfMovies}`
    );
    const data = await response.json();
    const result = data._embedded;
    
    //console.log(result);

    return result;
  }

  const [state, setMovies] = useState(
    {
      genre: "",
      year: "",
      score: "",
      money: "",
      moviesList: [results()]
    }
  );

  function handleChange(evt) {
    const value = evt.target.value;
    setMovies({
      ...state,
      [evt.target.name]: value
    });
  }

  function populateMovies(){
    fetch(`http://localhost:8080/api/moviesInfoes?size=${allMovies.numberOfMovies}`)
        .then((res) =>  
        res.json()).then((data) => 
        setMovies((prevState) => {
          return(
            {
              ...prevState,
              moviesList: data._embedded
            }
          )
        }));
        // console.log(state);
        // console.log("yes");
        // console.log("yes");
  }

  const handleSubmit = (evt) => {
    //populateMovies();
    console.log(state);
    evt.preventDefault();

    // async function fetchData() {
    //   const response = await fetch(
    //     `http://localhost:8080/api/moviesInfoes?size=${allMovies.numberOfMovies}`
    //   );
    //   const data = await response.json();
    //   const results = data._embedded;
    //   setMovies(
    //     (prevState) => {
    //       return(
    //         {
    //           ...prevState,
    //           moviesList: results
    //         }
    //       )
    //     }
    //   );
    // }
    //fetchData();
  

    var rec = new Recommend(evt.target.genre.value,
      evt.target.year.value, 
      evt.target.score.value, 12345,
      state.moviesList);
    // console.log(rec);
    // console.log(evt.target.genre.value);
  }

  return (
      <form onSubmit={(e)=> handleSubmit(e)}>
        <label>
          Preferred movie genre:  
          <input
            type="text"
            name="genre"
            value={state.genre}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Preferred year range:  
          <input
            type="text"
            name="year"
            value={state.year}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Preferred Rotten Tomatoes Score 0-100: 
          <input
            type="text"
            name="score"
            value={state.score}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <input
          type="submit"
          value="Submit"
        />
      </form>
    )
}

export default RecommendMovie;