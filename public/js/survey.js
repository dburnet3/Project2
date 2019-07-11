$(document).ready(function(){
    $("#next").on('click', survey.startSurvey);
})

var survey = {
    questions: {
        q1: 'What is your students ethnicity?',
        q2: 'What is your students top 3 college choices?',
        q3: 'Law & Order: What did the creator of Law and Order orginally want to name it?'
    },

    options: {

        q1: ['Black or African American', 'Hispanic or Latino', 'American Indian or Alaska Native'],
        q2: ['Agnes Scott College', 'Anthropologie', 'Crate & Barrel'],
        q3: ['NYPD Best', 'Night and Day', 'Cops and Court']
    }
}