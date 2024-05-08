import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './recommend.css';

import { findAllByTitle } from '@testing-library/react';
function Recommend(allMovies){
  //`http://localhost:8080/api/moviesInfoes?size=${allMovies.numberOfMovies}`


  const initialvalues = {genre: "", year: "", score: ""};
  const [formValues, setFormValues] = useState(initialvalues);
  const [suggestions, setSuggestions] = useState({movies: []});
  const movieRef = useRef();

  async function result(){
    const mov = await axios(
      `http://localhost:8080/record`,
      {
        params: {
          year: formValues.year,
          genre: formValues.genre,
          tomato: formValues.score
        }
      }
    );

    setSuggestions({movies: mov.data});

  }

  const listMovies = (results) => {
    return results.map(
      (result) => {
        <li>{result}</li>
      }
    );
  }

  useEffect(
    () => {
      console.log(suggestions.movies);
    }
  );
  
  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    
  }

  // function getSuggestion() {
  //      axios.get(
  //       `http://localhost:8080/record`, {
  //         params: {
  //           year: formValues.year,
  //           genre: formValues.genre,
  //           tomato: formValues.score
  //         }
  //       }
  //     ).then((res) => setSuggestions({movies: res.data}, () => { console.log(suggestions.movies)}));
  
  // }

  const handleSubmit = (evt) => {
    //prevents page from getting refreshed
    evt.preventDefault();
    result();
    //setSuggestions(result);
    //getSuggestion();
    console.log(formValues.genre);
   
    
    //setFormErrors(validate(formValues));
     //console.log(getSuggestion());
    // console.log(evt.target.genre.value);
  }

  /**
   * make axios call
   * get result which should be a list of strings
   * each string says the movie name, release date, and score
   * display results, some kind of pop up box
   */

  // const validate = (values) => {
  //   const errors = {}
    
  // }

  return (

      <div className="recommend">
        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
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
              Preferred year limit >=:  
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
        {(suggestions.movies || []).length > 0 ? 
          <h2 className='resultsbox'> {suggestions.movies.map((item) => 
          {return <ul className='results'>{item}</ul>})}</h2> : null}
      </div>
    )
}

export default Recommend;