-- CREATE TABLE academic_sponsors (
--   id SERIAL PRIMARY KEY,
--   university_name VARCHAR(30),
--   sponsor_start_year INTEGER CHECK(sponsor_start_year > 1962),
--   sponsor_end_year INTEGER CHECK (sponsor_end_year >= sponsor_start_year)
-- );


INSERT INTO academic_sponsors VALUES (1, 'Chapman University', 1963, 1967);
INSERT INTO academic_sponsors VALUES(2, 'University of Colorado', 1976, 1981);
INSERT INTO academic_sponsors VALUES(3, 'University of Pittsburgh', 1981, 2006);
INSERT INTO academic_sponsors VALUES(4, 'University of Virginia', 2006, 2016);
INSERT INTO academic_sponsors VALUES(5, 'Colorado State University', 2016, NULL);
