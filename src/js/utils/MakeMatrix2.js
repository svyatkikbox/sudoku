import randomInteger from './RandomInt';
import { uniqInSector, uniqInCol, uniqInRow } from './Search';

export default function MakeMatrix2() {
  // Главный массив, в котором лежат все строки
  const MATRIX = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];

  //  В цикле формируется матрица построчно 
  for (let i = 0; i < 9; i++) {
    // Для каждой строки формируется массив с числами от 1 до 9
    // из массива рандомно будут выбираться числа при помощи RandomInt
    // После каждого удачного заполнения ячейки в строке, будет удаляться соответствующий элемент массива
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let j = 0; j < 9; j++) {
      // В условиях проверяется нахождение итерируемого элемента матрицы
      // на принадлежность одному из 9 секторов 3х3 в порядке слева направо, сверху вниз

      // Выбираем из массива numbers рандомный элемент, который будем прогонять через проверки на правила судоку
      if (i < 3 && j < 3) { // 1 sector
        let isUniq = false;
        let randIndex;
        let randNumber;
        
        while (!isUniq) {
          randIndex = randomInteger(0, numbers.length - 1);
          randNumber = numbers[randIndex];

          let uniqSector = uniqInSector({
            matrix: MATRIX,
            number: randNumber,
            iSectorStart: 0,
            jSectorStart: 0,
            iSectorEnd: 2,
            jSectorEnd: 2,
            i: i,
            j: j
          });

          let uniqCol = uniqInCol({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          let uniqRow = uniqInRow({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          isUniq = uniqSector && uniqCol && uniqRow;

          // debugger;
          
          if (isUniq) {
            MATRIX[i].push(randNumber);
            numbers.splice(randIndex, 1);
            // debugger;
            // continue;
          }
          
          

        }

      }

      if (i < 3 && (j >= 3 && j < 6)) { // 2 sector
        let isUniq = false;
        let randIndex;
        let randNumber;
        
        while (!isUniq) {
          randIndex = randomInteger(0, numbers.length - 1);
          randNumber = numbers[randIndex];

          let uniqSector = uniqInSector({
            matrix: MATRIX,
            number: randNumber,
            iSectorStart: 0,
            jSectorStart: 3,
            iSectorEnd: 2,
            jSectorEnd: 5,
            i: i,
            j: j
          });

          let uniqCol = uniqInCol({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          let uniqRow = uniqInRow({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          isUniq = uniqSector && uniqCol && uniqRow;

          // debugger;
          
          if (isUniq) {
            MATRIX[i].push(randNumber);
            numbers.splice(randIndex, 1);
            // debugger;
            // continue;
          }
          
          

        }

      }

      if (i < 3 && j >= 6) { // 3 sector
        let isUniq = false;
        let randIndex;
        let randNumber;
        
        while (!isUniq) {
          randIndex = randomInteger(0, numbers.length - 1);
          randNumber = numbers[randIndex];

          let uniqSector = uniqInSector({
            matrix: MATRIX,
            number: randNumber,
            iSectorStart: 0,
            jSectorStart: 6,
            iSectorEnd: 2,
            jSectorEnd: 8,
            i: i,
            j: j
          });

          let uniqCol = uniqInCol({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          let uniqRow = uniqInRow({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          isUniq = uniqSector && uniqCol && uniqRow;

          // debugger;
          
          if (isUniq) {
            MATRIX[i].push(randNumber);
            numbers.splice(randIndex, 1);
            // debugger;
            // continue;
          }
          if (isUniq === false && numbers.length < 2) {
            MakeMatrix2();
          }
          debugger;

        }

      }

      if ((i >= 3 && i < 6) && j < 3) { // 4 sector
        let isUniq = false;
        let randIndex;
        let randNumber;
        
        while (!isUniq) {
          randIndex = randomInteger(0, numbers.length - 1);
          randNumber = numbers[randIndex];

          let uniqSector = uniqInSector({
            matrix: MATRIX,
            number: randNumber,
            iSectorStart: 3,
            jSectorStart: 0,
            iSectorEnd: 5,
            jSectorEnd: 2,
            i: i,
            j: j
          });

          let uniqCol = uniqInCol({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          let uniqRow = uniqInRow({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          isUniq = uniqSector && uniqCol && uniqRow;

          // debugger;
          
          if (isUniq) {
            MATRIX[i].push(randNumber);
            numbers.splice(randIndex, 1);
            // debugger;
            // continue;
          }
          
          

        }

      }

      if ((i >= 3 && i < 6) && (j >= 3 && j < 6)) { // 5 sector
        let isUniq = false;
        let randIndex;
        let randNumber;
        
        while (!isUniq) {
          randIndex = randomInteger(0, numbers.length - 1);
          randNumber = numbers[randIndex];

          let uniqSector = uniqInSector({
            matrix: MATRIX,
            number: randNumber,
            iSectorStart: 3,
            jSectorStart: 3,
            iSectorEnd: 5,
            jSectorEnd: 5,
            i: i,
            j: j
          });

          let uniqCol = uniqInCol({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          let uniqRow = uniqInRow({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          isUniq = uniqSector && uniqCol && uniqRow;

          // debugger;
          
          if (isUniq) {
            MATRIX[i].push(randNumber);
            numbers.splice(randIndex, 1);
            // debugger;
            // continue;
          }
          
          

        }

      }

      if ((i >= 3 && i < 6) && j >= 6) { // 6 sector
        let isUniq = false;
        let randIndex;
        let randNumber;
        
        while (!isUniq) {
          randIndex = randomInteger(0, numbers.length - 1);
          randNumber = numbers[randIndex];

          let uniqSector = uniqInSector({
            matrix: MATRIX,
            number: randNumber,
            iSectorStart: 3,
            jSectorStart: 6,
            iSectorEnd: 5,
            jSectorEnd: 8,
            i: i,
            j: j
          });

          let uniqCol = uniqInCol({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          let uniqRow = uniqInRow({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          isUniq = uniqSector && uniqCol && uniqRow;

          // debugger;
          
          if (isUniq) {
            MATRIX[i].push(randNumber);
            numbers.splice(randIndex, 1);
            // debugger;
            // continue;
          }
          if (isUniq === false && numbers.length < 2) {
            MakeMatrix2();
          }
          debugger;

        }

      }

      if (i >= 6 && j < 3) { // 7 sector
        let isUniq = false;
        let randIndex;
        let randNumber;
        
        while (!isUniq) {
          randIndex = randomInteger(0, numbers.length - 1);
          randNumber = numbers[randIndex];

          let uniqSector = uniqInSector({
            matrix: MATRIX,
            number: randNumber,
            iSectorStart: 6,
            jSectorStart: 0,
            iSectorEnd: 8,
            jSectorEnd: 2,
            i: i,
            j: j
          });

          let uniqCol = uniqInCol({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          let uniqRow = uniqInRow({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          isUniq = uniqSector && uniqCol && uniqRow;

          // debugger;
          
          if (isUniq) {
            MATRIX[i].push(randNumber);
            numbers.splice(randIndex, 1);
            // debugger;
            // continue;
          }
          
          

        }

      }

      if (i >= 6 && (j >= 3 && j < 6)) { // 8 sector
        let isUniq = false;
        let randIndex;
        let randNumber;
        
        while (!isUniq) {
          randIndex = randomInteger(0, numbers.length - 1);
          randNumber = numbers[randIndex];

          let uniqSector = uniqInSector({
            matrix: MATRIX,
            number: randNumber,
            iSectorStart: 6,
            jSectorStart: 3,
            iSectorEnd: 8,
            jSectorEnd: 5,
            i: i,
            j: j
          });

          let uniqCol = uniqInCol({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          let uniqRow = uniqInRow({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          isUniq = uniqSector && uniqCol && uniqRow;

          // debugger;
          
          if (isUniq) {
            MATRIX[i].push(randNumber);
            numbers.splice(randIndex, 1);
            // debugger;
            // continue;
          }
          
          

        }

      }

      if (i >= 6 && j >= 6) { // 9 sector
        let isUniq = false;
        let randIndex;
        let randNumber;
        
        while (!isUniq) {
          randIndex = randomInteger(0, numbers.length - 1);
          randNumber = numbers[randIndex];

          let uniqSector = uniqInSector({
            matrix: MATRIX,
            number: randNumber,
            iSectorStart: 6,
            jSectorStart: 6,
            iSectorEnd: 8,
            jSectorEnd: 8,
            i: i,
            j: j
          });

          let uniqCol = uniqInCol({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          let uniqRow = uniqInRow({
            matrix: MATRIX, 
            number: randNumber, 
            i: i, 
            j: j 
          });

          isUniq = uniqSector && uniqCol && uniqRow;

          // debugger;
          
          if (isUniq) {
            MATRIX[i].push(randNumber);
            numbers.splice(randIndex, 1);
            // debugger;
            // continue;
          }
          if (isUniq === false && numbers.length < 2) {
            MakeMatrix2();
          }
          debugger;

        }

      }
    }
  }

  return MATRIX;

}
