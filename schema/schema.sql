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
CREATE TABLE school_repay_info (
    year INT NOT NULL,
    unitid INT NOT NULL,
    inst_name VARCHAR(255) NOT NULL,
    state_name VARCHAR(255) NOT NULL,
    years_since_entering_repay INTEGER,
    repay_rate_lowincome DECIMAL,
    repay_rate_midincome DECIMAL,
    repay_rate_highincome DECIMAL,
    repay_rate_firstgen DECIMAL,
);




--"unitid","Unit ID number","Unique identification number of the institution in the Integrated Postsecondary Education Data System."
--"inst_name","Institution (entity) name",""
--"inst_control","Control of institution",""
--"institution_level","Level of institution",""
--"url_fin_aid","Financial aid office web address",""
--"completion_rate_100pct","Graduation rate within 100% of normal time",""
--"first_gen_student_pct","Share of first-generation students",""
--"years_since_entering_repay","Number of years since the cohort entered repayment",""
--"repay_rate_lowincome","Repayment rate by family income ($0-$30,000)",""
--"repay_rate_midincome","Repayment rate by family income ($30,001-$75,000)",""
--"repay_rate_highincome","Repayment rate by family income ($75,001+)",""
--"repay_rate_firstgen","Repayment rate for first-generation students",""


