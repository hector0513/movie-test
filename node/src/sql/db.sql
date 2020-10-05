CREATE TABLE IF NOT EXISTS Movies (
    movieid int NOT NULL AUTO_INCREMENT,
    title varchar(50) NOT NULL,
    description varchar(1000) NOT NULL,
    published timestamp NOT NULL,
    enabled boolean NOT NULL,
    PRIMARY KEY(movieid))

CREATE TABLE IF NOT EXISTS Reviews (
    reviewid int NOT NULL AUTO_INCREMENT
    title varchar(50) NOT NULL,
    review varchar(1000) NOT NULL,
    author varchar(100) NOT NULL,
    published timestamp NOT NULL,
    enabled boolean NOT NULL
    FOREIGN KEY (movieid) REFERENCES Movies(movieid)
    PRIMARY KEY (`reviewid`, `movieid`))
