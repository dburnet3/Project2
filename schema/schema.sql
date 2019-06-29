DROP DATABASE IF EXISTS project2_db;

CREATE DATABASE project2_db;

USE project2_db;

CREATE TABLE school_info (
    year INT NOT NULL,
    unitid INT NOT NULL,
    inst_name VARCHAR(255) NOT NULL,
    state_name VARCHAR(255) NOT NULL,
    inst_control VARCHAR(255) NOT NULL,
    institution_level VARCHAR(255) NOT NULL,
    url_fin_aid VARCHAR(255) NOT NULL,
    completion_rate_100pct DECIMAL,
    first_gen_student_pct VARCHAR(255) NOT NULL,
);





