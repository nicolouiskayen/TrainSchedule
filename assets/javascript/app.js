
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


var database = firebase.database();
var name = ""
var destination = ""
var time = 0
var interval = 0
var currenTime = moment()


setInterval(function () {
  $("#time-input").html(moment(moment()).format("hh:mm:ss"));
}, 1000);

$("#add-train").on("click", function (event) {
  name = $("#name-input").val().trim()
  time = $("#time-input").val().trim()
  interval = $("#interval-input").val().trim()
  destination = $("#destination-input").val().trim()
  $("#name-input").val("")
  $("#time-input").val("")
  $("#interval-input").val("")
  $("#destination-input").val("")

  database.ref().push({
    name,
    destination,
    time,
    interval,
  })
  
});
database.ref().on("child_added", function (childSnapshot) {
  var start = moment(childSnapshot.val().time, "hh:mm")
 
  var remainder = moment().diff(moment(start), "minutes") % childSnapshot.val().interval
 
  var nextTrain = childSnapshot.val().interval - remainder
  var nextTime = moment().add(nextTrain, "minutes")
  $("#newInfo").prepend(
    "<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().destination + "</td><td>" + moment(nextTime).format("hh:mm") + "</td><td>" + childSnapshot.val().interval + "</td><td>" + nextTrain + "</td></tr>"
  )
}, function (errorObject) {

  console.log("Errors handled: " + errorObject.code);
});
