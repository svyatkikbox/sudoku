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

  console.log(sectors);

}