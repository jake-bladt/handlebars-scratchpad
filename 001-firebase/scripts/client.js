var config = {
  apiKey: "AIzaSyAVLtzWB8ezIx4GoV-ZrA62RP11PR2JMAM",
  authDomain: "hbfb-first.firebaseapp.com",
  databaseURL: "https://hbfb-first.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "1021840708562"
};
firebase.initializeApp(config);
var db = firebase.database();

var viewModel = {
  stepCounts: []
};

$(document).ready(function() {

  var stepCountsRef = db.ref('stepcounts/');
  stepCountsRef.
    on("value", function(snapshot) { 
      viewModel.stepCounts = [];
      var dbVals = snapshot.val();
      for (var sc in dbVals) {
        console.log(sc + ": " + dbVals[sc]);
      };
    });

});
