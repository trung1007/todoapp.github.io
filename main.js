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


// xử lý login

var login = document.querySelector(".login");
var active = document.querySelector(".wrapper");
var username = document.querySelector("#username");
var userpassword = document.querySelector("#userpassword");
var loginbtn = document.querySelector(".login-input");

username.onkeyup = () => {
    let getusername = username.value;
    if (getusername.trim() != 0) {
        loginbtn.classList.add("in");
    }
    else {
        loginbtn.classList.remove("in");
    }
}

userpassword.onkeyup = () => {
    let getuserpassword = userpassword.value;
    if (getuserpassword.trim() != 0) {
        loginbtn.classList.add("in");
    }
    else {
        loginbtn.classList.remove("in");
    }
}

userpassword.addEventListener("keyup", e => {
    let getusername = username.value.trim();
    let getuserpassword = userpassword.value.trim();
    if (e.key == "Enter" && getuserpassword && getusername) {
        var nameactive = document.querySelector(".nameactive");
        nameactive.textContent = username.value;
        username.value = "";
        userpassword.value = "";
        loginbtn.classList.remove("in");
        login.classList.add("login-up")
        active.classList.add("todoactive");
    }
    else {
        login.classList.remove("login-up");
        active.classList.remove("todoactive");
    }
});

loginbtn.onclick = () => {
    let getusername = username.value.trim();
    let getuserpassword = userpassword.value.trim();
    if (getuserpassword && getusername) {
        var nameactive = document.querySelector(".nameactive");
        nameactive.textContent = username.value;
        username.value = "";
        userpassword.value = "";
        loginbtn.classList.remove("in");
        login.classList.add("login-up")
        active.classList.add("todoactive");
    }
    else {
        login.classList.remove("login-up");
        active.classList.remove("todoactive");
    }
}



// xử lý todoList

const inputBox = document.querySelector(".getinput")
const addButton = document.querySelector(".addtasks");
var addTask = document.querySelector(".todoList");
const pendingTasksNumb = document.querySelector(".pendingTasks");

var clearAllbtn = document.querySelector(".clear");

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

// clearAllbtn.onclick = () => {
//     console.log("123");
// }

clearAllbtn.addEventListener("click", ()=>{
    console.log("123");
    todos.splice(0, todos.length);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodoList();
});


function showTodoList() {
    let div = "";
    if (todos) {
        todos.forEach((todo, id) => {
            div += `<div class="tasks">
                        <div class="process">
                            <span class="task_name">${todo.name}</span>
                        </div>
                    <div>
                    <button class="checked" onclick="done(this)">
                        <i class="fa-solid fa-check"></i>
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
    var taskname = selectedTask.parentElement.parentElement.firstElementChild;
    if (selectedTask.onclick) {
        taskname.classList.toggle("done");
        taskname.classList.remove("failed");
    }
}

function failed(selectedTask) {
    var taskname = selectedTask.parentElement.parentElement.firstElementChild;
    if (selectedTask.onclick) {
        taskname.classList.toggle("failed");
        taskname.classList.remove("done");
    }
}

function remove(deleteID) {
    todos.splice(deleteID, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodoList();
}






// xử lý logout

var settingbtn = document.querySelector(".btn-setting");
var logout = document.querySelector(".logout")

settingbtn.onclick = () => {
    console.log("123");
    logout.classList.toggle("logout-out");
    active.classList.toggle("logout-setting");
    inputBox.classList.toggle("logout-setting");
}

var logoutbtn = document.querySelector(".setting-logout");

logoutbtn.onclick = () => {
    active.classList.remove("logout-setting");
    inputBox.classList.remove("logout-setting");
    logout.classList.remove("logout-out");
    login.classList.remove("login-up");
    active.classList.remove("todoactive");

}


