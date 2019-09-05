import randomInteger from './RandomInt';

export default function MakeMatrix() {
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
