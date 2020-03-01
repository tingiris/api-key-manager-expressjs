/***CREATING ALL TABLES*/
CREATE TABLE EMPLOYEE (
  UserId   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  Email        VARCHAR(100)                   NULL,
  Key          VARCHAR(100)                   NULL,
  CreationDate DATETIME                       NULL,
)
  ENGINE = INNODB;
