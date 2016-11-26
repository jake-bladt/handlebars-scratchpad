$(document).ready(function() {
  var src = document.getElementById('greeting_t').innerHTML;
  var template = Handlebars.compile(src);
  var output = template({title: "<h1>Howdy!</h1>"});

  var placeholder = document.getElementById('greeting');
  placeholder.innerHTML = output;
});
