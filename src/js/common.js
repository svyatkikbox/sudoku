import MakeMatrix from './utils/MakeMatrix';
import ShowMatrix from './utils/ShowMatrix';
import FilterRowsMatrix from './utils/FilterRowsMatrix';
import FilterSquaresMatrix from './utils/FilterSquaresMatrix';

const originalMatrix = MakeMatrix();
console.log(originalMatrix);
// const matrixCopy = JSON.parse(JSON.stringify(originalMatrix));
const filteredMatrix = FilterRowsMatrix(originalMatrix);

FilterSquaresMatrix(filteredMatrix);
ShowMatrix(filteredMatrix, '.board');
