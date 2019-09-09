import MakeMatrix from './utils/MakeMatrix';
import ShowMatrix from './utils/ShowMatrix';
import { uniqInSector, uniqInCol, uniqInRow } from './utils/Search';

//Создание матрицы с неповторяющимися цифрами в строке (!только в строке)
const originalMatrix = MakeMatrix();

ShowMatrix(originalMatrix, '.board');

const matrix2 = MakeMatrix2();
console.log(matrix2);