import RandomInt from './RandomInt';

// export const ShakeCols = (matrix) => {
//   // Перемешиваем колонки в группах-тройках между собой
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length - 1; j++) {
//       if (j === 2 || j === 5) {
//         continue;
//       } else {
//         // перебирая значение матрицы слева направо, сверху вниз
//         // меняем значения элементов внутри тройки столбцов
//         // строка 1 2 3 | 4 5 6 | 7 8 9
//         // станет 2 3 1 | 5 6 4 | 8 9 7 и т.д
//         [matrix[i][j], matrix[i][j + 1]] = [matrix[i][j + 1], matrix[i][j]];
//       }
//     }
//   }

//   return matrix;

// }

export const ShakeCols = (matrix) => {
  const copy = JSON.parse(JSON.stringify(matrix));
  console.log(copy);

  const shakedPairs = new Map;

  // Перемешиваем колонки в группах-тройках между собой
  for (let i = 0; i < matrix.length; i++) {
    if (i <= 2) {
      shakedPairs.set(i, RandomInt(0,2));
    }
    
    if (i > 2 && i<= 5) {
      shakedPairs.set(i, RandomInt(3,5));
    }
    
    if (i > 5) {
      shakedPairs.set(i, RandomInt(6,8));
    }

  }

  console.log('shakedPairs:', shakedPairs);
  
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
  // Перемешиваем строки в группах-тройках между собой

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

export const ShakeGroupRows = (matrix) => {
  // выполняет роль тасовщика строковых групп-троек
  
  const firstTrio = matrix.slice(0, 3);
  const secondTrio = matrix.slice(3, 6);
  const thirdTrio = matrix.slice(6, 9);
  
  let shakedMatrix = [];
  let rowsTrios = [firstTrio, secondTrio, thirdTrio];

  for (let i = 0; i < rowsTrios.length; i++) {
    let randIdx = RandomInt(0, rowsTrios.length - 1); 
    [rowsTrios[i], rowsTrios[randIdx]] = [rowsTrios[randIdx], rowsTrios[i]];
  }

  rowsTrios.forEach(trio => {
    shakedMatrix = [...shakedMatrix, ...trio];
  });

  return matrix;

}