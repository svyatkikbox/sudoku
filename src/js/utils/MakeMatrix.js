import randomInteger from './RandomInt';
import { uniqInSector, uniqInCol, uniqInRow } from './Search';

export default () => {
  // Главный массив, в котором лежат все строки
  const MATRIX = [
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

  //  В цикле формируется матрица построчно 
  for (let i = 0; i < 9; i++) {
    // Для каждой строки формируется массив с числами от 1 до 9
    // из массива рандомно будут выбираться числа при помощи RandomInt
    // После каждого удачного заполнения ячейки в строке, будет удаляться соответствующий элемент массива
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let j = 0; j < 9; j++) {
      // В условиях проверяется нахождение итерируемого элемента матрицы
      // на принадлежность одному из 9 секторов 3х3 в порядке слева направо, сверху вниз

      // Выбираем из массива numbers рандомный элемент, который будем прогонять через проверки на правила судоку
      if (i < 3 && j < 3) { // 1 sector

      }

      if (i < 3 && (j >= 3 && j < 6)) { // 2 sector

      }

      if (i < 3 && j >= 6) { // 3 sector

      }

      if ((i >= 3 && i < 6) && j < 3) { // 4 sector

      }

      if ((i >= 3 && i < 6) && (j >= 3 && j < 6)) { // 5 sector

      }

      if ((i >= 3 && i < 6) && j >= 6) { // 6 sector

      }

      if (i >= 6 && j < 3) { // 7 sector

      }

      if (i >= 6 && (j >= 3 && j < 6)) { // 8 sector

      }

      if (i >= 6 && j >= 6) { // 9 sector

      }
    }
  }

  return MATRIX;

}
