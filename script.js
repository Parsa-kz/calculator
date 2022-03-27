// display box
let display = document.querySelector(".display");

function showDisplay(event){
    let x = event.target.innerText;
    if(display.innerHTML == 0){
        return display.innerHTML = x;
    }
    return display.innerHTML += x;
}

// add event to special keys
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear").addEventListener("click", clear);
document.querySelector(".calculate").addEventListener("click", calculate);

// define function for events
function allClear(){
    display.innerHTML = 0;
}

function clear(){
    let text = display.innerText;
    if(text.length === 1){
        display.innerHTML = 0;
    } else{
        display.innerHTML = text.substring(0, text.length - 1);
    }
}

function calculate(){
    let result = display.innerText;
    display.innerHTML = eval(result);
}

let list = document.querySelectorAll(".show-display");
list.forEach(element => {
    element.addEventListener("click", showDisplay);
});