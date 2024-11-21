CREATE DATABASE mydb;
USE mydb;

show tables

CREATE TABLE users (
   id INT AUTO_INCREMENT PRIMARY KEY,
   firstName VARCHAR(255) NOT NULL,
   middleName VARCHAR(255),
   lastName VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL,
   securityQuestion VARCHAR(255) NOT NULL,
   answer VARCHAR(255) NOT NULL
);
select * from users;

truncate table users;

Drop table users;

CREATE TABLE jobs (
    job_id INT AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(255) NOT NULL,
    job_location VARCHAR(100) NOT NULL,
    number_of_openings INT NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    job_description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from jobs;
Truncate table jobs;

CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO admins (username, password) VALUES ('kalai', 'kalai14');


select * from admins;
truncate table admins;


