package com.movies.search.mysql.connection.service;

import com.movies.search.mysql.connection.dao.MoviesInfo;
import com.movies.search.mysql.connection.repository.Person;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface MoviesInfoService {
    Page<MoviesInfo> getMoviesInfoList();
}
