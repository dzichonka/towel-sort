function towelSort(matrix) {

  let result = [];
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return result;
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      result = result.concat(matrix[i]);
    } else {
      result = result.concat(matrix[i].slice().reverse());
    }
  }
  return result;
}

console.log(towelSort([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]));  
