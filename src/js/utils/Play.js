import MakeMatrix from './MakeMatrix';
import HideCells from './HideCells';
import ShowMatrix from './ShowMatrix';

export default function Play() {
  // Проверка ? существуют ли уже сохраненные настройки игры
  let settings = localStorage.getItem('sudoku-settings') ? JSON.parse(localStorage.getItem('sudoku-settings')) : 0;

  const menu = document.querySelector('.menu'); // главное меню с выбором сложности
  const toggleMenu = document.querySelector('.menu__toggle'); // гамбургер
  const levels = menu.querySelectorAll('.menu__btn'); // кнопки сложности

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

    const Matrix = MakeMatrix(); // главная матрица
    const numbers = document.querySelectorAll('.number'); // нижняя панель с цифрами для ввода
    const copyMatrix = JSON.parse(JSON.stringify(Matrix)); // копия матрицы для контроля игры
    const errorText = document.querySelector('.error'); // сообщения об ошибках для пользователя

    HideCells(Matrix, settings); // удаляет из матрицы кол-во ячеек, исходя из выбора сложности
    ShowMatrix(Matrix, '.board'); // рисуется матрица на доске

    toggleMenu.classList.remove('active'); // так как страница не перезагружается, то кнопка "залипает" (остается активной)
    toggleMenu.classList.add('show'); // при первом запуске игры гамбурге скрыт, при повторном надо его показать

    // Гамбургер открывает меню
    toggleMenu.onclick = () => {
      toggleMenu.classList.toggle('active');
      menu.classList.toggle('show');
    }

    for (const number of numbers) { // цифры для вставки в пустые ячейки
      number.onclick = () => {
        const activeQuiz = document.querySelector('.cell.quiz.active');

        if (activeQuiz) {
          const numberContent = number.innerText;
          const [quizMatrixPositionX, quizMatrixPositionY] = [...activeQuiz.id];

          console.log('i ', quizMatrixPositionX);
          console.log('j ', quizMatrixPositionY);
          console.log(numberContent);

          activeQuiz.innerText = numberContent;

          console.log('copyMatrix:', copyMatrix);
          console.log(copyMatrix[quizMatrixPositionX][quizMatrixPositionY]);
        } else {
          errorText.innerText = 'Выберите ячейку для вставки значения';
          setTimeout(() => {
            errorText.innerText = '';
          }, 3000);
        }
      }
    }
  }

}
