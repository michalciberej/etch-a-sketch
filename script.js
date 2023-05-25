let color = "";
const container = document.querySelector("#squaresContainer");
const colorPicker = document.querySelector("#colorPicker");
const eraser = document.querySelector("#eraser");
const rainbow = document.querySelector("#colorRainbow");
const smallSizeSquares = document.querySelector("#smallSizeSquares");
const mediumSizeSquares = document.querySelector("#mediumSizeSquares");
const largeSizeSquares = document.querySelector("#largeSizeSquares");
const maxSizeSquares = document.querySelector("#maxSizeSquares");

colorPicker.addEventListener("change", (event) => {
    color = event.target.value;
});
eraser.addEventListener("click", (event) => {

});
rainbow.addEventListener("click", (event) => {

});
smallSizeSquares.addEventListener("click", () => {
    createSquares(8, 8);
    container.querySelectorAll("div").classList.add("mediumSquares");
    smallSizeSquares.classList.toggle("active");
})

mediumSizeSquares.addEventListener("click", () => {
    createSquares(16, 16)
    mediumSizeSquares.classList.toggle("active")
})

largeSizeSquares.addEventListener("click", () => {
    createSquares(32, 32)
    largeSizeSquares.classList.toggle("active")
})
    
maxSizeSquares.addEventListener("click", () => {
    createSquares(64,64);
    maxSizeSquares.classList.toggle("active");
});
//square.addEventListener("hovering", () => );

function square() {
    const square = document.createElement("div");
    square.classList.add("squares");
    container.appendChild(square);
}

function createSquares(row, column) {
  for (let i = 0; i < row * column ; i++) {
        square();
 }  
}
