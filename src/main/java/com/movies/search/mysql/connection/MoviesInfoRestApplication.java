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

            /*
            moviesInfoService.save(new MoviesInfo("AVATAR: THE WAY OF THE WATER", "Sci-Fi",
                    "20th Century Studios", 92, 1.749f, 77, 1.749f, 2022));

             */

            System.out.println();

        };
    }

}
