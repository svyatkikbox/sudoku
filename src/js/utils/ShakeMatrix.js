import RandomInt from './RandomInt';

export const ShakeCols = (matrix) => {
  // Перемешивает колонки внутри групп-троек
  const shakedPairs = new Map;

  // Выбираются случайные колонки для тасовки
  for (let i = 0; i < matrix.length; i++) {
    if (i <= 2) {
      shakedPairs.set(RandomInt(0, 2), i);
    }

    if (i > 2 && i <= 5) {
      shakedPairs.set(RandomInt(3, 5), i);
    }

    if (i > 5) {
      shakedPairs.set(RandomInt(6, 8), i);
    }

  }

  // Перемешиваются отобранные
  shakedPairs.forEach((to, from) => {
    for (let i = 0; i < matrix.length; i++) {
      [matrix[i][to], matrix[i][from]] = [matrix[i][from], matrix[i][to]];
    }
  });

  return matrix;

}

export const Transposition = (matrix) => {
  // транспонирование матрицы
  const Tmatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    Tmatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      Tmatrix[i][j] = matrix[j][i];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    [...matrix[i]] = [...Tmatrix[i]];
  }

  return Tmatrix;

}

export const ShakeRows = (matrix) => {
  // Перемешиваем строки в группах-тройках между собой

  for (let i = 0; i < matrix.length; i++) {
    if (i <= 2) {
      const changeIdx = RandomInt(0, 2);
      [matrix[i], matrix[changeIdx]] = [matrix[changeIdx], matrix[i]];
    }

    if (i > 2 && i <= 5) {
      const changeIdx = RandomInt(3, 5);
      [matrix[i], matrix[changeIdx]] = [matrix[changeIdx], matrix[i]];
    }

    if (i > 5) {
      const changeIdx = RandomInt(6, 8);
      [matrix[i], matrix[changeIdx]] = [matrix[changeIdx], matrix[i]];
    }
  }

  return matrix;

}

export const ShakeGroupRows = (matrix) => {
  // перемешивает строковые группы-тройки
  const [firstTrio, secondTrio, thirdTrio] = [matrix.slice(0, 3), matrix.slice(3, 6), matrix.slice(6, 9)];

  let shakedMatrix = [];
  let rowsTrios = [firstTrio, secondTrio, thirdTrio];

  for (let i = 0; i < rowsTrios.length; i++) {
    let randIdx = RandomInt(0, rowsTrios.length - 1);
    [rowsTrios[i], rowsTrios[randIdx]] = [rowsTrios[randIdx], rowsTrios[i]];
  }

  rowsTrios.forEach(trio => {
    shakedMatrix = [...shakedMatrix, ...trio];
  });

  return shakedMatrix;

}

export const ShakeGroupCols = (matrix) => {
  // перемешивает группы-тройки столбцов
  let order = new Set;

  // Создаем новый порядок
  while (order.size !== 3) {
    order.add(RandomInt(0, 2));
  }

  order = Array.from(order);

  // Меняем исходную матрицу согласно новому порядку
  for (let i = 0; i < matrix.length; i++) {
    const [firstTrio, secondTrio, thirdTrio] = [matrix[i].slice(0, 3), matrix[i].slice(3, 6), matrix[i].slice(6, 9)];

    let rowsTrios = [firstTrio, secondTrio, thirdTrio];
    let newRow = [];

    order.forEach((trioIdx) => {
      newRow = [...newRow, ...rowsTrios[trioIdx]];
    });

    [matrix[i]] = [newRow];
  }

  return matrix;

}

export default [
  ShakeRows,
  ShakeCols,
  Transposition,
  ShakeGroupRows,
  ShakeGroupCols
];