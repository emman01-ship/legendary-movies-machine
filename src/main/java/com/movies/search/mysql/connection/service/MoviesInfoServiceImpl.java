package com.movies.search.mysql.connection.service;

import com.movies.search.mysql.connection.dao.MoviesInfo;
import com.movies.search.mysql.connection.repository.MoviesInfoRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@RequiredArgsConstructor
@Service
public class MoviesInfoServiceImpl implements MoviesInfoService {
    @Autowired
    MoviesInfoRepository moviesInfoRepository;


    @Override
    public Page<MoviesInfo> getMoviesInfoList(){
        Pageable allPages = PageRequest.of(0, 1000);
        return moviesInfoRepository.findAll(allPages);
    }

}
