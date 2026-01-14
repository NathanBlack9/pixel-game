import wallPixel from '@/assets/wall-pixel.png';
import grassPixel from '@/assets/grass-pixel.png';
import Player from '@/components/player';

interface MapProps {
  fullMap: number[][];
  playerIsWalking: boolean,
  toLeft: boolean
}

const Map: React.FC<MapProps> = ({ fullMap, playerIsWalking, toLeft }) => {

  return fullMap.map((tr, trIndex) => (
    <div key={trIndex} className="row">
      {tr.map((td, tdIndex) => (
        (() => {
          switch (td) {
            case 0:
              return <img key={tdIndex} src={grassPixel} alt="" />;
            case 1:
              return <img key={tdIndex} src={wallPixel} alt="" />;
            case 2:
              return <Player key={tdIndex} isWalking={playerIsWalking} toLeft={toLeft} />;
            case 5:
              return <div key={tdIndex} className="item item-coin"></div>;
            case 6:
              return <div key={tdIndex} className="item item-star"></div>;
            case 7:
              return <div key={tdIndex} className="item item-diamond"></div>;
            default:
              return <img key={tdIndex} src={wallPixel} alt="" />;
          }
        })()
      ))}
    </div>
  ))
}

export default Map;
