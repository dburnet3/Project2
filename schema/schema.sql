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

CREATE TABLE school_tuition_info (
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    website VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    awards_offered VARCHAR(255) NOT NULL,
    campus_setting VARCHAR(255) NOT NULL,
    campus_housing VARCHAR(255) NOT NULL,
    student_population VARCHAR(255) NOT NULL,
    undergraduate_students VARCHAR(255) NOT NULL,
    gradutation_rate VARCHAR(255) NOT NULL,
    transfer_out_rate VARCHAR(255) NOT NULL,
    Cohort_year VARCHAR(255) NOT NULL,
    Net_price VARCHAR(255) NOT NULL,
    largest_program VARCHAR(255) NOT NULL,
    IPEDS_ID VARCHAR(255) NOT NULL,
    OPE_ID VARCHAR(255) NOT NULL,
    
)

"Undergraduate students","Graduation Rate","Transfer-Out Rate","Cohort Year *","Net Price **","Largest Program","IPEDS ID","OPE ID"

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


