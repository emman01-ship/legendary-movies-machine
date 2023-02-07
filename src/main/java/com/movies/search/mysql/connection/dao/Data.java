package com.movies.search.mysql.connection.dao;

import com.movies.search.mysql.connection.dao.MoviesInfo;

import java.io.*;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class Data {

    public static void main(String args[]){

        String url = "jdbc:mysql://localhost:3306/data";
        String user = "root";
        String password = "root";

        //load driver
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            try {
                //returns Connection objection
                Connection connection = DriverManager.getConnection(url, user, password);
                System.out.println("Connection is Successful to the database "+url);
                System.out.println();
                System.out.println();
                //create query to database
                String query = "SELECT * FROM movies";
                List<MoviesInfo> moviesList = new ArrayList<>();
                Statement statement = connection.createStatement();
                ResultSet resultSet = statement.executeQuery(query);
                while(resultSet.next()){

                    MoviesInfo moviesInfo = new MoviesInfo();

                    moviesInfo.setFilm(resultSet.getString("Film"));
                    moviesInfo.setGenre(resultSet.getString("Genre"));
                    moviesInfo.setLeadStudio(resultSet.getString("Lead Studio"));
                    moviesInfo.setAudienceScore(resultSet.getInt("Audience Score %"));
                    moviesInfo.setProfitability(resultSet.getFloat("Profitability"));
                    moviesInfo.setRottenTomatoesScore(resultSet.getInt("Rotten Tomatoes %"));
                    moviesInfo.setWorldWideGross(resultSet.getFloat("WorldWide Gross"));
                    moviesInfo.setYear(resultSet.getInt("Year"));

                    moviesList.add(moviesInfo);


                    System.out.format("%s, %s, %s, %d, %f, %d, %f, %d\n", moviesInfo.getFilm(), moviesInfo.getGenre(),
                            moviesInfo.getLeadStudio(), moviesInfo.getAudienceScore(),
                            moviesInfo.getProfitability(), moviesInfo.getRottenTomatoesScore(),
                            moviesInfo.getWorldWideGross(), moviesInfo.getYear());

                }
                resultSet.close();

                //Serialize the object
                try {
                    FileOutputStream fileOutputStream = new FileOutputStream("moviesInfo.ser");
                    ObjectOutputStream out = new ObjectOutputStream(fileOutputStream);
                    out.writeObject(moviesList);
                    out.close();
                    fileOutputStream.close();
                } catch (IOException ioException) {
                    ioException.printStackTrace();
                }

            } catch (SQLException e) {
                throw new RuntimeException(e);
            }
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

}
