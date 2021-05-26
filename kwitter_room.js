
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDtzq9dzR9Kt02YPD05z_jg5DasmnhoI_M",
      authDomain: "kwitter-aea7e.firebaseapp.com",
      projectId: "kwitter-aea7e",
      storageBucket: "kwitter-aea7e.appspot.com",
      messagingSenderId: "309614524005",
      appId: "1:309614524005:web:ce8e09c21f5ffc5170788c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


