import RowsFromSectors from './RowsFromSectors';

export default () => {
  const SECTORS = []; // массив всех секторов 3х3, из которого будет создаваться матрица построчно

  for (let i = 1; i <= 9; i++) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // для каждого сектора создается новый массив
    const sector  = []; // массив, в который попадают значения для сектора
    const index   = numbers.indexOf(i); // каждый сектор начинается с новой цифры от 1 до 9
    numbers       = [...numbers.splice(index, numbers.length), ...numbers];

    numbers.forEach(number => {
      sector.push(number);
    });

    SECTORS.push(sector);

  }

  const MATRIX = RowsFromSectors(SECTORS);

  return MATRIX;

}
