class ToDoList {
    constructor() {
    }
    // Dark Mode
    darkMode() {
        const darkModeBttn = document.querySelector("#dark");
        darkModeBttn.addEventListener("click", () => {
            document.querySelector("#light").classList.remove("l");
            document.querySelector(".l-mode-bttn").classList.remove("light-mode-button");
            document.querySelector("#title-text").classList.remove("light-mode-text");
            document.querySelector("main").classList.add("dark-mode-body");
            document.querySelector("#title-text").classList.add("dark-mode-text");
            document.querySelector(".d-mode-bttn").classList.add("dark-mode-button");
        }); 
        
    }
    
    // Light Mode
    lightMode() {
        const lightModeBttn = document.querySelector("#light");
        lightModeBttn.addEventListener("click", () => {
            document.querySelector("#light").classList.add("l");
            document.querySelector(".d-mode-bttn").classList.remove("dark-mode-button");
            document.querySelector(".l-mode-bttn").classList.add("light-mode-button");
            document.querySelector("#title-text").classList.remove("dark-mode-text");
            document.querySelector("main").classList.remove("dark-mode-body");
            document.querySelector("#title-text").classList.add("light-mode-text");
        }); 
    }

    // Add Button
    addElementList(event) {
        event.preventDefault;

        // Important variables
        const toDoList = document.querySelector(".list");
        const inputElement = document.querySelector(".input-task").value;

        // toDoSect here is the name of the variable
        const toDoSect = document.createElement("section");
        // toDoSect here is the name of the class
        toDoSect.classList.add("toDoSect");
        
        if (inputElement === "") {
            const alert = () => {
                let text = document.createElement("p");
                text.textContent = "You need to type something!";
                text.className = "empty-warning";
                document.querySelector(".empty-alert").appendChild(text);
            }
            const sectionCloser = () => {
                document.querySelector(".empty-alert").style.display="none";
                let child = document.querySelectorAll(".empty-warning");
                for (let i = 0; i < child.length; i++) {
                    document.querySelector(".empty-alert").removeChild(child[i]);
                }
            }
            alert();
            window.setTimeout(sectionCloser, 2000);
            document.querySelector(".empty-alert").style.display = "";
        }
        else {
            let newElement = document.createElement("li");
            let textNode = document.createTextNode(inputElement);
            newElement.appendChild(textNode);
            toDoSect.appendChild(newElement);
            // Check Button
            let cBttn = document.createElement("button");
            cBttn.textContent = "\u2713";
            cBttn.className = "doneBttn";
            toDoSect.appendChild(cBttn);
                
            // X Button
            let xBttn = document.createElement("button");
            xBttn.textContent = "\u00D7";
            xBttn.className = "removeBttn";
            toDoSect.appendChild(xBttn);

            // Apppend the section to ul
            toDoList.appendChild(toDoSect);

            // Check and X button function
            const bttnFunc = () => {
                const xItem = document.querySelectorAll(".removeBttn");
                for (let i = 0; i < xItem.length; i++) {
                    xItem[i].onclick = () => {
                        const toDoItem = xItem[i].parentElement;
                        toDoItem.remove();
                    }
                }
                const cItem = document.querySelectorAll(".doneBttn");
                for (let i = 0; i < cItem.length; i++) {
                    cItem[i].onclick = () => {
                        const item = cItem[i].parentElement;
                        const toDoItem = cItem[i].parentElement.children.item(0);
                        toDoItem.classList.toggle("done");
                        // If the user clicked again but the task is already completed
                        if (item.classList.contains("completed")) {
                            item.classList.remove("completed");
                            item.classList.add("uncompleted");
                        }
                        // Adds the task to the list of completed tasks
                        else {
                            item.classList.remove("uncompleted");
                            item.classList.add("completed");
                        }
                    }
                }
            }
            bttnFunc();
            // Adds the task to the list of uncompleted task
            const sections = document.querySelectorAll(".toDoSect");
            for (let i = 0; i < sections.length; i++) {
                sections[i].classList.add("uncompleted");
            };
        }
        // Clears Input Value
        document.querySelector(".input-task").value = "";
    }

    optionsFunction(e) {
        const todoItems = document.querySelector(".list").childNodes;
        todoItems.forEach(function(todo) {
            switch(e.target.value) {
                case "all-tasks":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    }
                    else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (todo.classList.contains("uncompleted")) {
                        todo.style.display = "flex";
                    }
                    else {
                        todo.style.display = "none";
                    }
            }
        });
    }
}

// Making an Object
const toDo = new ToDoList();
const addButton = document.querySelector(".todo-add-bttn");
const options = document.querySelector("#options");

// Event Listener
addButton.addEventListener("click", toDo.addElementList);
options.addEventListener("click", toDo.optionsFunction);

// Method Calls
toDo.lightMode();
toDo.darkMode();
//toDo.emptyContainer();