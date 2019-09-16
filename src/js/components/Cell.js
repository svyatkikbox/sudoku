export default class Cell extends HTMLElement {
  constructor(props) {
    super(props);

    this.classList = props.classList;
    this.innerText = props.innerText;

    const ClearColored = (color) => {
      const cells = document.querySelectorAll('matrix-cell');

      cells.forEach(cell => {
        cell.classList.remove(color);
      });
    }

    if (this.innerText === '') { // скрытые ячейки помечаем классом
      this.classList.add('quiz');

      this.addEventListener('click', () => {

        if (!this.classList.contains('active')) {
          const activeQuiz = document.querySelectorAll('.cell.quiz.active');

          activeQuiz.forEach(quiz => {
            quiz.classList.remove('active');
          });

          this.classList.add('active');

        } else { // повторный клик по активной ячейке снимает статус
          this.classList.remove('active');
        }

      });
    }

    this.id = props.id;

    this.addEventListener('click', () => {
      const [i, j] = [...this.id]; // разбиваем id для получения координат ячейки
      const cellNumber = this.innerText; // получаем ее содержимое

      if (!this.classList.contains('colored') && !this.classList.contains('quiz')) { // если ячейка не покрашена и не скрытая
        const colored = document.querySelectorAll('.colored');

        if (colored) { // перед этим очищаем окрашенные ранее
          colored.forEach(coloredCell => {
            coloredCell.classList.remove('colored');
          });
        }

        const similar = document.querySelectorAll('matrix-cell');

        similar.forEach(cell => {
          if (cell.innerText === cellNumber) {
            cell.classList.add('colored');
          }
        });

      } else { // при клике на уже окрашенные, убираем выделение
        const colored = document.querySelectorAll('.colored');

        colored.forEach(coloredCell => {
          coloredCell.classList.remove('colored');
        });
      }

      console.log('cellNumber:', cellNumber);
      console.log('id:', this.id);
      console.log('i:', i);
      console.log('j:', j);
    });

  }

}

customElements.define('matrix-cell', Cell);