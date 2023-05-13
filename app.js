const container = document.getElementById('container');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', e => e.target.classList.add('my-color-class'));
  };
};

//START HERE. Need to figure out how to clear out existing grid so new grid size can be drawn correctly. PERHAPS CLEAR the container somehow??
const resizeBtn = document.getElementById('resize');
resizeBtn.addEventListener('click', () => {
    let newSizeInt = Number(prompt('Enter new grid size'));

    makeRows(0,0);
    });


makeRows(10, 10);