// for (let i = 1; i <= 9; i++) {
//   const div = document.createElement('div');

//   div.classList.add('row');

//   for (let j = 1; j <= 9; j++) {
//     const span = document.createElement('span');
    
//     span.classList.add('cell');
//     span.innerText = `${j}`;
//     div.append(span);
//   }

//   document.body.append(div);
// }

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

function ShowMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i];
    const div = document.createElement('div');

    div.classList.add('row');

    for (let j = 0; j < row.length; j++) {
      const number = row[j];
      const span = document.createElement('span');
    
      span.classList.add('cell');
      span.innerText = row[j];
      div.append(span);
      
    }
    
    document.body.append(div);
  }

}

let arr = MakeMatrix();

ShowMatrix(arr);