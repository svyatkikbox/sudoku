import RowsFromSectors from './RowsFromSectors';
import { ShakeRows, ShakeCols, Transposition } from './ShakeMatrix';
import RandomInt from './RandomInt';

export default () => {
  const sectors = []; // массив всех секторов 3х3, из которого будет создаваться матрица построчно

  for (let i = 1; i <= 9; i++) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // для каждого сектора создается новый массив
    const sector = []; // массив, в который попадают значения для сектора
    const index = numbers.indexOf(i); // каждый сектор начинается с новой цифры от 1 до 9
    numbers = [...numbers.splice(index, numbers.length), ...numbers]; // переносим часть массива, начиная с индекса итерируемого числа в начало массива

    numbers.forEach(number => { // получившийся массив является сектором будущей базовой матрицы (раскладки судоку)
      sector.push(number);
    });

    sectors.push(sector);

  }

  let matrix = RowsFromSectors(sectors); // Базовая раскладка судоку готова
  const shakes = RandomInt(1, 5); // кол-во перетасовок базовой матрицы генерируется

  ShakeRows(matrix);
  ShakeCols(matrix);
  Transposition(matrix);

  return matrix;

}
