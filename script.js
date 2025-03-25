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
const gridDisplay = document.querySelector("#gridDisplay");

let selectedMode;
let isDrawing = false;

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

    gridContainerDisplay.addEventListener("mousedown", (e)=>{
        if(e.button == 0){
            isDrawing = true;
            e.preventDefault();
        }
    });

    document.addEventListener("mouseup", (e)=>{
        isDrawing = false;
    })


    for(let i = 0; i < size * size; i++){
        let box = document.createElement("div");
        box.style.border = "1px solid black";
        box.style.width = boxSize +"px";
        box.style.height = boxSize + "px";
        box.style.opacity = "0.8";

        gridContainerDisplay.appendChild(box);

        box.addEventListener("mouseenter", () =>{
            if(isDrawing){

                if(selectedMode == "colorPicker"){
                    box.style.backgroundColor = colorPickerInputBnt.value;
                    }
                else if(selectedMode == "rainbow"){
                     box.style.backgroundColor = `rgb(${Math.random()*256}, ${Math.random()* 256}, ${Math.random()* 256})`
                    }
                else if(selectedMode == "eraser"){
                    box.style.backgroundColor = "white";
                    }
                else if(selectedMode == "color"){
                    box.style.backgroundColor = "black";
                    } 
            }
        });
    };
}


clearBtn.addEventListener("click", function(){
    const boxes = document.querySelectorAll("div");
    boxes.forEach((box)=>{
        box.style.backgroundColor = "white";
    })
})


gridSizeRangeDisplay.addEventListener("input",function(){
    let size = (this.value);
    createGrid(size);
});


colorPickerInputBnt.addEventListener("click", function(){
    selectedMode = "colorPicker";
});

rainbowBtn.addEventListener("click", function(){
    selectedMode = "rainbow";
})

eraserBtn.addEventListener("click", function(){
    selectedMode = "eraser";
});

colorBnt.addEventListener("click", function(){
    selectedMode = "color";
});
