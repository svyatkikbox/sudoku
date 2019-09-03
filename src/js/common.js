import Cell from './components/Cell';
import Row from './components/Row';

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

function MakeMatrix() {
  const matrix = [];

  while (matrix.length !== 9) {
    const row = [];
    const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    while (row.length !== 9) {
      const randIndex = randomInteger(0, range.length - 1);

      row.push(range[randIndex]);
      range.splice(randIndex, 1);
    }

    matrix.push(row);
  }

  return matrix;
}

function ShowMatrix(matrix, parent) {
  for (let i = 0; i < matrix.length; i++) {
    const matrixRow = matrix[i];
    const row = new Row();

    row.classList.add('row');

    for (let j = 0; j < matrixRow.length; j++) {
      const number = matrixRow[j];
      const cell = new Cell({
        classList: 'cell',
        innerText: number,
        id: `_${i}${j}`
      });

      if (j === 2 || j === 5) {
        cell.classList.add('vertical');
      }

      if (i === 2 || i === 5) {
        cell.classList.add('horizontal');
      }

      row.append(cell);
    }
    document.querySelector(parent).append(row);
  }
}

const matrix = MakeMatrix();

ShowMatrix(matrix, '.board');
