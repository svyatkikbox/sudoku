function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function MakeMatrix() {
  const arr = [];

  while (arr.length !== 9) {
    let set = new Set();
    
    while (set.size !== 9) {
      set.add(randomInteger(1,9));
    }
  
    arr.push(Array.from(set));
  }

  return arr;
}

function ShowMatrix(arr, parent) {
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i];
    const div = document.createElement('div');

    div.classList.add('row');

    for (let j = 0; j < row.length; j++) {
      const number = row[j];
      const input = document.createElement('input');
      
      if (j === 2 || j === 5) {
        input.classList.add('vertical');
      }
      
      if (i === 2 || i === 5) {
        input.classList.add('horizontal');
      }
    
      input.classList.add('cell');
      input.value = number;
      div.append(input);
      
    }
    
    document.querySelector(parent).append(div);
  }

}

let arr = MakeMatrix();

ShowMatrix(arr, '.board');