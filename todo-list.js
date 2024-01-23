const todolist = [
{name:'example',
Duedate:'2023-12-2' ,
Time:'2:30'}];
rendertodolist();

function rendertodolist(){
let todolisthtml = '';

for(let i=0;i<todolist.length;i++){

    const todoObject = todolist[i];
    const name = todoObject.name;
    const Duedate = todoObject.Duedate;
    const Time = todoObject.Time;
    const html = 
    `<div>${name}</div>
     <div>${Duedate}</div> 
     <div>${Time}</div>
    <button onclick="
    todolist.splice(${i} ,1);
    rendertodolist();
    " class="delete-todo-button">Delete</button>
    `;
    todolisthtml+=html;
}
document.querySelector('.js-todo-list')
.innerHTML = todolisthtml;
 }

function addtodo(){
    const inputElement = document.querySelector('.js-input-name');
    const name = inputElement.value ;
    const dateInputElement = document.querySelector('.js-date-input');
    const Duedate = dateInputElement.value;
    const timeInputElement = document.querySelector('.js-time-input');
    const Time = timeInputElement.value;
    todolist.push({
        name:name,
        Duedate:Duedate,
        Time : Time  });
   
    inputElement.value = '';
    rendertodolist();
}