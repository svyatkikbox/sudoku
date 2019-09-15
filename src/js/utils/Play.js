import MakeMatrix from './MakeMatrix';
import HideCells from './HideCells';
import ShowMatrix from './ShowMatrix';

export default function Play() {
  // Проверка ? существуют ли уже сохраненные настройки игры
  let settings = localStorage.getItem('sudoku-settings') ? JSON.parse(localStorage.getItem('sudoku-settings')) : 0;
  
  const menu = document.querySelector('.menu');
  const toggleMenu = document.querySelector('.menu__toggle');
  const levels = menu.querySelectorAll('.menu__btn');
  
  // Каждая кнопка задает сложность игры
  // Определяя кол-во скрытых полей на доске
  for (const level of levels) {
    level.onclick = () => {
      const difficulty = parseInt(level.value);
      
      // Сохраняем выбор пользователя
      settings.difficulty = difficulty;
      localStorage.setItem('sudoku-settings', JSON.stringify(settings));
      
      // Скрываем меню
      menu.classList.toggle('show');
      
      // Настройки сформированы, заново запускаем игру, чтобы произошел рендер доски
      Play();
    }

  }

  // Если запуск первый
  if (!settings) {
    // Формируем объект с настройками игры
    settings = {};
    
    // Показываем игроку меню
    menu.classList.toggle('show');
  } else {
    // Если повторный, то генерируем доску с учетом существующих настроек
    settings.difficulty = parseInt(settings.difficulty);
    
    const Matrix = MakeMatrix();
    const copyMatrix = JSON.parse(JSON.stringify(Matrix));

    HideCells(Matrix, settings);
    ShowMatrix(Matrix, '.board');

    toggleMenu.classList.remove('active'); // так как страница не перезагружается, то кнопка "залипает" (остается активной)
    toggleMenu.classList.add('show'); // при первом запуске игры гамбурге скрыт, при повторном надо его показать

    // Гамбургер открывает меню
    toggleMenu.onclick = () => {
      toggleMenu.classList.toggle('active');
      menu.classList.toggle('show');
    }

  }

}
