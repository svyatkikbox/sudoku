import RandomInt from "./RandomInt";

export default (matrix, settings) => {
  const hiddenCells = new Set();

  while (hiddenCells.size !== settings.difficulty.easy) {
    const x = RandomInt(0, matrix.length - 1);
    const y = RandomInt(0, matrix.length - 1);

    if (!hiddenCells.has(`${x}${y}`)) {
      matrix[x][y] = '';
      hiddenCells.add(`${x}${y}`);
    }

  }

  return matrix;

}