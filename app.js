// Etch-A-Sketch //

// Declare container and draw grid
const container = document.getElementById('container');
drawGrid(64, 64);

// label clear button
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clearGrid);

// label resize button
const resizeBtn = document.getElementById('resize');
resizeBtn.addEventListener('click', resizeGrid);

// label eraser button
const eraseBtn = document.getElementById('erase')
eraseBtn.addEventListener('click', eraseGrid);


// Functions //
function eraseGrid () {
    const cells = document.querySelectorAll('.grid-item');
    for (i = 0; i < cells.length; i++){
        cells[i].addEventListener('mouseover', e => e.target.classList.remove('my-color-class'));
    };
};

function drawGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement('div');
      container.appendChild(cell).className = 'grid-item';
      // add color class when hovered over
      cell.addEventListener('mouseover', e => e.target.classList.add('my-color-class'));
    };
  };

function clearGrid() {
    const cells = document.querySelectorAll('.grid-item');
    for (i = 0; i < cells.length; i++){
        cells[i].classList.remove('my-color-class');
    };
};

function resizeGrid() {
    const cells = document.querySelectorAll('.grid-item');
    //clears old grid
    for (i = 0; i < cells.length; i++) {
           cells[i].remove();
    };
// draws new grid from prompt input
   let newSizeInt = Number(prompt('Enter new grid size'));
   if (newSizeInt > 100) {
    alert("Please enter positive integer equal to or less than 100");
   }
   else drawGrid(newSizeInt,newSizeInt);
};