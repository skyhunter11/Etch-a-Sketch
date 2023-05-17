const container = document.getElementById('container');
// draw grid
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    cell.innerText = (c + 1);
    container.appendChild(cell).className = 'grid-item';
    cell.addEventListener('mouseover', e => e.target.classList.add('my-color-class'));
  };
};


// label clear button
const clearBtn = document.getElementById('clear');
// sets all cells backrounds to white
clearBtn.addEventListener('click', () => {
    const cells = document.querySelectorAll('.grid-item');
    for (i = 0; i < cells.length; i++){
        cells[i].classList.remove('my-color-class');
    }
});

// let allCells = document.querySelectorAll(".gamecell").forEach(cell => {
//     cell.style.backgroundColor = "white";


// label resize button
const resizeBtn = document.getElementById('resize');
//clears old grid
resizeBtn.addEventListener('click', () => {
    const cells = document.querySelectorAll('.grid-item');
     for (i = 0; i < cells.length; i++) {
            cells[i].remove();
     }
// draws new grid from prompt input
    let newSizeInt = Number(prompt('Enter new grid size'));
    container.style.setProperty('grid-rows', newSizeInt);
    container.style.setProperty('grid-cols', newSizeInt);
    for (c = 0; c < (newSizeInt * newSizeInt); c++) {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);

        cell.style.height = (700/newSizeInt);
        cell.style.width = (700/newSizeInt);
        //cell.classList.add('resize-class');

        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseover', e => e.target.classList.add('my-color-class'));
      };
    });


makeRows(10, 10);