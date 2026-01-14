import { type GameState } from '@/types/gameState'
import { itemsValue, ItemsCount } from '@/constants/itemsValue';

export function randomAvailablePosition(matrix: number[][]) {
  const rowsLength = matrix.length;
  const colsLength = matrix[0].length;

  while (true) {
    const randomRow = Math.floor(Math.random() * rowsLength);
    const randomCol = Math.floor(Math.random() * colsLength);

    if (matrix[randomRow][randomCol] === 0) {
      return {x: randomRow, y: randomCol};
    }
  }
}

export function calculateScore(nextPos: number, state: GameState) {
  switch (nextPos) {
    case 5:
      return state.score + itemsValue.coin;
    case 6:
      return state.score + itemsValue.star;
    case 7:
      return state.score + itemsValue.diamond;
    default:
      return state.score;
  }
};

export function calculateMaxScore() {
  return ItemsCount.coin * itemsValue.coin +
          ItemsCount.star * itemsValue.star +
          ItemsCount.diamond * itemsValue.diamond;
};