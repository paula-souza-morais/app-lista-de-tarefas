document.addEventListener('DOMContentLoaded', () => {
    const minimizeBtn = document.getElementById('shrink-btn');
    const closeBtn = document.getElementById('close-btn');
  
    if (minimizeBtn && window.electronAPI) {
      minimizeBtn.addEventListener('click', () => window.electronAPI.minimize());
    }
  
    if (closeBtn && window.electronAPI) {
      closeBtn.addEventListener('click', () => window.electronAPI.close());
    }
  });

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        return;
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
