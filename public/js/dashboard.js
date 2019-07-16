// Initialize Cloud Firestore through Firebase
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

      firebase.initializeApp(config);





//accessing Tableau data
var divElement = document.getElementById('viz1562883470335');                    
var vizElement = divElement.getElementsByTagName('object')[0];                    
if ( divElement.offsetWidth > 800 ) { vizElement.style.width='100%';vizElement.style.height='40%';} 
else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='100%';vizElement.style.height='40%';} 
else { vizElement.style.width='100%';vizElement.style.height='727px';}                     
var scriptElement = document.createElement('script');                    
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
vizElement.parentNode.insertBefore(scriptElement, vizElement);   






})

