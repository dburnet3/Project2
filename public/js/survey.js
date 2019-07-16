

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyB0Jwj_4_wlKPaAdFo_WwF4mOLus-1U8KA',
    authDomain: 'firstgen-a8247.firebaseapp.com',
    projectId: 'firstgen-a8247'
  });
  
  var db = firebase.firestore();


//Survey
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Tell us about your student",
    pages: [
        {
            title: "What ethnicity is your student?",
            questions: [
                {
                    type: "radiogroup",
                    name: "Ethnicity",
                    title: "Ethnicity",
                    hasOther: true,
                    isRequired: true,
                    choices: ["Black or African American", "Hispanic or Latino", "Native Hawaiian or Pacific Islander", "Asian", "White"]
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
                    choices: ["Babson College", "Agnes Scott", "Adelphi University", "Albany State University", "Barnard College", "Barton College", "Averett University", "Auburn University", "Athens State College", "Arcadia University"]
                }
            ]
        },    {
            title: "What does your student plan to major in?",
            questions: [
                {
                    type: "radiogroup",
                    name: "Major_yn",
                    title: "Does your student know what they want to major in?",
                    hasOther: true,
                    isRequired: true,
                    choices: ["Yes", "No"]
                },
                {
                    type: "radiogroup",
                    name: "Major_selection",
                    title: "Selected Major",
                    visibleIf:"{Major_yn}='Yes'",
                    hasOther: true,
                    isRequired: true,
                    choices: ["Political Science", "Computer Science", "Psychology", "Biology", "Nursing", "Mechanical Engineering", "Mathematics", "Communications", "Economics", "History"]
                },
                {
                    type: "radiogroup",
                    name: "Career",
                    title: "Your students career path",
                    visibleIf: "{Major_yn}='Yes'",
                    hasOther: true,
                    isRequired: true,
                    choices: ["Research Assitant", "Social Media Manager", "Software Engineer", "Data Analyst", "Engineer", "Financial Analyst", "Professor", "Registered Nurse", "Chemist"]
                }
            ]
        },
        {
            title: "What do you think is an acceptable price range for tuition?",
            questions: [
                {
                    type: "radiogroup",
                    name: "Cost",
                    title: "Tuition Cost",
                    hasOther: true,
                    isRequired: true,
                    choices: ["$5,000 - $10,000", "$10,000 - $15,000", "$15,000 - $20,000", "$20,000 - $25,000", "$25,000+"]
                }
            ]
        },
        
    ]
};

window.survey = new Survey.Model(json);


survey
    .onComplete
    .add(function (result) {

        db.collection("SurveyResults").add({
                Ethnicity: JSON.stringify(result.data.Ethnicity),
                Choices:JSON.stringify(result.data.Choices),
                Major_yn: JSON.stringify(result.data.Major_yn),
                Major_selection: JSON.stringify(result.data.Major_selection),
                Career: JSON.stringify(result.data.Major_selection),
                Cost: JSON.stringify(result.data.Cost)
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

            //storing info in local storage
            window.localStorage.setItem('surveyResults', JSON.stringify(result.data));
            window.localStorage.getItem('surveyResults');
            console.log(localStorage);

            window.location.href='dashboard';
        
        // document
        //     .querySelector('#surveyResult')
        //     .textContent = "Result JSON:\n" + JSON.stringify(result.data.Ethnicity);
       
        db.collection('SurveyResults').get()
  .then(doc  => {
    if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
      }
    })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
    });

survey.showProgressBar = 'bottom';

$("#surveyElement").Survey({model: survey});;

