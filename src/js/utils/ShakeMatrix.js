import RandomInt from './RandomInt';

export const ShakeCols = (matrix) => {
  // Перемешиваем каждые три колонки между собой
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length - 1; j++) { // проверка для перескакиваний границ (чтобы перемешивались только внутри каждой тройки)
      if (j === 2 || j === 5) {
        continue;
      } else {
        // перебирая значение матрицы слева направо, сверху вниз
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

export const ShakeRows = (matrix) => {

  for (let i = 0; i < matrix.length; i++) {
  
    if (i <= 2) {
      const changeIdx = RandomInt(0,2);
      [matrix[i], matrix[changeIdx]] = [matrix[changeIdx], matrix[i]];
    }
    
    if (i > 2 && i <= 5) {
      const changeIdx = RandomInt(3,5);
      [matrix[i], matrix[changeIdx]] = [matrix[changeIdx], matrix[i]];
    }
    
    if (i > 5) {
      const changeIdx = RandomInt(6,8);
      [matrix[i], matrix[changeIdx]] = [matrix[changeIdx], matrix[i]];
    }
    
  }

  return matrix;
}