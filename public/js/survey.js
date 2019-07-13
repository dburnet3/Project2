Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Survey.",
    pages: [
        {
            title: "What ethnicity is your student?",
            questions: [
                {
                    type: "checkbox",
                    name: "Ethnicity",
                    title: "Ethnicity",
                    hasOther: true,
                    isRequired: true,
                    choices: ["African American", "Latino", "Pacific Islander"]
                }
            ]
        },      {
            title: "What is your students top 3 college choices?",
            questions: [
                {
                    type: "checkbox",
                    name: "Choices",
                    title: "Top College Choices",
                    hasOther: true,
                    isRequired: true,
                    choices: ["Babson College", "Agnes Scott", "Adelphi University"]
                }
            ]
        },    {
            title: "What does your student plan to major in?",
            questions: [
                {
                    type: "checkbox",
                    name: "Major",
                    title: "Selected Major",
                    hasOther: true,
                    isRequired: true,
                    choices: ["Political Science", "Computer Science", "Psychology"]
                }
            ]
        },
        {
            title: "What do you think is an acceptable price range for tuition?",
            questions: [
                {
                    type: "checkbox",
                    name: "Cost",
                    title: "Tuition Cost",
                    hasOther: true,
                    isRequired: true,
                    choices: ["$5,000 - $10,000", "$10,000 - $15,000", "$15,000+"]
                }
            ]
        },
        
    ]
};

window.survey = new Survey.Model(json);

// survey
//     .onComplete
//     .add(function (result) {
//         document
//             .querySelector('#surveyResult')
//             .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
//     });

survey.showProgressBar = 'bottom';

$("#surveyElement").Survey({model: survey});;

