-- -- CREATE SEQUENCE voyage_id;
--
-- CREATE TABLE voyages (
--   id SERIAL PRIMARY KEY,
--   semester VARCHAR(7),
--   year INTEGER CHECK (year > 1962),
--   tagline VARCHAR,
--   ports_of_call INTEGER,
--   ship_id INTEGER REFERENCES ships (id),
--   academic_sponsor INTEGER REFERENCES academic_sponsors (id)
-- );
--
--
--

-- -- INSERT INTO voyages VALUES (1, 'Spring', 2012, 'Central & South America Exploration', 7, 5, 4);
-- INSERT INTO voyages VALUES (2, 'Summer', 2012, 'North Africa & Europe', 9, 5, 4);
-- INSERT INTO voyages VALUES (3, 'Fall', 2012, 'Atlantic Exploration', 14, 5, 4);
-- INSERT INTO voyages VALUES (4, 'Spring', 2013, 'Around the World', 12, 5, 4);
-- INSERT INTO voyages VALUES (5, 'Summer', 2013, 'Europe and North America', 10, 5, 4);
-- INSERT INTO voyages VALUES (6, 'Fall', 2013, 'Atlantic Exploration', 15, 5, 4);

INSERT INTO voyages VALUES (7, 'Spring', 2014, 'Around the World', 16, 5, 4);
