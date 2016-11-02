var viewmodel = {
  name: "Frances Serious",
  todoItems: [{ title: "learn handlebars"}]
};

function bindAdd() {
  var input = $('#newTask');

  $(input).keyup(function(event) {
    if(event.keyCode === 13) {
      addTodo($(this).val());
      display();
      bindAdd();
    } 
  });
}

function display() {
  var src = document.getElementById('todolist_t').innerHTML;
  var template = Handlebars.compile(src);
  var output = template(viewmodel);

  var placeholder = document.getElementById('todolist');
  placeholder.innerHTML = output;
}
  
function addTodo(item) {
  viewmodel.todoItems.push({title: item});
}

$(document).ready(function() {
  display();
  bindAdd();
});
