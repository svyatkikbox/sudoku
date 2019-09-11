export const ShakeRows = (matrix) => {

  // Перемешиваем каждые три строки между собой
  for (let i = 0; i < matrix.length - 1; i++) {
    if (i === 2 || i === 5) { // проверка для перескакиваний границ (чтобы перемешивались только внутри каждой тройки)
      continue;
    } else {
      let prevArr = [...matrix[i]];
      let nextArr = [...matrix[i + 1]];

      [...matrix[i]] = [...nextArr];
      [...matrix[i + 1]] = [...prevArr];
    }
  }

  return matrix;
}

export const ShakeCols = (matrix) => {

  // Перемешиваем каждые три колонки между собой
  for (let i = 0; i < matrix.length; i++) {
    // console.log(matrix[i][0]);
    // console.log(matrix[i][1]);
    console.log(matrix[i][3]);
    console.log(matrix[i][4]);
  }

  return matrix;
  
}