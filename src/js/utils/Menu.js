export default () => {
  let settings = localStorage.getItem('sudoku-settings') ? JSON.parse(localStorage.getItem('sudoku-settings')) : 0;

  if (!settings) {
    settings = {
      difficulty: {
        easy: 37,
        normal: 57,
        hard: 67,
        impossible: 77
      }
    };

  } else {

  }

  return settings;
}