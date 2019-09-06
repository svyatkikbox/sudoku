import RemoveDuplicates from './RemoveDuplicates';

export default matrix => {

  // проходим по каждому столбцу матрицы 
  for (let i = 0; i < matrix.length; i++) {
    const col = [];

    // и заполняем массив col его элементами
    for (let j = 0; j < matrix.length; j++) {
      col.push(matrix[j][i]);
    }

    // // пробегаем по массиву, содержащему элементы столбца матрицы и убираем повторения
    // col.forEach((cell, index) => {
    //   // все повторения каждого элемента записываются в doublesIndexes, idx - индекс текущий для каждого дубля
    //   let doublesIndexes = [];
    //   let idx = col.indexOf(cell);

    //   // Пока все дубли не будут найдены, сдвигаемся в поиске по col на 1 индекс вперед
    //   while (idx != -1) {
    //     doublesIndexes.push(idx);
    //     idx = col.indexOf(cell, idx + 1);
    //   }

    //   // Вывод всех дублей каждого элемента внутри col
    //   // console.log(`индексы всех ${cell} `, doublesIndexes);

    //   // удаляем все копии, кроме первого найденного уникального...
    //   doublesIndexes.forEach((doubleIndex, index) => {
    //     // ...(он, разумеется, с 0 индексом)
    //     if (index === 0) {
    //       return;
    //     } else {
    //       // Вместо дублей отображаются пустые поля
    //       // При отрисовке будут пустые ячейки в html
    //       col[doubleIndex] = '';
    //     }
    //   });

    //   // Результат процесса очистки столбца матрицы от дублей
    // });

    col = RemoveDuplicates(col);

    // Замена в итоговой матрице итерируемого столбца на его отфильтрованный вариант
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[j][i] = col[j];
    }

  }

  return matrix;

};