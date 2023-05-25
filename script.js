let container = document.querySelector("#squaresContainer");

function square() {
    const square = document.createElement("div");
    square.classList.add("squares")
    container.appendChild(square)
}

function createSquares(row, column) {
  for (let i = 0; i < row * column ; i++) {
        square();
 }  
}
