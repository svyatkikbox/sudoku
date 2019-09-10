export default (sectors) => {
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
  
  for (let i = 0; i < sectors.length; i++) {
    const firstTrio  = sectors[i].slice(0, 3);
    const secondTrio = sectors[i].slice(3, 6);
    const thirdTrio  = sectors[i].slice(6, 9);

    if (i === 0 || i === 3 || i === 6) {
      MATRIX[0] = [...MATRIX[0], ...firstTrio];
      MATRIX[1] = [...MATRIX[1], ...secondTrio];
      MATRIX[2] = [...MATRIX[2], ...thirdTrio];
    }

    if (i === 1 || i === 4 || i === 7) {
      MATRIX[3] = [...MATRIX[3], ...firstTrio];
      MATRIX[4] = [...MATRIX[4], ...secondTrio];
      MATRIX[5] = [...MATRIX[5], ...thirdTrio];
    }

    if (i === 2 || i === 5 || i === 8) {
      MATRIX[6] = [...MATRIX[6], ...firstTrio];
      MATRIX[7] = [...MATRIX[7], ...secondTrio];
      MATRIX[8] = [...MATRIX[8], ...thirdTrio];
    }

  }

  return MATRIX;

}