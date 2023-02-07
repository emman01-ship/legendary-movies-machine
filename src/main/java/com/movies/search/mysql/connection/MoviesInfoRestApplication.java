package com.movies.search.mysql.connection;

import com.movies.search.mysql.connection.dao.MoviesInfo;

import com.movies.search.mysql.connection.service.MoviesInfoService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MoviesInfoRestApplication {

    public static void main(String[] args) {
        SpringApplication.run(MoviesInfoRestApplication.class, args);
    }


    /*
    @Bean
    public Connection moviesHelper(){
        String url = "jdbc:mysql://localhost:3306/data";
        String user = "root";
        String password = "root";
        Connection connection = null;
        //load driver
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            try {
                //returns Connection objection
                connection = DriverManager.getConnection(url, user, password);


            } catch (SQLException e) {
                throw new RuntimeException(e);
            }
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        return connection;
    }

     */

    @Bean
    public CommandLineRunner demo(MoviesInfoService moviesInfoService) {
        return (args) -> {
            MoviesInfo moviesInfo = new MoviesInfo();
            moviesInfo.setFilm("AVATAR: THE WAY OF THE WATER");
            moviesInfo.setGenre("Sci-Fi");
            moviesInfo.setLeadStudio("20th Century Studios");
            moviesInfo.setAudienceScore(92);
            moviesInfo.setWorldWideGross(1.749f);
            moviesInfo.setRottenTomatoesScore(77);
            moviesInfo.setProfitability(1.749f);
            moviesInfo.setYear(2022);

            moviesInfoService.save(moviesInfo);

        };
    }

}
