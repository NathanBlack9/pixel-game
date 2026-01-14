import { type GameState } from '@/types/gameState'
import { GAME_MAP } from '@/constants/map';

export const initialState: GameState = {
  player: {
    x: 0,
    y: 0,
    isWalking: false,
    health: 100,
    speed: 1
  },
  area: {
    grid: GAME_MAP,
    width: 150,
    height: 150,
  },
  score: 0,
};