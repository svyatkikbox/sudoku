import MakeMatrix from './MakeMatrix';
import HideCells from './HideCells';
import ShowMatrix from './ShowMatrix';
import Text from './Text';

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
      const lives = parseInt(level.dataset.lives);

      // Сохраняем выбор пользователя
      settings.difficulty = difficulty;
      settings.lives = lives;
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
    settings.lives = parseInt(settings.lives);

    const Matrix = MakeMatrix(); // главная матрица
    const numbers = document.querySelectorAll('.number'); // нижняя панель с цифрами для ввода
    const copyMatrix = JSON.parse(JSON.stringify(Matrix)); // копия матрицы для контроля игры
    const lives = document.querySelector('.lives'); // кол-во жизней
    let guessed = 0; // кол-во угаданных ячеек

    const Message = () => { // каждый раз после изменения текста ошибки будет запускаться setTimeout
      const message = document.querySelector('.message'); // сообщения об ошибках для пользователя
      return new Proxy(message, {
        set(message, innerText, val) {
          message.innerText = val;
          message.classList.add('show');
          setTimeout(() => {
            message.classList.remove('show');
            // message.innerText = '';
            if (val === Text.lose || val === Text.victory) {
              Play();
            }
          }, 2000);
          return true;
        }
      });
    };

    const message = Message();

    HideCells(Matrix, settings); // удаляет из матрицы кол-во ячеек, исходя из выбора сложности
    ShowMatrix(Matrix, '.board'); // рисуется матрица на доске

    toggleMenu.classList.remove('active'); // так как страница не перезагружается, то кнопка "залипает" (остается активной)
    toggleMenu.classList.add('show'); // при первом запуске игры гамбурге скрыт, при повторном надо его показать

    // Гамбургер открывает меню
    toggleMenu.onclick = () => {
      toggleMenu.classList.toggle('active');
      menu.classList.toggle('show');
    }

    lives.innerHTML = ''; // очищаем жизни

    for (let i = 0; i < settings.lives; i++) { // рисуем сердечки в зависимости от уровня сложности выбранного
      const live = document.createElement('div');

      live.classList.add('live');
      lives.appendChild(live);
    }

    for (const number of numbers) { // цифры для вставки в пустые ячейки
      number.onclick = () => {
        const activeQuiz = document.querySelector('.cell.quiz.active'); // активное поле для вставки

        if (activeQuiz) { // если найдено активное поле
          const numberContent = parseInt(number.innerText); // значение из нижней панели
          const [quizMatrixPositionX, quizMatrixPositionY] = [...activeQuiz.id]; // вычислянм координаты ячейки

          activeQuiz.innerText = numberContent; // записываем выбранную цифру в активную ячейку

          if (numberContent !== copyMatrix[quizMatrixPositionX][quizMatrixPositionY]) { // если выбранная цифра не совпадает со значением настоящим
            if (!lives.firstChild) { // если не осталось больше жизней перезапускаем
              message.innerText = Text.lose;
            } else {
              lives.firstChild.remove(); // убираем сердечко
              message.innerText = Text.error;
            }

          } else { // если введенное значение оказалось верным
            guessed++;

            activeQuiz.classList.remove('active');
            activeQuiz.classList.add('guessed');
            message.innerText = Text.success;

            if (guessed === settings.difficulty) {
              message.innerText = Text.victory;
            }
          }

        } else { // просим выбрать поле для заполнения
          message.innerText = Text.chooseEmpty;
        }
      }
    }
  }

}
