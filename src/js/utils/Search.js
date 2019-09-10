// number - число, которое надо проверить на уникальность
// iSector - i координата сектора (строка)
// jSector - j координата сектора (столбец)
// i, j - координаты элемента матрицы, для которого происходит поиск значения

export const uniqInSector = ({ matrix, number, iSectorStart, jSectorStart, iSectorEnd, jSectorEnd, i, j }) => {
  // console.log('поиск в секторе значений равных', number);
  // console.log('для заполнения ячейки', i, ':', j);
  for (let x = iSectorStart; x <= iSectorEnd; x++) {
    for (let y = jSectorStart; y <= jSectorEnd; y++) {
      // console.log('проверяемый элемент равен', matrix[x][y]);
      if (matrix[x][y] === number) {
        return false;
      }
    }
  }

  return true;
}

export const uniqInRow = ({ matrix, number, i, j }) => {
  // console.log('поиск в строке значений равных', number);
  // console.log('для заполнения ячейки', i, ':', j);
  for (let x = 0; x <= j; x++) {
    // console.log('проверяемый элемент равен', matrix[i][x]);
    if (matrix[i][x] === number) {
      return false;
    }
  }

  return true;
}

export const uniqInCol = ({ matrix, number, i, j }) => {
  // console.log('поиск в столбце значений равных', number);
  // console.log('для заполнения ячейки', i, ':', j);
  for (let y = 0; y <= i; y++) {
    // console.log('проверяемый элемент равен', matrix[y][j]);
    if (matrix[y][j] === number) {
      return false;
    }
  }

  return true;
}

export const isUniq = ({ matrix, number, iSectorStart, jSectorStart, iSectorEnd, jSectorEnd, i, j }) => {
  return (
    uniqInSector({ matrix, number, iSectorStart, jSectorStart, iSectorEnd, jSectorEnd })
    &&
    uniqInRow({ matrix, number, i, j })
    &&
    uniqInCol({ matrix, number, i, j })
  );
}