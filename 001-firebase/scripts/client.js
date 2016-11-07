var config = {
  apiKey: "AIzaSyAVLtzWB8ezIx4GoV-ZrA62RP11PR2JMAM",
  authDomain: "hbfb-first.firebaseapp.com",
  databaseURL: "https://hbfb-first.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "1021840708562"
};
firebase.initializeApp(config);
var db = firebase.database();

var dateStamp = function(stamp) {

  var months = [
    undefined, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  return {
    toDateString: function() {
      var year = stamp.substring(0, 4);
      var month = stamp.substring(4, 6);
      var day = stamp.substring(7, 8);
      return `${months[month]} ${day}, ${year}`;
    }
  }
};

var viewModel = {
  stepCounts: []
};

$(document).ready(function() {

  var stepCountsRef = db.ref('stepcounts/');
  stepCountsRef.
    on("value", function(snapshot) { 
      var dbVals = snapshot.val();
      viewModel.stepCounts = Object.keys(dbVals).map(function(key, index) {
        return {
          id: Number(key),
          date: dateStamp(key).toDateString(),
          count: Number(dbVals[key])
        }
      });
      console.log("new readings", viewModel.stepCounts);

      var src = document.getElementById('stepcounts_t').innerHTML;
      var template = Handlebars.compile(src);
      var output = template(viewModel);

      var placeholder = document.getElementById('stepcounts');
      placeholder.innerHTML = output;
    });

});
