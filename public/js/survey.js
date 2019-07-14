

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyB0Jwj_4_wlKPaAdFo_WwF4mOLus-1U8KA',
    authDomain: 'firstgen-a8247.firebaseapp.com',
    projectId: 'firstgen-a8247'
  });
  
  var db = firebase.firestore();

//   db.collection("SurveyResults").add({
//     Ethnicity: JSON.stringify(data),
//     Choices:JSON.stringify(data),
//     Major: JSON.stringify(data),
//     Cost: JSON.stringify(data)
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

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

survey
    .onComplete
    .add(function (result) {

        db.collection("SurveyResults").add({
                Ethnicity: JSON.stringify(result.data.Ethnicity),
                Choices:JSON.stringify(result.data.Choices),
                Major: JSON.stringify(result.data.Major),
                Cost: JSON.stringify(result.data.Cost)
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

        // $.post("/api/surveyResult", {
        //     data: JSON.stringify(result.data)
        // }).then(function (response) {
        
        // document
        //     .querySelector('#surveyResult')
        //     .textContent = "Result JSON:\n" + JSON.stringify(result.data);
        // });
        db.collection('SurveyResults').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
    });

survey.showProgressBar = 'bottom';

$("#surveyElement").Survey({model: survey});;

