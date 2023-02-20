package com.movies.search.mysql.connection.repository;

import com.movies.search.mysql.connection.dao.MoviesInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoviesInfoRepository extends PagingAndSortingRepository<MoviesInfo, Long> {
}
