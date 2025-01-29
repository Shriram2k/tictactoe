import GameStatus from "./GameStatus";

const GameOver = ({ gameState }) => {
  if (gameState === GameStatus.Draw) {
    return <h2 className="game-over">Draw!</h2>;
  } else if (gameState === GameStatus.playerXWins) {
    return <h2 className="game-over">Player X wins!</h2>;
  } else if (gameState === GameStatus.playerOWins) {
    return <h2 className="game-over">Player O wins!</h2>;
  }
};

export default GameOver;
