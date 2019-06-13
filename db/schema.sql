-- CREATE DATABASE burgers_db;
-- USE burgers_db;

CREATE DATABASE ejwacvohhduzu5m4;
USE ejwacvohhduzu5m4;

CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT,
  burger_name VARCHAR(200),
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

SELECT * FROM burgers;

-- DROP TABLE burgers;
