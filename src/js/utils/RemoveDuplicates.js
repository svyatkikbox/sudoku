export default array => {
  // пробегаем по массиву, содержащему элементы столбца матрицы и убираем повторения
  array.forEach((cell, index) => {
    // все повторения каждого элемента записываются в doublesIndexes, idx - индекс текущий для каждого дубля
    let doublesIndexes = [];
    let idx = array.indexOf(cell);

    // Пока все дубли не будут найдены, сдвигаемся в поиске по array на 1 индекс вперед
    while (idx != -1) {
      doublesIndexes.push(idx);
      idx = array.indexOf(cell, idx + 1);
    }

    // Вывод всех дублей каждого элемента внутри array
    // console.log(`индексы всех ${cell} `, doublesIndexes);

    // удаляем все копии, кроме первого найденного уникального...
    doublesIndexes.forEach((doubleIndex, index) => {
      // ...(он, разумеется, с 0 индексом)
      if (index === 0) {
        return;
      } else {
        // Вместо дублей отображаются пустые поля
        // При отрисовке будут пустые ячейки в html
        array[doubleIndex] = '';
      }
    });

    // Результат процесса очистки столбца матрицы от дублей
    // console.log(array);
  });

  return array;
}