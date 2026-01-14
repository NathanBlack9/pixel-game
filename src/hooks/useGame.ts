import { type ItemType } from '@/types/gameState'
import { useCallback, useReducer, useState } from 'react';
import { initialState } from '@/constants/initState';
import { reducer } from '@/reducers/gameReducer';
import { ItemsCount } from '@/constants/itemsValue';

export function useGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [toLeft, setToLeft] = useState<boolean>(false);


  const addItemToMap = useCallback((type: ItemType, count: number) => {
    for (let i = 0; i < count; i++) {
      dispatch({ type: 'ADD_ITEM', payload: type });
    }
  }, []);

  const addPlayerToMap = useCallback(() => {
    dispatch({ type: 'ADD_PLAYER' });
  }, []);

  const movePlayerUp = useCallback(() => {
    dispatch({ type: 'MOVE_UP'});
    stopWalking();
  }, []);

  const movePlayerDown = useCallback(() => {
    dispatch({ type: 'MOVE_DOWN'});
    stopWalking();
  }, []);

  const movePlayerLeft = useCallback(() => {
    dispatch({ type: 'MOVE_LEFT'});
    setToLeft(true);
    stopWalking();
  }, []);

  const movePlayerRight = useCallback(() => {
    dispatch({ type: 'MOVE_RIGHT'});
    stopWalking();
  }, []);

  const stopWalking = useCallback(() => {
    setTimeout(() => {
      dispatch({ type: 'PLAYER_STOP_WALKING'});
      setToLeft(false);
    }, 500);
  }, [])

  const startGame = (e: React.MouseEvent<HTMLButtonElement>) => {
    addItemToMap('coin', ItemsCount.coin);
    addItemToMap('star', ItemsCount.star);
    addItemToMap('diamond', ItemsCount.diamond);
    addPlayerToMap();

    e.currentTarget.style.display = 'none';
  }

  return {
    state,
    toLeft,
    setToLeft,
    startGame,
    movePlayerUp,
    movePlayerDown,
    movePlayerLeft,
    movePlayerRight,
    dispatch,
  };
}