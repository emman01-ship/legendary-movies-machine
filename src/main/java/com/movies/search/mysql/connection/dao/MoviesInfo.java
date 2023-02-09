package com.movies.search.mysql.connection.dao;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "movies")
public class MoviesInfo implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "Film")
    private String film;
    @Column(name = "Genre")
    private String genre;
    @Column(name = "Lead Studio")
    private String leadStudio;
    @Column(name = "Audience Score %")
    private Integer audienceScore;
    @Column(name = "Profitability")
    private Float profitability;
    @Column(name = "Rotten Tomatoes %")
    private Integer rottenTomatoesScore;
    @Column(name = "WorldWide Gross")
    private Float worldWideGross;
    @Column(name = "Year")
    private Integer year;

    public MoviesInfo(){

    }

    public MoviesInfo(String film, String genre, String leadStudio, Integer audienceScore,
                      Float profitability, Integer rottenTomatoesScore, Float worldWideGross, Integer year){

        this.film = film;
        this.genre = genre;
        this.leadStudio = leadStudio;
        this.audienceScore = audienceScore;
        this.profitability = profitability;
        this.rottenTomatoesScore = rottenTomatoesScore;
        this.worldWideGross = worldWideGross;
        this.year = year;

    }

    public Long getId() {
        return id;
    }
    public String getFilm(){
        return film;
    }

    public MoviesInfo setFilm(String film) {
        this.film =film;
        return this;
    }

    public String getGenre(){
        return genre;
    }

    public MoviesInfo setGenre(String genre) {
        this.genre = genre;
        return this;
    }

    public String getLeadStudio(){
        return leadStudio;
    }

    public MoviesInfo setLeadStudio(String leadStudio) {
        this.leadStudio = leadStudio;
        return this;
    }

    public Float getProfitability() {
        return profitability;
    }

    public MoviesInfo setProfitability(Float profitability) {
        this.profitability = profitability;
        return this;
    }

    public Integer getRottenTomatoesScore() {
        return rottenTomatoesScore;
    }

    public MoviesInfo setRottenTomatoesScore(Integer rottenTomatoesScore) {
        this.rottenTomatoesScore = rottenTomatoesScore;
        return this;
    }

    public Float getWorldWideGross() {
        return worldWideGross;
    }

    public MoviesInfo setWorldWideGross(Float worldWideGross) {
        this.worldWideGross = worldWideGross;
        return this;
    }

    public Integer getAudienceScore() {
        return audienceScore;
    }

    public MoviesInfo setAudienceScore(Integer audienceScore) {
        this.audienceScore = audienceScore;
        return this;
    }

    public Integer getYear() {
        return year;
    }

    public MoviesInfo setYear(Integer year) {
        this.year = year;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MoviesInfo moviesInfo = (MoviesInfo) o;
        return Objects.equals(film, moviesInfo.film) &&
                Objects.equals(genre, moviesInfo.genre) &&
                Objects.equals(leadStudio, moviesInfo.leadStudio) &&
                Objects.equals(profitability, moviesInfo.profitability) &&
                Objects.equals(rottenTomatoesScore, moviesInfo.rottenTomatoesScore) &&
                Objects.equals(worldWideGross, moviesInfo.worldWideGross) &&
                Objects.equals(audienceScore, moviesInfo.audienceScore) &&
                Objects.equals(year, moviesInfo.year);
    }

    @Override
    public int hashCode() {

        return Objects.hash(film, genre, leadStudio, profitability, rottenTomatoesScore,
                worldWideGross, audienceScore, year);
    }

    @Override
    public String toString() {
        return "MoviesInfo{" +
                "film=" + film +
                ", genre='" + genre + '\'' +
                ", leadStudio='" + leadStudio + '\'' +
                ", profitability='" + profitability + '\'' +
                ", rottenTomatoesScore='" + rottenTomatoesScore + '\'' +
                ", worldWideGross='" + worldWideGross + '\'' +
                ", audienceScore='" + audienceScore + '\'' +
                ", year='" + year + '\'' +
                '}';
    }
}