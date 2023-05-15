package com.movies.search.mysql.connection.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MoviesInfoHomeController implements ErrorController {

    @RequestMapping(value = "/")
    public String index(){
        return "index";
    }

    @GetMapping(value="")
    public String hello(ModelMap Model) {
        return "list";
    }

    @RequestMapping("/error")
    @ResponseBody
    String error(HttpServletRequest request) {
        return "<h1>Error occurred</h1>";
    }
    public String getErrorPath() {
        return "/error";
    }

}
