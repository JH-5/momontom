const toDoForm = document.querySelector(".js-toDoForm"),
 toDoInput = toDoForm.querySelector("input"),
 toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let idNumbers=1;

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
    console.log(cleanToDos)
}


function paintToDo(text){
    const li = document.createElement("li");
    li.className = "toDo";
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = idNumbers;
    idNumbers += 1;
    delBtn.innerText = "X";
    delBtn.className = "toDo__button";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn); //delBtn 을 li 안에 넣음
    li.appendChild(span); //span 을 li 안에 넣음
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId 
    };
    toDos.push(toDoObj);  // toDos array 안에 toDoObj 를
    saveToDos();

    
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";

}

function loadToDos(){
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !==null){        
        const parsedToDos = JSON.parse(loadToDos);     
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });             
    }
}



 
function init(){
     loadToDos();
     toDoForm.addEventListener("submit",handleSubmit);
}
init();