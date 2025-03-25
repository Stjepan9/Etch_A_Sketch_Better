document.addEventListener("DOMContentLoaded",function(){
    createGrid(16);
});


const colorPickerInputBnt =document.querySelector("#colorPicker");
const colorBnt = document.querySelector("#colorBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const clearBtn = document.querySelector("#clearBtn");


const gridSizeRangeDisplay = document.querySelector("#gridSizeRangeDisplay");
const gridSizeTextDisplay = document.querySelectorAll("#gridSizeTextDisplay");


const gridContainerDisplay = document.querySelector("#gridDisplayContainer");
const gridDisplay = document.querySelector("#gridDsplay");


const createGrid = function(size){

    gridContainerDisplay.innerHTML = "";

    gridContainerDisplay.style.display = "grid";
    gridContainerDisplay.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainerDisplay.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainerDisplay.style.overflow = "hidden";
    gridContainerDisplay.style.border = "2px solid black";
    gridContainerDisplay.style.height = "500px";
    gridContainerDisplay.style.width = "500px";
    gridContainerDisplay.style.boxSizing = "border-box"


    boxSize = Math.floor((gridContainerDisplay.clientWidth / size));


    for(let i = 0; i < size * size; i++){
        let box = document.createElement("div");
        box.style.border = "1px solid black";
        box.style.width = boxSize +"px";
        box.style.height = boxSize + "px";

        gridContainerDisplay.appendChild(box);
    };
}


createGrid(16);