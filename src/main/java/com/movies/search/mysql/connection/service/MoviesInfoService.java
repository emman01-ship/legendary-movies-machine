package com.movies.search.mysql.connection.service;

import com.movies.search.mysql.connection.dao.MoviesInfo;
import com.movies.search.mysql.connection.repository.Person;

import java.util.List;

public interface MoviesInfoService {
    void save(MoviesInfo moviesInfo);
    List<MoviesInfo> getMoviesInfoList();
}
