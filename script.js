const mainContainer = document.querySelector("#mainContainer");
const inputColor = document.querySelector("#inputColor");
const eraser = document.querySelector("#eraser");
const rainbowColor = document.querySelector("#colorRainbow");
const inputSlider = document.querySelector("#slider");
const labelSlider = document.querySelector("#label")
let colorSelect = "black";
let color = "black";
let sliderValue = 16;
let widthHeight = 0;

//COLOR
function generateRainbow() {
    color ="#" + Math.floor(Math.random() * 16777215).
    toString(16);
}

eraser.addEventListener("click", () => {
    color = "white";
    colorSelect = "white";
    eraser.classList.toggle("active");
    rainbowColor.classList.remove("active");
  })
  
inputColor.addEventListener("input", () => {
    color = inputColor.value;
    colorSelect = "inputColor";
})
  
rainbowColor.addEventListener("click", () => 
    {colorSelect = "rainbow";
    rainbowColor.classList.toggle("active");
    eraser.classList.remove("active");
  });

function updateLabel() {
    labelSlider.textContent = sliderValue + "x" + sliderValue
}

//CREATE GRID


inputSlider.addEventListener("input", () => {
    sliderValue = inputSlider.value;
    generateSquares(sliderValue, sliderValue);
    updateLabel();
})

function generateSquares(sliderValue, sliderValue) {
    mainContainer.innerHTML = "";
    for (let i = 0; i < sliderValue * sliderValue; i++) {
      square(sliderValue);
    }
  }

function square(sliderValue) {
    widthHeight = 400 / sliderValue;
    const square = document.createElement("div");
    square.style.width = widthHeight +"px";
    square.style.height = widthHeight +"px";
    mainContainer.appendChild(square);
}


//////////////////////
let isMouseDown = false;
mainContainer.addEventListener("mousedown", () => isMouseDown = true);
mainContainer.addEventListener("mouseup", () => isMouseDown = false);

mainContainer.addEventListener("mousedown", (event) => {
  if (isMouseDown) { 
   event.preventDefault();
   if (colorSelect == "rainbow") {
      generateRainbow()
      event.target.style.background = color; 
    } else {
      event.target.style.background = color; 
   }
  }
 }
)

mainContainer.addEventListener("mouseover", (event) => {
  if (isMouseDown) {
    if (colorSelect == "rainbow") {
      generateRainbow()
      event.target.style.background = color; 
    } else {
      event.target.style.background = color; 
   }
  }
 }
)

mainContainer.addEventListener("mouseup", (event) => {
  if (isMouseDown) { 
   if (colorSelect == "rainbow") {
      generateRainbow()
      event.target.style.background = color; 
    } else {
      event.target.style.background = color; 
   }
  isMouseDown = false;
  }
 }
)

generateSquares(16, 16);
updateLabel();