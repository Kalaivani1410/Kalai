CREATE DATABASE mydb;
USE mydb;

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
