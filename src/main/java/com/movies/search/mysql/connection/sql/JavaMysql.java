package com.movies.search.mysql.connection.sql;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class JavaMysql {

    private String myDriver ="com.mysql.cj.jdbc.Driver";
    private String myUrl = "jdbc:mysql://localhost:3306/data";

    private Connection conn = DriverManager.getConnection(myUrl, "root","root" );

    public JavaMysql() throws ClassNotFoundException, SQLException {
        Class.forName(myDriver);
    }

    public List<String> getMovies(String year, String genre, String tomatoScore) throws SQLException {
        /*
            make query to sql
         */
        String query = String.format("select * FROM movies where " +
                "`year` >= %s and " +
                "`genre` = '%s' and " +
                "`Rotten Tomatoes` >= %s;", year, genre, tomatoScore);


        Statement st = conn.createStatement();
        ResultSet rs = st.executeQuery(query);

        List<String> moviesList = new ArrayList<>();
        while (rs.next()){
           String name = rs.getString("Film");
           String date = rs.getString("Year");
           String score = rs.getString("Rotten Tomatoes");

           String movie = String.format("%s released on %s with a score of %s", name, date, score);
           moviesList.add(movie);

        }
        st.close();
        return moviesList;
    }

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        JavaMysql javaMysql = new JavaMysql();
        System.out.print(javaMysql.getMovies("2005", "Romance", "60"));
    }
}
