interface BoardProps {
  currentCount: number,
  maxCount: number
}

const Board: React.FC<BoardProps> = ({currentCount, maxCount}) => {

  return (
    <>
      <div className="board">
        Набрано очков {currentCount} из {maxCount}
      </div>
    </>
  )
}
export default Board;
