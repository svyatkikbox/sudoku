import MakeMatrix from './utils/MakeMatrix';
import ShowMatrix from './utils/ShowMatrix';
import HideCells from './utils/HideCells';
import Menu from './utils/Menu';

window.onload = () => {
  const settings = Menu();
  const Matrix = MakeMatrix();
  const originalMatrix = JSON.parse(JSON.stringify(Matrix));

  HideCells(Matrix, settings);
  ShowMatrix(Matrix, '.board');

}