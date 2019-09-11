import MakeMatrix from './utils/MakeMatrix';
import ShowMatrix from './utils/ShowMatrix';

window.onload = () => {
  const Matrix = MakeMatrix();
  
  ShowMatrix(Matrix, '.board');

}