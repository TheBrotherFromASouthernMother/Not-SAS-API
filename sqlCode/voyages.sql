-- CREATE SEQUENCE voyage_id;

-- CREATE TABLE voyages (
--   id SERIAL PRIMARY KEY,
--   semester VARCHAR(7),
--   year VARCHAR(4),
--   countries INTEGER,
--   ship TEXT
-- )


-- INSERT INTO voyages VALUES (1, 'Fall', '2012', 14, 'MV Explorer');

-- ALTER TABLE voyages ADD COLUMN name TEXT;
--
-- UPDATE voyages SET name = 'Atlantic Exploration' WHERE id = 1;

--
-- ALTER TABLE voyages ADD COLUMN sponsor VARCHAR(60);
--
-- UPDATE voyages SET sponsor = 'University of Virginia' WHERE id = 1;


INSERT INTO VOYAGES VALUES (2, 'Summer', '2012', 9, 'MV Explorer', 'North Africa & Europe', 'University of Virginia');
