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

// label resize button
const resizeBtn = document.getElementById('resize');

//clears old grid
resizeBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll('.grid-item');
     for (i = 0; i < squares.length; i++) {
            squares[i].remove();
     }
// draws new grid from prompt input
    let newSizeInt = Number(prompt('Enter new grid size'));
    container.style.setProperty('grid-rows', newSizeInt);
    container.style.setProperty('grid-cols', newSizeInt);
    for (c = 0; c < (newSizeInt * newSizeInt); c++) {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseover', e => e.target.classList.add('my-color-class'));
      };
    });


makeRows(10, 10);