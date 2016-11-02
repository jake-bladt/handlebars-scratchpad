// This is the object handlebars will use to fill in the template
var viewmodel = {
  name: "Frances Serious",
  todoItems: [{ title: "learn handlebars"}]
};
  
function addTodo(item) {
  viewmodel.todoItems.push({title: item});
}

function display() {
  var src = document.getElementById('todolist_t').innerHTML;
  var template = Handlebars.compile(src);
  var output = template(viewmodel);

  var placeholder = document.getElementById('todolist');
  placeholder.innerHTML = output;
}

// because handlebars destroys and recreates dom elements in
// templates, break out the key-up binding into its own function,
// to be called on document ready and display.
function bindAddEvent() {
  var input = $('#newTask');

  $(input).keyup(function(event) {
    if(event.keyCode === 13) {  // Enter Key
      addTodo($(this).val());
      display();
      bindAddEvent();
    } 
  });
}

$(document).ready(function() {
  display();
  bindAddEvent();
});
