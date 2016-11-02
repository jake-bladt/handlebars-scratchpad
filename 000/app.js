$(document).ready(function() {
  var src = document.getElementById('todolist_t').innerHTML;
  var template = Handlebars.compile(src);
  var output = template({
    name: "Frances Serious",
    todoItems: [{ title: "Conquer World."}]
  });

  var placeholder = document.getElementById('todolist');
  placeholder.innerHTML = output;
});
