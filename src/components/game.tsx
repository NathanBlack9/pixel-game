import { useEffect} from 'react';
import { useGame } from '@/hooks/useGame';

import Map from '@/components/map';
import Board from '@/components/board';
import './styles.styl';
import { calculateMaxScore } from '@/utils/utils';

const Game: React.FC = () => {
  const {
    state,
    toLeft,
    // setToLeft,
    startGame,
    movePlayerUp,
    movePlayerDown,
    movePlayerLeft,
    movePlayerRight,
    // dispatch
  } = useGame();


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          movePlayerUp();
          break;
        case 'ArrowDown':
        case 's':
          movePlayerDown();
          break;
        case 'ArrowLeft':
        case 'a':
          movePlayerLeft();
          break;
        case 'ArrowRight':
        case 'd':
          movePlayerRight();
          break;
        case ' ':
          // Сбор предмета при нажатии пробела
          // Можно добавить логику сбора предмета под игроком
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button onClick={startGame}>Начать игру</button>
      <Board currentCount={state.score} maxCount={calculateMaxScore()} />
      <Map fullMap={state.area.grid} playerIsWalking={state.player.isWalking} toLeft={toLeft} />
    </>
  )
}
export default Game;
