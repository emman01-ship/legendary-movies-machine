package com.movies.search.mysql.connection.service;

import com.movies.search.mysql.connection.dao.MoviesInfo;
import com.movies.search.mysql.connection.repository.MoviesInfoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MoviesInfoServiceImpl implements MoviesInfoService {
    @Autowired
    MoviesInfoRepository moviesInfoRepository;

    @Override
    public void save(MoviesInfo moviesInfo){
        moviesInfoRepository.save(moviesInfo);
    }

    @Override
    public List<MoviesInfo> getMoviesInfoList(){
        return moviesInfoRepository.findAll();
    }

}
