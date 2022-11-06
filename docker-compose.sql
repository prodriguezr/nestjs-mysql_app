/*

This set of SQL commands must be executed only once at the beginning
of the project and after the creation of the docker container.

You must replace the values enclosed in < and >

*/

CREATE USER '<user>'@'localhost' IDENTIFIED BY '<password>';

GRANT ALL PRIVILEGES ON *.* TO '<user>'@'localhost' WITH GRANT OPTION;

CREATE USER '<user>'@'%' IDENTIFIED BY '<password>';

GRANT ALL PRIVILEGES ON *.* TO '<user>'@'%' WITH GRANT OPTION;

SHOW GRANTS FOR <user>;

FLUSH PRIVILEGES;

CREATE DATABASE db;