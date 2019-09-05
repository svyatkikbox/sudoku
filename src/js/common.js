import MakeMatrix from './utils/MakeMatrix';
import ShowMatrix from './utils/ShowMatrix';
import FilterMatrix from './utils/FilterMatrix';

const originalMatrix = MakeMatrix();
const matrixCopy = JSON.parse(JSON.stringify(originalMatrix));

console.log(originalMatrix);
console.log(matrixCopy);

const filteredMatrix = FilterMatrix(originalMatrix);

ShowMatrix(filteredMatrix, '.board');
