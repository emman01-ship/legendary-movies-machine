package com.movies.search.mysql.connection.service;

import com.movies.search.mysql.connection.service.MoviesInfoService;
import com.movies.search.mysql.connection.service.MoviesInfoServiceImpl;
import org.springframework.context.annotation.*;

@ComponentScan("com.movies.search.mysql.connection")
@Configuration
public class MoviesInfoServiceConfig {
    @Bean
    @Primary
    public MoviesInfoService moviesInfoService(){
        return new MoviesInfoServiceImpl();

    }
}
