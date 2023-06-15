export const findLessCostPath = (board: number[][]): number => {
  // Bellman-Ford algorithm
  
  if (board.length <= 1) {
    return 0;
  }

  const rows = board.length;
  const cols = board[0].length;

  const distances: number[][] = [];

  for (let row = 0; row < rows; row++) {
    distances[row] = [];
    for (let col = 0; col < cols; col++) {
      distances[row][col] = Infinity;
    }
  }

  distances[0][0] = board[0][0];

  for (let k = 0; k < rows * cols - 1; k++) {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        
        const neighbors = [
          [row - 1, col], // Top
          [row, col - 1], // Left
          [row + 1, col], // Bottom
          [row, col + 1], // Right
        ];

        for (const [nRow, nCol] of neighbors) {
          if (nRow >= 0 && nRow < rows && nCol >= 0 && nCol < cols) {
            const newDistance = distances[row][col] + board[nRow][nCol];
            if (newDistance < distances[nRow][nCol]) {
              distances[nRow][nCol] = newDistance;
            }
          }
        }
      }
    }
  }

  const lastRow = board[board.length - 1];
  const lastValue = lastRow[lastRow.length - 1];

  return distances[rows - 1][cols - 1] - lastValue;
};
