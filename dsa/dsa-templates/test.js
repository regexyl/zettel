/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxSum = function(grid) {
  let total = 0;
  console.log({gridlength: grid.length; gridLengthCol: grid.length})
  for (let i = 0; i < grid.length - 2; i++) {
      for (let j = 0; j < grid.length[0] - 2; j++) {
          console.log(`maxSum: ${i, j}`)
          total += getHourglassSum(i, j, grid);
      }
  }
  
  return total;
};

function getHourglassSum(i, j, grid) {
  console.log({i, j})
  const top = grid[i][j] + grid[i][j + 1] + grid[i][j + 2];
  const mid = grid[i + 1][j + 1];
  const bottom = grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2];
  return top + mid + bottom;
}

console.log(maxSum([[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]))
console.log(maxSum([[1,2,3],[4,5,6],[7,8,9]]))