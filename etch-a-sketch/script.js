const div = document.querySelector("#container");
const button = document.querySelector("#button");
const clearBtn = document.querySelector("#clear");


let isDrawing = false;

 function inputValidation(){
    const userInput = (Number)(prompt("Enter the number of squares per side for the new grid.\nMaximum Input = 100."))
    if(
        userInput === null ||
        isNaN(userInput) ||
        userInput <= 0 ||
        userInput > 100
    ){
        alert("Entered Input exceeds the Maximum limit!!! Please input within the input range.");
        return;
    } else {
        createGrid(userInput);
    }
 }

document.addEventListener("mousedown", () => {
    isDrawing = true;
});
document.addEventListener("mouseup", () => {
    isDrawing = false;
});


button.addEventListener("click", () => {
    inputValidation();
});
clearBtn.addEventListener("click", () => {
    clearSketchPad();
});

function clearSketchPad(){  //clears the sketch pad
    const squares = document.querySelectorAll(".square");
    squares.forEach(square =>{
        square.style.backgroundColor = "";
    })
}

function createGrid(size){
    div.innerHTML = "";   //clearing the container so that custom grid can be added
    for(let i = 0; i < size * size; i++){
        const newDiv = document.createElement("div");
        const squareSize = 960/size;   // dynamically adjust the size so that the sletch pad remains a square always
        newDiv.style.width = squareSize+"px";  
        newDiv.style.height = squareSize+"px";
        newDiv.classList.add("square");
        newDiv.addEventListener("mouseover", () => {
            if(isDrawing){
                newDiv.style.backgroundColor = getRandomColor();
            }
         })
        div.appendChild(newDiv);
    }
}

function getRandomColor() {   // creates random color for each blocks
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


createGrid(16);  // default grid structure of the page