// const inputBox = document.querySelector(".input-Field input");

// const addButton = document.querySelector(".input-Field button");

// const tasks = document.querySelector(".tasks");
// const tasksButton = document.querySelector(".tasks button");
// const deleteAllButton = document.querySelector(".footer button");

// inputBox.onkeyup = () => {
//     let userEnteredValue = inputBox.value;
//     if (userEnteredValue.trim() != 0) {
//         addButton.classList.add("active");
//         // var list1=document.getElementsByClassName("task_name").classList;
//         // list1.toggle("done");
//         // const list2=document.getElementsById("test").classList;
//         // list2.toggle("done");
//     }
//     else {
//         addButton.classList.remove("active");
//     }
// }
// showTaks();
// addButton.onclick = () => {
//     let userEnteredValue = inputBox.value;
//     let getLocalStorageData = localStorage.getItem("New Task");
//     if (getLocalStorageData == null) {
//         // Nếu như localStorage = null
//         // tạo 1 mảng rỗng 
//         listArray = [];
//     } else {
//         // ngược lại chuyển JSON từ String sang Object
//         listArray = JSON.parse(getLocalStorageData);
//     }
//     listArray.push(userEnteredValue);
//     localStorage.setItem("New Task", JSON.stringify(listArray));
//     showTaks();
//     addButton.classList.remove("active");
// }
// function showTaks() {
//     let getLocalStorageData = localStorage.getItem("New Task");
//     if (getLocalStorageData == null) {
//         // Nếu như localStorage = null
//         // tạo 1 mảng rỗng
//         listArray = [];
//     } else {
//         // ngược lại chuyển JSON từ String sang Object
//         listArray = JSON.parse(getLocalStorageData);
//     }
//     const pendingTasksNumb = document.querySelector(".pendingTasks");
//     pendingTasksNumb.textContent = listArray.length();
//     if (listArray.length > 0) {
//         deleteAllButton.classList.add("active");
//     } else {
//         deleteAllButton.classList.remove("active");
//     }
//     let newLiTag = "";
//     listArray.forEach((element, index) => {
//         newLiTag += `<div class="tasks">
//         <div class="process">
//             <span class="task_name">${element}</span>
//         </div>
//         <div>
//             <button class="checked" onclick="done()">
//                 <i class="fa-solid fa-check" >
//                 </i>
//             </button>
//             <button class="unchecked"onclick="failed()">
//                 <i class="fa-solid fa-xmark"></i>
//             </button>
//         </div>`
//             ;
//     });
//     tasks.innerHTML = newLiTag;
//     inputBox.value = "";
// }
// // function process(){
// //     process.classList.add("done");
// //     showTaks();
// // }
// deleteAllButton.onclick = () => {
//     listArray = [];
//     localStorage.setItem("New Task", JSON.stringify(listArray));
//     showTasks();
// }




const inputBox = document.querySelector(".input-Field input")
const addButton = document.querySelector(".input-Field button");
var addTask = document.querySelector(".todoList");


var ClearButton = document.querySelector(".clear");

let todos = JSON.parse(localStorage.getItem("todo-list"));

inputBox.onkeyup = () => {
    let userEnteredValue = inputBox.value;
    if (userEnteredValue.trim() != 0) {
        addButton.classList.add("active");
    }
    else {
        addButton.classList.remove("active");
    }
}


inputBox.addEventListener("keyup", e => {
    let userTask = inputBox.value.trim();
    if (e.key == "Enter" && userTask) {
        if (!todos) {
            todos = [];
        }
        inputBox.value = "";
        let taskInfo = { name: userTask };
        todos.push(taskInfo);
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodoList();
    }
});



// function clearAll() {
//     console.log("123");
//     todos.splice(0, todos.length());
//     localStorage.setItem("todo-list", JSON.stringify(todos));
//     showTodoList();
// }



// ClearButton.addEventListener("click",e =>{
//     console.log("123");
// //     todos.splice(0, todos.length());
// //     localStorage.setItem("todo-list", JSON.stringify(todos));
// //     showTodoList();
// });

function showTodoList() {
    //var div=document.createElement('div');
    let div = "";
    if (todos) {
        todos.forEach((todo, id) => {
            div += `<div class="tasks">
                    <div class="process">
                        <span class="task_name">${todo.name}</span>
                    </div>
                 <div>
                    <button class="checked" onclick="done(this)">
                        <i class="fa-solid fa-check" >
                        </i>
                    </button>
                     <button class="unchecked" onclick="failed(this)">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <button class="remove" onclick="remove(${id})">
                    <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>`;
        });
    }
    addTask.innerHTML = div;
}


showTodoList();


function done(selectedTask) {
    var taskname=selectedTask.parentElement.parentElement.firstElementChild;
    if(selectedTask.onclick){
        taskname.classList.toggle("done");
    }
}

function failed(selectedTask) {
    var taskname=selectedTask.parentElement.parentElement.firstElementChild;
    if(selectedTask.onclick){
        taskname.classList.toggle("failed");
    }
}

function remove(deleteID) {
    todos.splice(deleteID, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodoList();
}