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
  const switches = document.querySelector('.switches'); // переключатель темы сайта
  const circle = document.querySelector('.circle');

  switches.onclick = () => {
    document.body.classList.toggle('light');
    circle.classList.toggle('circle--dark');
    circle.classList.toggle('circle--light');
  };

  // Каждая кнопка задает сложность игры
  // Определяя кол-во скрытых полей на доске и доп жизней
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

      // Настройки сформированы, запускаем игру, чтобы произошел рендер доски
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

    const Matrix = MakeMatrix(); // главная матрица
    const numbers = document.querySelectorAll('.number'); // нижняя панель с цифрами для ввода
    const copyMatrix = JSON.parse(JSON.stringify(Matrix)); // копия матрицы для контроля игры
    const lives = document.querySelector('.lives'); // кол-во жизней
    const message = document.querySelector('.message'); // сообщения для пользователя
    let guessed = 0; // кол-во угаданных ячеек

    HideCells(Matrix, settings); // удаляет из матрицы кол-во ячеек, исходя из выбора сложности
    ShowMatrix(Matrix, '.board'); // рисуется матрица на доске

    const Message = (text, classes) => { // показ сообщений для пользователя
      message.innerText = text;

      message.classList.add('show');
      message.classList.add(...classes);

      setTimeout(() => {
        message.classList.remove('show');
        message.classList.remove(...classes);

        if (text === Text.lose || text === Text.victory) { // в случае сообщения о победе/проигрыше перезапускать игру
          Play();
        }

      }, 2000);

    };

    toggleMenu.classList.remove('active'); // так как страница не перезагружается, то кнопка "залипает" (остается активной)
    toggleMenu.classList.add('show'); // при первом запуске игры гамбургер скрыт, при повторном надо его показать

    // Гамбургер открывает меню
    toggleMenu.onclick = () => {
      toggleMenu.classList.toggle('active');
      menu.classList.toggle('show');
    }

    lives.innerHTML = ''; // очищаем жизни

    for (let i = 0; i < settings.lives; i++) { // рисуем сердечки в зависимости от уровня сложности
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
              Message(Text.lose, ['error']);
            } else {
              lives.firstChild.remove(); // убираем сердечко
              Message(Text.error, ['error']);
            }

          } else { // если введенное значение оказалось верным
            guessed++;

            activeQuiz.classList.remove('active');
            activeQuiz.classList.add('guessed');

            Message(Text.success, ['success']);

            if (guessed === settings.difficulty) {
              Message(Text.victory, ['success']);
            }
          }

        } else { // просим выбрать поле для заполнения
          Message(Text.chooseEmpty, ['error']);
        }
      }
    }
  }

}
