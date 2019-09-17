
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBnpmJ3gTpC4xvhajdrb1t3kW7pfOGAZKo",
    authDomain: "nico-clicker.firebaseapp.com",
    databaseURL: "https://nico-clicker.firebaseio.com",
    projectId: "nico-clicker",
    storageBucket: "",
    messagingSenderId: "232495888778",
    appId: "1:232495888778:web:e48c57829425d1564ef073"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var database = firebase.database();