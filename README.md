Title: Legendary Movie Machine

Project Description: 

A Full Stack project using Spring Boot and React.js with a MySql database. 
Application has 3 pages, A plain homepage with a greeting, A table to look at the available movies 
with quick descriptions and recommend page with 3 set criteria the user can enter in order to have a list of movies recommended from the table. 
Project is meant to get a solid foundation on full stack development. From front end areas such page routing, displaying large amounts of data on a single page, 
and database manipulation. In the back end setting up endpoints that allow interactions with the database and other possible services

Mysql is installed locally using home brew. Front and Back end run on the same port localhost:8080. This made possible by the 
bundling tool webpack which bundles all the React files into a bundle.js that is ran in a html file in the java back end
which is loaded up by the Spring Boot thymeleaf template generator.

Project is right now in its base stage with future additions in plan such as interacting with other services and making the 
homepage much more interactable.

Project Learning Material:

Setting up Back End

https://spring.io/guides/tutorials/react-and-spring-data-rest/

Setting up React with Java 

https://spring.io/guides/tutorials/react-and-spring-data-rest https://springjava.com/spring-boot/spring-boot-with-jpa-entity/

Setting up Spring with Mysql

https://spring.io/guides/gs/accessing-data-mysql

How to set up project after repo download:

**********SQL Notes

1.  open project in same directory as movies.csv file
2.  Enter mysql.server start to start mysql server and create a database,
3. Create table inside database with corresponding column names and types

create table movies (Film bigint, Genre varchar(255), Genre varchar(255), `Lead Studio` varchar(255), `Audience Score %` varchar(255), Profitability bigint, `Rotten Tomatoes` int, `WorldWide Gross` bigint, Year int);

* column names with spaces should be inserted inside back-ticks, for example "Lead Studio" but with back-ticks

3. Enter command

set global local_infile=true;

* When mysql server is started, it is with the —secure-file-priv option on which limits directories which user can load files using ‘load data file’ command

4. Exit mysql server then login again using local infile option

mysql --local_infile=1 -u root

5. Enter previously created table and run command to load csv file

load data local infile 'movies.csv' into table example fields terminated by ',' enclosed by '"' lines terminated by '\n' ignore 1 rows;


**********Start backend

* before running intellij make sure mysql server is running with command 'mysql.server start'

**********Start front end: run command: webpack --watch

* make sure to run npm install first to load all modules

Required versions: 

Mysql: mysql  Ver 8.0.33 for macos12.6 on x86_64 (Homebrew)

IntelliJ : IntelliJ IDEA 2022.3 (Community Edition)

VS CODE: Version: 1.88.1

Npm : 10.5.0

Java: openjdk 20.0.1 2023-04-18
OpenJDK Runtime Environment Homebrew (build 20.0.1)

OpenJDK 64-Bit Server VM Homebrew (build 20.0.1, mixed mode, sharing)

React: "react": "^18.2.0"
