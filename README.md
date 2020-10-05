# movie-test
Movie API with MySQL and Docker Container

Endpoints:

POST {baseur}:{port}/disable-movie -> Disables movie 

POST {baseur}:{port}/new-movie -> Create a new movie

GET {baseurl}:{port}/get-reviews/:title -> Gets reviews from a given movie title

GET {baseurl}:{port}/get-movies/:limit/:sort -> Filters movies with a given configuration and retrieves them

GET {baseurl}:{port}/get-movie/:title -> Gets movie from a given movie title

POST {baseurl}:{port}/new-review-movie ->  Create a new review movie from a given movie title


Docker:
Deploys the API on port $PORT (External) and $PORT (Internal)
Deploys MySql on port 3307 (External) and 3306 (Internal). Creates database "database_development"
Deploys MySql test on port 3308 (External) and 3306 (Internal). Creates database "database_test"
Deploys Adminer on port 6050 (External) and 8080 (Internal)
.env_example 
DB_DATABASE=database_development
DB_DATABASE_TEST=database_test
DB_PASSWORD=password
PORT_APP=3000
PORT_TEST=3001

Database:
Default user: root or $DB_DATABASE
Default password: password or $DB_PASSWORD
