-- Tables Relationships Exercise
-- Part I: One-to-One Relationship

-- Part I, Question 1
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE Customer_Profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INTEGER UNIQUE,
    FOREIGN KEY (customer_id)
        REFERENCES Customer(id)
        ON DELETE CASCADE
);

-- The UNIQUE constraint on customer_id guarantees that
-- each customer can have only one profile.

-- Part I, Question 2
INSERT INTO Customer (first_name, last_name)
VALUES
    ('John', 'Doe'),
    ('Jerome', 'Lalu'),
    ('Lea', 'Rive');

-- Part I, Question 3
-- Subqueries are used to find each customer's id.
INSERT INTO Customer_Profile (isLoggedIn, customer_id)
VALUES
    (
        TRUE,
        (SELECT id
         FROM Customer
         WHERE first_name = 'John'
             AND last_name = 'Doe')
    ),
    (
        FALSE,
        (SELECT id
         FROM Customer
         WHERE first_name = 'Jerome'
             AND last_name = 'Lalu')
    );

-- Part I, Question 4.1
-- INNER JOIN is appropriate because we only want customers
-- who have a profile and are logged in.
SELECT Customer.first_name
FROM Customer
INNER JOIN Customer_Profile
    ON Customer.id = Customer_Profile.customer_id
WHERE Customer_Profile.isLoggedIn = TRUE;

-- Part I, Question 4.2
-- LEFT JOIN keeps every customer, including Lea,
-- who does not have a profile.
SELECT
    Customer.first_name,
    Customer_Profile.isLoggedIn
FROM Customer
LEFT JOIN Customer_Profile
    ON Customer.id = Customer_Profile.customer_id;

-- Part I, Question 4.3
-- This counts customers explicitly marked as not logged in.
SELECT COUNT(*) AS not_logged_in_customers
FROM Customer
INNER JOIN Customer_Profile
    ON Customer.id = Customer_Profile.customer_id
WHERE Customer_Profile.isLoggedIn = FALSE;


-- Part II: Many-to-Many Relationship

-- Part II, Question 1
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

-- Part II, Question 2
INSERT INTO Book (title, author)
VALUES
    ('Alice In Wonderland', 'Lewis Carroll'),
    ('Harry Potter', 'J.K Rowling'),
    ('To kill a mockingbird', 'Harper Lee');

-- Part II, Question 3
-- CHECK guarantees that a student's age can never be greater than 15.
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);

-- Part II, Question 4
INSERT INTO Student (name, age)
VALUES
    ('John', 12),
    ('Lera', 11),
    ('Patrick', 10),
    ('Bob', 14);

-- Part II, Question 5
-- Library is the junction table between Book and Student.
-- The two foreign keys together form the composite primary key.
CREATE TABLE Library (
    book_fk_id INTEGER,
    student_fk_id INTEGER,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id)
        REFERENCES Book(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id)
        REFERENCES Student(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Part II, Question 6
-- Subqueries retrieve the correct book_id and student_id.
-- ISO date format (YYYY-MM-DD) avoids date-format ambiguity.
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES
    (
        (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
        (SELECT student_id FROM Student WHERE name = 'John'),
        '2022-02-15'
    ),
    (
        (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
        (SELECT student_id FROM Student WHERE name = 'Bob'),
        '2021-03-03'
    ),
    (
        (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
        (SELECT student_id FROM Student WHERE name = 'Lera'),
        '2021-05-23'
    ),
    (
        (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
        (SELECT student_id FROM Student WHERE name = 'Bob'),
        '2021-08-12'
    );

-- Part II, Question 7.1
SELECT *
FROM Library;

-- Part II, Question 7.2
SELECT
    Student.name,
    Book.title
FROM Library
INNER JOIN Student
    ON Library.student_fk_id = Student.student_id
INNER JOIN Book
    ON Library.book_fk_id = Book.book_id;

-- Part II, Question 7.3
SELECT AVG(Student.age) AS average_age
FROM Library
INNER JOIN Student
    ON Library.student_fk_id = Student.student_id
INNER JOIN Book
    ON Library.book_fk_id = Book.book_id
WHERE Book.title = 'Alice In Wonderland';

-- Part II, Question 7.4
-- Prediction:
-- Deleting John will automatically remove John's Library record
-- because student_fk_id was created with ON DELETE CASCADE.
DELETE FROM Student
WHERE name = 'John';

-- Actual check:
-- John's borrowing record should no longer appear.
SELECT *
FROM Library;
