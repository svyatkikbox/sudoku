import MakeMatrix from './MakeMatrix';
import HideCells from './HideCells';
import ShowMatrix from './ShowMatrix';

export default function Start() {
  let settings = localStorage.getItem('sudoku-settings') ? JSON.parse(localStorage.getItem('sudoku-settings')) : 0;
  
  if (!settings) {
    settings = {};

    const menu = document.querySelector('.menu');
    const levels = menu.querySelectorAll('.menu__btn');
    
    menu.classList.toggle('show');
    
    for (const level of levels) {
      level.onclick = () => {
        const difficulty = parseInt(level.value);
        
        settings.difficulty = difficulty;
        localStorage.setItem('sudoku-settings', JSON.stringify(settings));
        menu.classList.toggle('show');
        
        Start();
      }
    }
    
  } else {
    settings.difficulty = parseInt(settings.difficulty);
    
    const Matrix = MakeMatrix();
    const originalMatrix = JSON.parse(JSON.stringify(Matrix));

    HideCells(Matrix, settings);
    ShowMatrix(Matrix, '.board');
  }

}