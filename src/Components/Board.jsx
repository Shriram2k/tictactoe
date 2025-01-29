import Tiles from "./Tiles";
import Strike from "./Strike";
import PropTypes from "prop-types";

const Board = ({ tile, onTileClick, playerTurn, strikeClass }) => {
  return (
    <div className="board">
      <Tiles
        playerTurn={playerTurn}
        onTileClick={() => onTileClick(0)}
        value={tile[0]}
        className="r-border b-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onTileClick={() => onTileClick(1)}
        value={tile[1]}
        className="r-border b-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onTileClick={() => onTileClick(2)}
        value={tile[2]}
        className="b-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onTileClick={() => onTileClick(3)}
        value={tile[3]}
        className="r-border b-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onTileClick={() => onTileClick(4)}
        value={tile[4]}
        className="r-border b-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onTileClick={() => onTileClick(5)}
        value={tile[5]}
        className="b-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onTileClick={() => onTileClick(6)}
        value={tile[6]}
        className="r-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onTileClick={() => onTileClick(7)}
        value={tile[7]}
        className="r-border"
      />
      <Tiles
        playerTurn={playerTurn}
        onTileClick={() => onTileClick(8)}
        value={tile[8]}
      />
      <Strike strikeClass={strikeClass} />
    </div>
  );
};
Board.propTypes = {
  tile: PropTypes.array.isRequired,
  onTileClick: PropTypes.func.isRequired,
  playerTurn: PropTypes.string,
  strikeClass: PropTypes.string,
};
export default Board;
