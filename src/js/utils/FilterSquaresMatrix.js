import RemoveDuplicates from './RemoveDuplicates';

export default matrix => {
  const sectors = {
    sector1: [],
    sector2: [],
    sector3: [],
    sector4: [],
    sector5: [],
    sector6: [],
    sector7: [],
    sector8: [],
    sector9: []
  };

  // Расфасовываем элементы матрицы по массивам, которые соответствуют секторам 3х3
  // в порядке: сверху вниз, слева направо
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i < 3 && j < 3) {
        sectors.sector1.push(matrix[i][j]);
      }

      if (i < 3 && (j >= 3 && j < 6)) {
        sectors.sector2.push(matrix[i][j]);
      }

      if (i < 3 && j >= 6) {
        sectors.sector3.push(matrix[i][j]);
      }

      if ((i >= 3 && i < 6) && j < 3) {
        sectors.sector4.push(matrix[i][j]);
      }

      if ((i >= 3 && i < 6) && (j >= 3 && j < 6)) {
        sectors.sector5.push(matrix[i][j]);
      }

      if ((i >= 3 && i < 6) && j >= 6) {
        sectors.sector6.push(matrix[i][j]);
      }

      if (i >= 6 && j < 3) {
        sectors.sector7.push(matrix[i][j]);
      }

      if (i >= 6 && (j >= 3 && j < 6)) {
        sectors.sector8.push(matrix[i][j]);
      }

      if (i >= 6 && j >= 6) {
        sectors.sector9.push(matrix[i][j]);
      }
    }
  }

  // Копия изначального объекта с секторами
  const sectorsCopy = JSON.parse(JSON.stringify(sectors));

  // console.log(sectorsCopy);

  for (const sector in sectors) {
    if (sectors.hasOwnProperty(sector)) {
      RemoveDuplicates(sectors[sector]);
    }
  }

  // Посмотрим на результат отфильтрованных секторов
  // console.log(sectors);

  // Бежим по матрице еще раз, определяем сектор, в котором находится текущий элемент
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i < 3 && j < 3) {
        matrix[i][j] = sectors.sector1[0];
        sectors.sector1.shift();
      }

      if (i < 3 && (j >= 3 && j < 6)) {
        matrix[i][j] = sectors.sector2[0];
        sectors.sector2.shift();
      }

      if (i < 3 && j >= 6) {
        matrix[i][j] = sectors.sector3[0];
        sectors.sector3.shift();
      }

      if ((i >= 3 && i < 6) && j < 3) {
        matrix[i][j] = sectors.sector4[0];
        sectors.sector4.shift();
      }

      if ((i >= 3 && i < 6) && (j >= 3 && j < 6)) {
        matrix[i][j] = sectors.sector5[0];
        sectors.sector5.shift();
      }

      if ((i >= 3 && i < 6) && j >= 6) {
        matrix[i][j] = sectors.sector6[0];
        sectors.sector6.shift();
      }

      if (i >= 6 && j < 3) {
        matrix[i][j] = sectors.sector7[0];
        sectors.sector7.shift();
      }

      if (i >= 6 && (j >= 3 && j < 6)) {
        matrix[i][j] = sectors.sector8[0];
        sectors.sector8.shift();
      }

      if (i >= 6 && j >= 6) {
        matrix[i][j] = sectors.sector9[0];
        sectors.sector9.shift();
      }
    }
  }

  return matrix;
}