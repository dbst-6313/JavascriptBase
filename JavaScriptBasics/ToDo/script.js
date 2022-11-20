const form = document.querySelector("#add-task")
const formHeaderInput = document.querySelector('.input-todo-header')
const formInput = document.querySelector('.input-todo-description')
const list =document.querySelector('.list-group')
const clearButton = document.getElementById('clear-button')
const alertContainer = document.querySelector('.alertContainer')
const todoBody = document.querySelector('.list-group')
addEventListener()

function addEventListener(){
       form.addEventListener("click",addTodo)
       document.addEventListener("DOMContentLoaded",loadAllTodos)
       todoBody.addEventListener("click",deleteToDo)
       clearButton.addEventListener("click",clearAllTodos)
}
function clearAllTodos(){
    if(confirm("All datas going to be removed.Are you Sure?")){
            while(list.firstElementChild != null){
                list.removeChild(list.firstElementChild);
            }
            localStorage.removeItem("todos")
    }
}
function loadAllTodos(){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToPage(todo);
    })
}
function deleteToDo(e){
    if(e.target.className === "btn btn-danger delete-button"){
       e.target.parentElement.parentElement.remove()
       newContent = e.target.parentElement.parentElement.textContent.replace("Delete"," ")
       newContent = newContent.replace(/\s/gm, '');
       console.log(newContent)
       deleteTodoFromStorage(newContent)
       alert("Task deleted")
    }
    
}
function deleteTodoFromStorage(deletedTodo){
let todos = getTodosFromStorage();
todos.forEach(function(todo,index){
    todo = todo.header+todo.description
    todo = todo.replace(/\s/gm, '');
    if(todo === deletedTodo){
        todos.splice(index,1);
    }
});
localStorage.setItem("todos",JSON.stringify(todos))
}
function addTodo(e){

     const newTodo = {
        header:formHeaderInput.value.trim(),
        
        description:formInput.value.trim()}
        if(newTodo.header === "" || newTodo.description === " "){
           showAlert("danger","You cannot pass the values empty")
        }
        else if(newTodo.header.length > newTodo.description.length){
           showAlert("warning","Header's length must be larger than description")
        }
       
        else{
            addTodoToPage(newTodo)
            addTodoToStorage(newTodo)
            showAlert("success","Todo Added")
        }
     

    e.preventDefault();
}
function getTodosFromStorage()
{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos= []
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos
}
function addTodoToStorage(todo){
let todos = getTodosFromStorage()
todos.push(todo)
localStorage.setItem("todos",JSON.stringify(todos))
}
function showAlert(status,description){
    const alertDiv = document.createElement("div")
    alertDiv.className = `alert alert-${status}`
    alertDiv.textContent = description
    alertContainer.appendChild(alertDiv)

    setTimeout(function(){
    alertDiv.remove();
    },5000)
    console.log("Alert creation done")
}
/* <div class="alert alert-success" style="margin-top: 50px;" role="alert">
A simple success alert—check it out!
</div> */
function addTodoToPage(todoText){
    const listItem = document.createElement("li")
    listItem.className = "list-group-item d-flex justify-conten-between align-items-start"
    const listItemDiv = document.createElement("div")
    listItemDiv.className = "ms-2 me-auto"
    const listItemChildDiv = document.createElement("div")
    listItemChildDiv.classList = "fw-bold"
    listItem.appendChild(listItemDiv)
    listItemDiv.appendChild(listItemChildDiv)

   listItemChildDiv.appendChild(document.createTextNode(todoText.header))
   const deleteButton = document.createElement("button")
 
   deleteButton.className = "btn btn-danger delete-button"
  deleteButton.textContent = "Delete"
  listItemDiv.appendChild(deleteButton)
   listItemDiv.appendChild(document.createTextNode(todoText.description))
   list.appendChild(listItem)
   console.log("done")
}