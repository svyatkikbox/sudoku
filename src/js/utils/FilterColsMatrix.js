import RemoveDuplicates from './RemoveDuplicates';

export default matrix => {

  // проходим по каждому столбцу матрицы 
  for (let i = 0; i < matrix.length; i++) {
    const col = [];

    // и заполняем массив col его элементами
    for (let j = 0; j < matrix.length; j++) {
      col.push(matrix[j][i]);
    }

    col = RemoveDuplicates(col);

    // Замена в итоговой матрице итерируемого столбца на его отфильтрованный вариант
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[j][i] = col[j];
    }

  }

  return matrix;

};