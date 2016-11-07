var config = {
  apiKey: "AIzaSyAVLtzWB8ezIx4GoV-ZrA62RP11PR2JMAM",
  authDomain: "hbfb-first.firebaseapp.com",
  databaseURL: "https://hbfb-first.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "1021840708562"
};
firebase.initializeApp(config);
var db = firebase.database();

$(document).ready(function() {

  var stepCountsRef = db.ref('stepcounts/');
  stepCountsRef.
    once("value").
    then(function(snapshot) { 
      var stepCounts = snapshot.val();
      console.log(stepCounts);
      for (var sc in stepCounts) {
        console.log(sc + ": " + stepCounts[sc]);
      };
    });

});
