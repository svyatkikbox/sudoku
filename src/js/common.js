import MakeMatrix from './utils/MakeMatrix';
import ShowMatrix from './utils/ShowMatrix';
import HideCells from './utils/HideCells';

window.onload = () => {
  const Matrix = MakeMatrix();
  const originalMatrix = JSON.parse(JSON.stringify(Matrix));
  const settings = {
    difficulty: {
      easy: 20,
      normal: 35,
      hard: 50,
      impossible: 65
    }
  };

  HideCells(Matrix, settings);
  ShowMatrix(Matrix, '.board');

}