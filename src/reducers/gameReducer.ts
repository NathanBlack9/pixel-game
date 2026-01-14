import { type GameState, type GameAction} from '@/types/gameState'
import { randomAvailablePosition, calculateScore } from '@/utils/utils';

export function reducer(state: GameState, action: GameAction): GameState {


  const newGrid = state.area.grid.map(row => [...row]);
  const speed = state.player.speed;
  const prevPos = {x: state.player.x, y: state.player.y};
  const { x, y } = randomAvailablePosition(state.area.grid);
  let nextPos, changePos = 0;

  switch (action.type) {
    case 'ADD_ITEM':

      switch (action.payload) {
        case 'coin':
          newGrid[x][y] = 5;
          break;
        case 'star':
          newGrid[x][y] = 6;
          break;
        case 'diamond':
          newGrid[x][y] = 7;
          break;
        default:
          newGrid[x][y] = 0;
          break;
      }

      return {
        ...state,
        area: {
          ...state.area,
          grid: newGrid
        }
      }
    case 'ADD_PLAYER':
      newGrid[x][y] = 2;

      return {
        ...state,
        area: {
          ...state.area,
          grid: newGrid
        },
        player: {
          ...state.player,
          x: x,
          y: y,
        }
      }
    case 'PLAYER_STOP_WALKING':
      return {
        ...state,
        player: {
          ...state.player,
          isWalking: false
        }
      }
    case 'MOVE_UP':
      changePos = prevPos.x - speed;
      nextPos = newGrid[changePos][prevPos.y];

      switch (nextPos) {
        case 0:
        case 5:
        case 6:
        case 7:
          newGrid[prevPos.x][prevPos.y] = 0;
          newGrid[changePos][prevPos.y] = 2

          return {
            ...state,
            area: {
              ...state.area,
              grid: newGrid
            },
            player: {
              ...state.player,
              isWalking: true,
              x: changePos,
            },
            score: calculateScore(nextPos, state)
          }
        default:
          return state
      }
    case 'MOVE_DOWN':
      changePos = prevPos.x + speed;
      nextPos = newGrid[changePos][prevPos.y];

      switch (nextPos) {
        case 0:
        case 5:
        case 6:
        case 7:
          newGrid[prevPos.x][prevPos.y] = 0
          newGrid[changePos][prevPos.y] = 2

          return {
            ...state,
            area: {
              ...state.area,
              grid: newGrid
            },
            player: {
              ...state.player,
              isWalking: true,
              x: changePos,
            },
            score: calculateScore(nextPos, state)
          }
        default:
          return state
      }
    case 'MOVE_LEFT':
      changePos = prevPos.y - speed;
      nextPos = newGrid[prevPos.x][changePos];

      switch (nextPos) {
        case 0:
        case 5:
        case 6:
        case 7:
          newGrid[prevPos.x][prevPos.y] = 0
          newGrid[prevPos.x][changePos] = 2

          return {
            ...state,
            area: {
              ...state.area,
              grid: newGrid
            },
            player: {
              ...state.player,
              isWalking: true,
              y: changePos,
            },
            score: calculateScore(nextPos, state)
          }
        default:
          return state
      }
    case 'MOVE_RIGHT':
      changePos = prevPos.y + speed;
      nextPos = newGrid[prevPos.x][changePos];

      switch (nextPos) {
        case 0:
        case 5:
        case 6:
        case 7:
          newGrid[prevPos.x][prevPos.y] = 0
          newGrid[prevPos.x][changePos] = 2

          return {
            ...state,
            area: {
              ...state.area,
              grid: newGrid
            },
            player: {
              ...state.player,
              isWalking: true,
              y: changePos,
            },
            score: calculateScore(nextPos, state)
          }
        default:
          return state
      }
    default:
      return state;
  }
}
