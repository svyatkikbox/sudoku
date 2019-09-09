import MakeMatrix from './utils/MakeMatrix';
import MakeMatrix2 from './utils/MakeMatrix2';
import ShowMatrix from './utils/ShowMatrix';
import { uniqInSector, uniqInCol, uniqInRow } from './utils/Search';
// import FilterColsMatrix from './utils/FilterColsMatrix';
// import FilterSquaresMatrix from './utils/FilterSquaresMatrix';

//Создание матрицы с неповторяющимися цифрами в строке (!только в строке)
const originalMatrix = MakeMatrix();
const matrixCopy = JSON.parse(JSON.stringify(originalMatrix));

// console.log('=======================================');
// console.log('Копия исходной матрицы');
// console.log(matrixCopy);

// Очищение от дублей внутри секторов 3х3
// let filteredMatrix = FilterSquaresMatrix(originalMatrix);

// console.log('=======================================');
// console.log('очищение от дублей внутри секторов');
// console.log(filteredMatrix);

// Фильтрация матрицы по колонкам от дублей
// filteredMatrix = FilterColsMatrix(originalMatrix);
// console.log('=======================================');
// console.log('Очищенные от дублей колонки матрицы');
// console.log(filteredMatrix);

ShowMatrix(originalMatrix, '.board');

console.log(uniqInSector({ matrix: originalMatrix, number: 7, iSector: 0, jSector: 0, i: 2, j: 2 }));
console.log(uniqInRow({ matrix: originalMatrix, number: 7, i: 2, j: 2 }));
console.log(uniqInCol({ matrix: originalMatrix, number: 7, i: 2, j: 2 }));

const matrix2 = MakeMatrix2();
console.log(matrix2);