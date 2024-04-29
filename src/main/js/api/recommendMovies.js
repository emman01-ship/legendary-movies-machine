import React from 'react';

//const [allMovies, setMovies] = useState({});

class Recommend {
    constructor(genre, year, score, money, movies){
        this.genre = genre;
        this.year = year;
        this.score = score;
        this.money = money;
        this.movies = movies;

    }
}

export default Recommend;