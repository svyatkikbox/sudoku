export default matrix => {

  // Перемешиваем каждые три строки между собой
  for (let i = 0; i < matrix.length - 1; i++) {
    if (i === 2 || i === 5) {
      continue;
    } else {
      let prevArr = [...matrix[i]];
      let nextArr = [...matrix[i + 1]];

      [...matrix[i]] = [...nextArr];
      [...matrix[i + 1]] = [...prevArr];
    }
  }
  console.log(matrix);

  return matrix;
}