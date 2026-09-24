CREATE DATABASE Hollywood;

CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);

SELECT * FROM actors;

SELECT COUNT(*) FROM actors;

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('John',null,null, 1);

--ERROR:  null value in column "last_name" of relation "actors" violates not-null constraint
--Failing row contains (3, John, null, null, 1). 

--ERRO:  null value in column "last_name" of relation "actors" violates not-null constraint
--SQL state: 23502
--Detail: Failing row contains (3, John, null, null, 1).