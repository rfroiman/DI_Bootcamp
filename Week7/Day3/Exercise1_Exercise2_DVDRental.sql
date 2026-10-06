-- Exercise 1: DVD Rental

-- Exercise 1, Question 1
SELECT *
FROM language;

-- Exercise 1, Question 2
SELECT film.title, film.description, language.name AS language_name
FROM film
JOIN language ON film.language_id = language.language_id;

-- Exercise 1, Question 3
-- LEFT JOIN starts from language so all languages are returned, even without films.
SELECT film.title, film.description, language.name AS language_name
FROM language
LEFT JOIN film ON language.language_id = film.language_id;

-- Exercise 1, Question 4
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name)
VALUES ('The Last Journey'), ('Hidden City'), ('Ocean Adventure');

-- Exercise 1, Question 5
-- ON DELETE CASCADE automatically deletes reviews when their film is deleted.
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER NOT NULL REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER NOT NULL REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INTEGER CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Exercise 1, Question 6
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
    (1, 1, 'Great Movie', 9, 'I really enjoyed this movie.'),
    (2, 1, 'Interesting Story', 8, 'The story was very interesting.');

-- Exercise 1, Question 7
-- Prediction: the review linked to film_id 1 will be deleted automatically
-- because the foreign key uses ON DELETE CASCADE.
DELETE FROM new_film
WHERE id = 1;

-- Actual check: the review for film_id 1 should no longer appear.
SELECT *
FROM customer_review;


-- Exercise 2: DVD Rental

-- Exercise 2, Question 1
-- language_id 2 is a valid language in the dvdrental database.
UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2);

-- Exercise 2, Question 2
-- Show the foreign keys actually defined for customer.
SELECT
    tc.constraint_name,
    kcu.column_name,
    ccu.table_name AS referenced_table,
    ccu.column_name AS referenced_column
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
    AND tc.constraint_schema = kcu.constraint_schema
JOIN information_schema.constraint_column_usage AS ccu
    ON tc.constraint_name = ccu.constraint_name
    AND tc.constraint_schema = ccu.constraint_schema
WHERE tc.constraint_type = 'FOREIGN KEY'
    AND tc.table_name = 'customer';

-- Foreign-key values inserted into customer must reference existing rows
-- in the related tables, otherwise PostgreSQL rejects the INSERT.

-- Exercise 2, Question 3
-- This is easy here because no table created in this exercise depends on
-- customer_review, but dependencies should always be checked before DROP TABLE.
DROP TABLE customer_review;

-- Exercise 2, Question 4
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

-- Exercise 2, Question 5
SELECT DISTINCT
    film.film_id,
    film.title,
    film.replacement_cost
FROM film
JOIN inventory
    ON film.film_id = inventory.film_id
JOIN rental
    ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.replacement_cost DESC
LIMIT 30;

-- Exercise 2, Question 6.1
SELECT DISTINCT
    film.film_id,
    film.title,
    film.description
FROM film
JOIN film_actor
    ON film.film_id = film_actor.film_id
JOIN actor
    ON film_actor.actor_id = actor.actor_id
WHERE film.description ILIKE '%sumo%'
    AND actor.first_name = 'PENELOPE'
    AND actor.last_name = 'MONROE';

-- Exercise 2, Question 6.2
SELECT film_id, title, description, length, rating
FROM film
WHERE length < 60
    AND rating = 'R';

-- Exercise 2, Question 6.3
SELECT DISTINCT
    film.film_id,
    film.title,
    payment.amount,
    rental.return_date
FROM customer
JOIN rental
    ON customer.customer_id = rental.customer_id
JOIN payment
    ON rental.rental_id = payment.rental_id
JOIN inventory
    ON rental.inventory_id = inventory.inventory_id
JOIN film
    ON inventory.film_id = film.film_id
WHERE customer.first_name = 'MATTHEW'
    AND customer.last_name = 'MAHAN'
    AND payment.amount > 4.00
    AND rental.return_date >= '2005-07-28'
    AND rental.return_date < '2005-08-02';

-- Exercise 2, Question 6.4
SELECT DISTINCT
    film.film_id,
    film.title,
    film.description,
    film.replacement_cost
FROM customer
JOIN rental
    ON customer.customer_id = rental.customer_id
JOIN inventory
    ON rental.inventory_id = inventory.inventory_id
JOIN film
    ON inventory.film_id = film.film_id
WHERE customer.first_name = 'MATTHEW'
    AND customer.last_name = 'MAHAN'
    AND (
        film.title ILIKE '%boat%'
        OR film.description ILIKE '%boat%'
    )
ORDER BY film.replacement_cost DESC;
