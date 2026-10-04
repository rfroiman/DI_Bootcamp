-- Daily Challenge - SQL Puzzle
-- Predictions before execution:
-- Q1: 0
-- Q2: 2
-- Q3: 0
-- Q4: 2

CREATE TABLE FirstTab (
    id INTEGER,
    name VARCHAR(10)
);

INSERT INTO FirstTab VALUES
    (5, 'Pawan'),
    (6, 'Sharlee'),
    (7, 'Krish'),
    (NULL, 'Avtaar');

SELECT * FROM FirstTab;

CREATE TABLE SecondTab (
    id INTEGER
);

INSERT INTO SecondTab VALUES
    (5),
    (NULL);

SELECT * FROM SecondTab;

-- Q1
-- Predicted output: 0
SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id IS NULL
);

-- Q2
-- Predicted output: 2
SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id = 5
);

-- Q3
-- Predicted output: 0
SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
);

-- Q4
-- Predicted output: 2
SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id IS NOT NULL
);
