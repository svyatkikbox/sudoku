export default matrix => {
  for (let i = 0; i < matrix.length; i++) {
    const col = [];

    for (let j = 0; j < matrix.length; j++) {
      col.push(matrix[j][i]);
    }

    // пробегаем по столбцу матрицы и убираем повторения
    col.forEach((cell, index) => {
      let doublesIndexes = [];
      let idx = col.indexOf(cell);

      while (idx != -1) {
        doublesIndexes.push(idx);
        idx = col.indexOf(cell, idx + 1);
      }

      console.log(`индексы всех ${cell} `, doublesIndexes);

      // удаляем все копии, кроме первого вхождения
      doublesIndexes.forEach((doubleIndex, index) => {
        if (index === 0) {
          return;
        } else {
          col[doubleIndex] = '?';
        }
      });

      console.log(col);
    });

    for (let j = 0; j < matrix[i].length; j++) {
      matrix[j][i] = col[j];
    }

  }

  return matrix;

};