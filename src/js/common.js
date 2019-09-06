import MakeMatrix from './utils/MakeMatrix';
import ShowMatrix from './utils/ShowMatrix';
import FilterColsMatrix from './utils/FilterColsMatrix';
import FilterSquaresMatrix from './utils/FilterSquaresMatrix';

//Создание матрицы с неповторяющимися цифрами в строке (!только в строке)
const originalMatrix = MakeMatrix();

const matrixCopy = JSON.parse(JSON.stringify(originalMatrix));
console.log('=======================================');
console.log('Копия исходной матрицы');
console.log(matrixCopy);


// Очищение от дублей внутри секторов 3х3
let filteredMatrix = FilterSquaresMatrix(originalMatrix);
console.log('=======================================');
console.log('очищение от дублей внутри секторов');
console.log(filteredMatrix);

// Фильтрация матрицы по колонкам от дублей
filteredMatrix = FilterColsMatrix(originalMatrix);
console.log('=======================================');
console.log('Очищенные от дублей колонки матрицы');
console.log(filteredMatrix);







// // Фильтрация матрицы по колонкам от дублей
// let filteredMatrix = FilterColsMatrix(originalMatrix);
// console.log('=======================================');
// console.log('Очищенные от дублей колонки матрицы');
// console.log(filteredMatrix);

// // Очищение от дублей внутри секторов 3х3
// filteredMatrix = FilterSquaresMatrix(filteredMatrix);
// console.log('=======================================');
// console.log('очищение от дублей внутри секторов');
// console.log(filteredMatrix);

ShowMatrix(filteredMatrix, '.board');
