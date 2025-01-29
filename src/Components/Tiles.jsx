import PropTypes from "prop-types";

const Tile = ({ className, value, onTileClick, playerTurn }) => {
  let hoverClass = null;
  if (value === null && playerTurn !== null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }
  return (
    <div onClick={onTileClick} className={`tile ${className} ${hoverClass}`}>
      {value}
    </div>
  );
};

Tile.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onTileClick: PropTypes.func.isRequired,
  playerTurn: PropTypes.string,
};
export default Tile;
