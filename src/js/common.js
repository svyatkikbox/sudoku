import MakeMatrix from './utils/MakeMatrix';
import ShowMatrix from './utils/ShowMatrix';
import { ShakeRows, ShakeCols } from './utils/ShakeMatrix';

window.onload = () => {
  const Matrix = MakeMatrix();
  
  const copyMatrix = JSON.parse(JSON.stringify(Matrix));
  const copyMatrix2 = JSON.parse(JSON.stringify(copyMatrix));

  const MatrixShakeRows = ShakeRows(copyMatrix);
  const MatrixShakeCols = ShakeCols(copyMatrix2);

  ShowMatrix(Matrix, '.board');

  ShowMatrix(MatrixShakeRows, '.board2');
  ShowMatrix(MatrixShakeCols, '.board3');
  
}