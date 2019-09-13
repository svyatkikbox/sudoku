export default (sectors) => {
  const matrix = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];

  // В массиве sectors построчно хранятся массивы, которые отвечают за секторы
  // в порядке сверху вниз, слева направо
  // 1 4 7
  // 2 5 8
  // 3 6 9
  // Каждую строку (сектор) разбиваем на массивы по 3 элемента
  // Каждый из этих массивов соответствует строке сектора будущей матрицы с соответствующим индексом
  // сектор 1 в виде строки 1 2 3 4 5 6 7 8 9
  // после цикла примет вид в итоговой матрице
  // 1 2 3 | x x x | x x x
  // 4 5 6 | x x x | x x x
  // 7 8 9 | x x x | x x x
  // x x x | x x x | x x x
  // x x x | x x x | x x x
  // x x x | x x x | x x x
  for (let i = 0; i < sectors.length; i++) {
    const firstTrio = sectors[i].slice(0, 3);
    const secondTrio = sectors[i].slice(3, 6);
    const thirdTrio = sectors[i].slice(6, 9);

    // первые три строки будущей матрицы образуют сектора под номерами 1 4 7
    // их индексы в массиве sectors - 0 3 6 соответственно
    // и т.д
    if (i === 0 || i === 3 || i === 6) {
      matrix[0] = [...matrix[0], ...firstTrio];
      matrix[1] = [...matrix[1], ...secondTrio];
      matrix[2] = [...matrix[2], ...thirdTrio];
    }

    // 2 5 8 секторы
    if (i === 1 || i === 4 || i === 7) {
      matrix[3] = [...matrix[3], ...firstTrio];
      matrix[4] = [...matrix[4], ...secondTrio];
      matrix[5] = [...matrix[5], ...thirdTrio];
    }

    // 3 6 9 секторы
    if (i === 2 || i === 5 || i === 8) {
      matrix[6] = [...matrix[6], ...firstTrio];
      matrix[7] = [...matrix[7], ...secondTrio];
      matrix[8] = [...matrix[8], ...thirdTrio];
    }

  }

  return matrix;

}