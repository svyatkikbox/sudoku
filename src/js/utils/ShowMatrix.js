import Row from '../components/Row';
import Cell from '../components/Cell';

export default function ShowMatrix(matrix, parent) {
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