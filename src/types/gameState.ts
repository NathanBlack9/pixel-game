export interface GameState {
  player: {
    x: number,
    y: number,
    isWalking: boolean,
    health: number,
    speed: number
  },
  area: {
    grid: number[][],
    width: number,
    height: number,
  },
  score: number,
}

export type ItemType = 'coin' | 'star' | 'diamond'

export type GameAction =
  | { type: 'ADD_ITEM', payload: ItemType }
  | { type: 'ADD_PLAYER' }
  | { type: 'PLAYER_STOP_WALKING' }
  | { type: 'MOVE_UP' }
  | { type: 'MOVE_DOWN' }
  | { type: 'MOVE_LEFT' }
  | { type: 'MOVE_RIGHT' }