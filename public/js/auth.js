    (function(){
var config = {
    apiKey: "AIzaSyB0Jwj_4_wlKPaAdFo_WwF4mOLus-1U8KA",
    authDomain: "firstgen-a8247.firebaseapp.com",
    databaseURL: "https://firstgen-a8247.firebaseio.com",
    projectId: "firstgen-a8247",
    storageBucket: "",
    messagingSenderId: "582257857473",
    appId: "1:582257857473:web:7ddcd69979db38c1"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');

  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    // window.location.href = 'dashboard';
    promise.catch(e => console.log('e.message'));
  });

  btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    window.location.href = 'survey';
    promise.catch(e => console.log('e.message'));



    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        window.localStorage.setItem('surveyResults', JSON.stringify(result.data));

            window.localStorage.getItem('surveyResults');

            console.log(localStorage);
        user.getIdToken().then(function(idToken) {  
          console.log(idToken); 
       });
          // window.location.href = 'dashboard.html';
        console.log('U are logged in');
      } else {
        console.log('Not logged in');
      }
    });
  });
})();

