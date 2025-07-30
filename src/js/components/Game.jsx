import PlayersChoose from "./choice";
import React, { useState } from "react";


// tictactoe game page
function TGameStart() {
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState({});

  const handleStart = (players) => {
    setPlayers(players);
    setGameStarted(true);
  };

  return (
    <div>
    
      {!gameStarted ? (
        <PlayersChoose onStart={handleStart} />
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 bg-gray-100">
          <h1 className="text-center mb-4">Tic Tac Toe</h1>
          <p>
            Player 1 ({players.player1}) vs Player 2 ({players.player2})
          </p>
          {/* Here you would load the Tic Tac Toe board - https://react.dev/learn/tutorial-tic-tac-toe */}
        </div>
      )}
    </div>
  );
}

export default TGameStart;
