import React, { Component } from 'react';
import { useState } from 'react';
import Recommend from '../api/recommendMovies';


function RecommendMovie(allMovies){
  //`http://localhost:8080/api/moviesInfoes?size=${allMovies.numberOfMovies}`


  const initialvalues = {genre: "", year: "", score: ""};
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    
  }

  const handleSubmit = (evt) => {
    //prevents page from getting refreshed
    evt.preventDefault();
    console.log(formValues.genre);
    //setFormErrors(validate(formValues));
    // console.log(rec);
    // console.log(evt.target.genre.value);
  }

  // const validate = (values) => {
  //   const errors = {}
    
  // }

  return (
      <div className="container">
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        <form onSubmit={handleSubmit}>
          <h1>Movie Recommend Page</h1>
          <div className="ui divider"></div>
          <div className="ui form"> 
            <div className="field">
              <label>
              Preferred movie genre:  
              <input
                type="text"
                name="genre"
                placeholder="genre"
                value={formValues.genre}
                onChange={handleChange}
              />
            </label>
            </div>
          <br></br>
          <div className="field">
            <label>
              Preferred year range:  
              <input
                type="text"
                name="year"
                placeholder="year"
                value={formValues.year}
                onChange={handleChange}
              />
            </label>
          </div>
          <br></br>
          <div className="field">
            <label>
              Preferred Rotten Tomatoes Score 0-100: 
              <input
                type="text"
                name="score"
                placeholder="score"
                value={formValues.score}
                onChange={handleChange}
              />
            </label>
          </div>
          <br></br>
          <input
            type="submit"
            value="Submit"
          />
          </div>
          
        </form>
      </div>
    )
}

export default RecommendMovie;