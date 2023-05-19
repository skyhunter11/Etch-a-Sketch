// Etch-A-Sketch //

// Declare container and draw grid
const container = document.getElementById('container');
drawGrid(99, 99);

// label clear button
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clearGrid);

// label resize button
const resizeBtn = document.getElementById('resize');
resizeBtn.addEventListener('click', resizeGrid);


// Functions //
function drawGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement('div');
      // cell.innerText = (c + 1);
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
    for (i = 0; i < cells.length; i++) {
           cells[i].remove();
    };
// draws new grid from prompt input
   let newSizeInt = Number(prompt('Enter new grid size'));
   drawGrid(newSizeInt,newSizeInt);

//    container.style.setProperty('grid-rows', newSizeInt);
//    container.style.setProperty('grid-cols', newSizeInt);
//    //
//    for (c = 0; c < (newSizeInt * newSizeInt); c++) {
//         let cell = document.createElement('div');
//         // cell.innerText = (c + 1);
//         container.appendChild(cell).className = 'grid-item';
//         //cell.classList.add('resize-class');
//         // add color class when hovered over
//         cell.addEventListener('mouseover', e => e.target.classList.add('my-color-class'));
//      };
};