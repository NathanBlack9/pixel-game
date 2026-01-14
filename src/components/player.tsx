import walkingImg from '@/assets/walking.gif';
import standImg from '@/assets/stand.png';
import grassPixel from '@/assets/grass-pixel.png';

interface PlayerProps {
  isWalking: boolean,
  toLeft: boolean
}

const Player: React.FC<PlayerProps> = ({ isWalking, toLeft }) => {

  return (
    <div
      className="item player"
      style={{
        backgroundImage: `url(${isWalking ? walkingImg : standImg}), url(${grassPixel})`,
        transform: toLeft ? 'rotateY(180deg)' : 'rotateY(0deg)'
      }}

    />
  )
}
export default Player;
