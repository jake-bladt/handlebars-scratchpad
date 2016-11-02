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

function bindAddEvent() {
  var input = $('#newTask');

  $(input).keyup(function(event) {
    if(event.keyCode === 13) {
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
