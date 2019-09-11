import MakeMatrix from './utils/MakeMatrix';
import ShowMatrix from './utils/ShowMatrix';
import ShakeMatrix from './utils/ShakeMatrix';

window.onload = () => {
  const Matrix = MakeMatrix();

  ShowMatrix(Matrix, '.board');

  const copyMatrix = JSON.parse(JSON.stringify(Matrix));

  ShowMatrix(ShakeMatrix(copyMatrix), '.board2');
  
}