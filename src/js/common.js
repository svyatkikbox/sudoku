const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function MakeMatrix() {
  const matrix = [];
  
  while (matrix.length !== 9) {
    const row = [];
    const range = [1,2,3,4,5,6,7,8,9];
  
    while (row.length !== 9) {
      const randIndex = randomInteger(0, range.length - 1);

      row.push(range[randIndex]);
      range.splice(randIndex,1);
    }
    
    matrix.push(row);
  }

  return matrix;
}

function ShowMatrix(matrix, parent) {
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const div = document.createElement('div');

    div.classList.add('row');

    for (let j = 0; j < row.length; j++) {
      const number = row[j];
      const span = document.createElement('span');
      
      if (j === 2 || j === 5) {
        span.classList.add('vertical');
      }
      
      if (i === 2 || i === 5) {
        span.classList.add('horizontal');
      }
    
      span.classList.add('cell');
      span.innerHTML = number;
      div.append(span);
      
    }
    
    document.querySelector(parent).append(div);
  }

}

const matrix = MakeMatrix();

ShowMatrix(matrix, '.board');