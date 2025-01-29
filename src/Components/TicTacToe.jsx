import { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameStatus from "./GameStatus";
import Reset from "./Reset";

const player_x = "X";
const player_o = "O";

const winningCombination = [
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(tile, setStrikeClass, setGameState) {
  for (const { combo, strikeClass } of winningCombination) {
    const tileValue1 = tile[combo[0]];
    const tileValue2 = tile[combo[1]];
    const tileValue3 = tile[combo[2]];
    if (
      tileValue1 != null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeClass(strikeClass);
      if (tileValue1 === player_x) {
        setGameState(GameStatus.playerXWins);
      } else {
        setGameState(GameStatus.playerOWins);
      }
      return;
    }
  }
  const allTileClicked = tile.every((t) => t != null);
  if (allTileClicked) {
    setGameState(GameStatus.Draw);
  }
}

const TicTacToe = () => {
  const [tile, setTile] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(player_x);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameStatus.inProgress);

  useEffect(() => {
    checkWinner(tile, setStrikeClass, setGameState);
  }, [tile]);
  function handleClick(index) {
    if (gameState !== GameStatus.inProgress) return;
    if (tile[index] != null) return;

    const tileCopy = [...tile];
    tileCopy[index] = playerTurn;
    setTile(tileCopy);

    if (playerTurn === player_x) {
      setPlayerTurn(player_o);
    } else {
      setPlayerTurn(player_x);
    }
  }
  function handleReset() {
    setTile(Array(9).fill(null));
    setPlayerTurn(player_x);
    setStrikeClass(null);
    setGameState(GameStatus.inProgress);
  }
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        strikeClass={strikeClass}
        playerTurn={playerTurn}
        tile={tile}
        onTileClick={handleClick}
      />
      <GameOver gameState={gameState} />
      {gameState === GameStatus.inProgress ? (
        ""
      ) : (
        <Reset handleReset={handleReset} />
      )}
    </div>
  );
};

export default TicTacToe;
