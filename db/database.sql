CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE lenguajes (
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    year INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
)

DESCRIBE lenguajes;

INSERT INTO lenguajes VALUES
(1, 'JavaScript',1995 ),
(2, 'Java',1995 ),
(3, 'C', 1972),
(4, 'C++', 1979)