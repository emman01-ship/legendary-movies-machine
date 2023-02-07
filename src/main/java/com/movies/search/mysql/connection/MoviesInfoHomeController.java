package com.movies.search.mysql.connection;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MoviesInfoHomeController {

    @RequestMapping(value = "/")
    public String index(){
        return "index";
    }

}
