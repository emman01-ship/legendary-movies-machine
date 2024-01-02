package com.movies.search.mysql.connection.service;

import com.movies.search.mysql.connection.service.MoviesInfoService;
import com.movies.search.mysql.connection.service.MoviesInfoServiceImpl;
import com.movies.search.mysql.connection.sql.JavaMysql;
import org.springframework.context.annotation.*;

import java.sql.SQLException;

@ComponentScan("com.movies.search.mysql.connection")
@Configuration
public class MoviesInfoServiceConfig {
    @Bean
    @Primary
    public MoviesInfoService moviesInfoService(){
        return new MoviesInfoServiceImpl();

    }
    @Bean
    public JavaMysql javaMysql() throws SQLException, ClassNotFoundException {
        return new JavaMysql();
    }
}
