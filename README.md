Required versions: 

Mysql: mysql  Ver 8.0.33 for macos12.6 on x86_64 (Homebrew)

IntelliJ : IntelliJ IDEA 2022.3 (Community Edition)

VS CODE: Version: 1.88.1

Npm : 10.5.0

Java: openjdk 20.0.1 2023-04-18
OpenJDK Runtime Environment Homebrew (build 20.0.1)

OpenJDK 64-Bit Server VM Homebrew (build 20.0.1, mixed mode, sharing)

React: "react": "^18.2.0"

Start front end run command: webpack --watch

* make sure to run npm install to load all modules

SQL Notes

1. Download CSV file  into desired directory
2. Start mysql server and create a database 
3. Create table inside database with corresponding column names and types

create table movies (Film bigint, Genre varchar(255), Genre varchar(255), `Lead Studio` varchar(255), `Audience Score %` varchar(255), Profitability bigint, `Rotten Tomatoes` int, `WorldWide Gross` bigint, Year int);

* column names with spaces should be inserted inside back-ticks as for example "Lead Studio" but with back-ticks

3. Enter command

set global local_infile=true;

* When mysql server is started, it is with the —secure-file-priv option on which limits directories which user can load files using ‘load data file’ command

4. Exit mysql server then login again using local infile option

mysql --local_infile=1 -u root

5. Enter previously created table and run command to load csv file

load data local infile 'movies2.csv' into table example fields terminated by ',' enclosed by '"' lines terminated by '\n' ignore 1 rows;
