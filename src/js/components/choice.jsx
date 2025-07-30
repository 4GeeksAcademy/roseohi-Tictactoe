import React, { useState } from "react";
// import TGameStart from "./Game";





//player choices x or o
function PlayersChoose({ onStart }) {

  const [firstChoice, setFirstChoice] = useState("");
  const [secondChoice, setSecondChoice] = useState("");

  const handleChoice = (choice) => {
    setFirstChoice(choice);
    setSecondChoice(choice === "X" ? "O" : "X");
  };

  const handleStart = () => {
    if (firstChoice && secondChoice) {
      onStart({ player1: firstChoice, player2: secondChoice });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">

      <h1 className="font-bold mb-6">Make your Choice!: X or O</h1>
      
      <div className="flex gap-6">
        <button
          className={`px-6 py-3 text-xl rounded-lg ${
            firstChoice === "X" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleChoice("X")}
        >
          X
        </button>

      {/* O button */}
        <button
          className={`px-6 py-3 text-xl rounded-lg ${
            firstChoice === "O" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleChoice("O")}
        >
          O
        </button>
      </div>

      {firstChoice && (
        <p className="mt-6 text-lg">
          Player 1: <strong>{firstChoice}</strong> | Player 2:{" "}
          <strong>{secondChoice}</strong>
        </p>
      )}

      <button
        disabled={!firstChoice}
        className={`mt-8 px-6 py-3 text-xl rounded-lg ${
          firstChoice ? "bg-green-500 text-white" : "bg-gray-400"
        }`}
        onClick={handleStart}>Start Game</button>

      
    </div>
  );
} export default PlayersChoose;



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Next work on tictoe boared interactive game
// Then name inputs 
// do styling w/ css and boost strap