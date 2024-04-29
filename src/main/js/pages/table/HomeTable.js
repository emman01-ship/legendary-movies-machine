import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TablePagination } from 'react-pagination-table';

/* react-bootstrap-table-next has dependency conflicts
      it is deprecicated. The current version of react is @18
      and does have table-next
      currently not interested in finding new table to use 

*/

const Header = ["Film", "Genre", "Year"];

export default function HomeTable(){
    
    /*
        fetch the movies asynchronously 
        using usestate and axios call
    */

   const [allData, setData] = useState("");

    const getMovies = async() =>{
   
        const result = await axios(
            `http://localhost:8080/moviesInfo/all`,
        );

        const allMovies = result.data.content;
        const allMoviesSize = result.data.content.length;

        setData({movies: allMovies, numberOfmovies: allMoviesSize});
    }

    useEffect(() =>{
        getMovies();
       },[]);

    return (
            <div>
                {(allData.movies || []).length > 0 ? (
				<TablePagination
                title="TablePagination"
                subTitle="Sub Title"
                headers= {Header}
                data = {allData.movies}
                columns="film.genre.year"
                perPageItemCount={ 5 }
                totalCount={ allData.numberOfmovies }
                arrayOption={ [["size", 'all', ' ']] }
            />) : (`No items to render... :(`)}
            </div>
    )
}
