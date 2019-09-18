import Row from '../components/Row';
import Cell from '../components/Cell';

export default function ShowMatrix(matrix, parent) {
  // Очищаем текущую доску
  document.querySelector(parent).innerHTML = '';

  for (let i = 0; i < matrix.length; i++) {
    const matrixRow = matrix[i];
    const row = new Row({
      classList: 'row'
    });

    for (let j = 0; j < matrixRow.length; j++) {
      const number = matrixRow[j];
      const cell = new Cell({
        classList: 'cell',
        innerText: number,
        id: `${i}${j}`
      });

      if (i === 0) {
        cell.classList.add('top-board-border');
      }

      if (i === 8) {
        cell.classList.add('bottom-board-border');
      }

      if (j === 0) {
        cell.classList.add('left-board-border');
      }

      if (j === 8) {
        cell.classList.add('right-board-border');
      }

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