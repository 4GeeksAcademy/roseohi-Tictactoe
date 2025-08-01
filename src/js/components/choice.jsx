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


  // buttons and Initial user input
 return (

    <div className="flex flex-col items-center justify-center">


      <h1 className="font-bold mb-5">Make your Choice!: X or O</h1>

{/* Name inputs */}
  <div class="names form-group container row">
      <label for="username col-md-5">Player 1:</label>
        <input type="text" class="form-control" name="Player 1" placeholder="Enter name"/>

         <label for="username col-md-5">Player 2:</label>
        <input type="text" class="form-control" name="Player 2" placeholder="Enter name"/>
</div>


      <div className="c-btns container-md">
        {/* X button */}
        <button
          className={` ${
            firstChoice === "X" ? "text-white" : "bg-gray-300"
          }`}
          onClick={() => handleChoice("X")}
        >
          X
        </button>
        {/* </div> */}

      {/* O button */}
        <button
          className={` ${
            firstChoice === "O" ? "text-white" : "bg-gray-300"
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
        className={`mt-8 px-6 py-3 text-xl text-dark rounded-lg bg-info ${
          firstChoice ? "bg-green-500 text-white" : "bg-gray-400"
        }`}
        onClick={handleStart}>Start Game</button>
</div>
      

  );
} export default PlayersChoose;



