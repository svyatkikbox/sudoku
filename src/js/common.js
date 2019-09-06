import MakeMatrix from './utils/MakeMatrix';
import ShowMatrix from './utils/ShowMatrix';
import FilterRowsMatrix from './utils/FilterRowsMatrix';

const originalMatrix = MakeMatrix();
const matrixCopy = JSON.parse(JSON.stringify(originalMatrix));

console.log(originalMatrix);
console.log(matrixCopy);

const filteredMatrix = FilterRowsMatrix(originalMatrix);

ShowMatrix(filteredMatrix, '.board');
