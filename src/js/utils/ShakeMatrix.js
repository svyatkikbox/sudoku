export const ShakeRows = (matrix) => {
  // Перемешиваем каждые три строки между собой
  for (let i = 0; i < matrix.length - 1; i++) {
    if (i === 2 || i === 5) { // проверка для перескакиваний границ (чтобы перемешивались только внутри каждой тройки)
      continue;
    } else {
      // Например в первых трех строках меняем сначала 1 со 2, 2 с 3
      // таким образом порядок сменится с 1 2 3 на 2 3 1 и т.д
      [matrix[i], matrix[i + 1]] = [matrix[i + 1], matrix[i]];
    }
  }

  return matrix;

}

export const ShakeCols = (matrix) => {
  // Перемешиваем каждые три колонки между собой
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length - 1; j++) { // проверка для перескакиваний границ (чтобы перемешивались только внутри каждой тройки)
      if (j === 2 || j === 5) {
        continue;
      } else {
        // перебирая значение матрицы слева направо и сверху вниз
        // меняем значения элементов внутри тройки столбцов
        // строка 1 2 3 | 4 5 6 | 7 8 9
        // станет 2 3 1 | 5 6 4 | 8 9 7 и т.д
        [matrix[i][j], matrix[i][j + 1]] = [matrix[i][j + 1], matrix[i][j]];
      }
    }
  }

  return matrix;

}

export const Transposition = (matrix) => {
  const Tmatrix = [];

  // транспонирование матрицы
  for (let i = 0; i < matrix.length; i++) {
    Tmatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      Tmatrix[i][j] = matrix[j][i];
    }
  }

  // Заменяем строки исходной матрицы на строки из транспонированной 
  for (let i = 0; i < matrix.length; i++) {
    [...matrix[i]] = [...Tmatrix[i]];
  }

  return Tmatrix;

}