const container=document.querySelector(".conatiner");
const todoForm=document.querySelector(".todo-form");
const todoInput=document.querySelector("#inputTodo");
const todoAddbutton=document.querySelector("#addTodoButton");

const todoLists=document.querySelector("#lists");
const messageElement=document.querySelector("#message");

const showmessage=(text,status)=>{
messageElement.textContent=text;
messageElement.classList.add(`bg-${status}`);
setTimeout(()=>{
messageElement.textContent="";
messageElement.classList.remove(`bg-${status}`);
},1000);
};

//creatre todo
const createTodo=(todoId,todoValue)=>{
    const todoElement=document.createElement("li");
    todoElement.id=todoId;
    todoElement.classList.add("li-style");
    todoElement.innerHTML=`<span>${todoValue}</span>
    <span> <button class="btn1" id="deletButton">
        <i class="fa fa-trash"></i></button> </span>`
        ;
todoLists.appendChild(todoElement);

const deletButton=todoElement.querySelector("#deletButton");
deletButton.addEventListener("click", deleteTodo);
};

const deleteTodo=(event)=>{
  const selectedTodo=event.target.parentElement.parentElement.parentElement;
  console.log(selectedTodo);

  todoLists.removeChild(selectedTodo);
  showmessage("todo is deleted","danger");
};


const getTodosFromLocalStorage =()=>{
    return localStorage.getItem("mytodos")
    ?JSON.parse(localStorage.getItem("mytodos"))
    :[];
}



// adding listner

const addTodo=(event)=>{
    event.preventDefault();//jeta input dibo ota jate na cole jai tar jonno
   const todoValue=todoInput.value ;




   // unique id
   const todoId=Date.now().toString();
   createTodo(todoId,todoValue);
   showmessage("todo is added","success");

//local stroge

const todos=getTodosFromLocalStorage();
todos.push({todoId,todoValue});
localStorage.setItem("mytodos",JSON.stringify(todos)
);

todoInput.value="";


};

todoForm.addEventListener("submit",addTodo);