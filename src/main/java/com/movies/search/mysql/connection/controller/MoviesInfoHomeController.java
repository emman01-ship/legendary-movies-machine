package com.movies.search.mysql.connection.controller;

import com.movies.search.mysql.connection.dao.MoviesInfo;
import com.movies.search.mysql.connection.service.MoviesInfoService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

@ComponentScan("com.movies.search.mysql.connection.service")
@RequiredArgsConstructor
@RestController
public class MoviesInfoHomeController implements ErrorController {

    private final MoviesInfoService moviesInfoService;

    /*
    @RequestMapping(value = "/")
    public String index(){
        return "index";
    }

     */

    /*
    @GetMapping(value="")
    public String hello(ModelMap Model) {
        return "list";
    }

     */

    @RequestMapping("/error")
    @ResponseBody
    String error(HttpServletRequest request) {
        return "<h1>Error occurred</h1>";
    }
    public String getErrorPath() {
        return "/error";
    }

    @GetMapping("/moviesInfo/all")
    @ResponseStatus(HttpStatus.OK)
    public Page<MoviesInfo> getMoviesInfoList(){
            return moviesInfoService.getMoviesInfoList();
    }

}
