-- \c semester_at_sea
-- CREATE TABLE ships (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(30),
--   service_start_year INTEGER CHECK (service_start_year > 1962),
--   service_end_year INTEGER CHECK (service_end_year > ships.service_start_year)
-- );

--
-- INSERT INTO ships VALUES (1, 'MS Seven Seas', 1963, 1966);

-- INSERT INTO ships VALUES (2, 'SS Ryndam', 1966, 1971);
-- INSERT INTO ships VALUES (3, 'SS Universe', 1971, 1995);
-- INSERT INTO ships VALUES (4, 'SS Universe Explorer', 1996, 2004);
-- INSERT INTO ships VALUES (5, 'MV Explorer', 2004, 2015);
-- INSERT INTO ships VALUES (6, 'MV World Odyssey', 2015, NULL);

-- 
-- ALTER TABLE ships RENAME ships_name TO ship_name;
