let RPSitemRock = document.querySelector(".btnRock");
let RPSitemPaper = document.querySelector(".btnPaper");
let RPSitemScissors = document.querySelector(".btnScissors");

let computerMemory = [0, 0, 0, 0, 0];
let round = 0;
let playerWins = 0;
let computerWins = 0;

let playerWinStat = document.querySelector(".playerWins");
let computerWinStat = document.querySelector(".compWins");
let roundStat = document.querySelector(".round");

function computerPrediction(memory) {
  const memLen = memory.length - 1;
  let inspectionRange = memory.slice(memLen - 5, memLen);
  let bestMoves = [];
  for (let elem of inspectionRange) {
    bestMoves.push((elem + 1) % 3);
  }
  bestMoveChosen = bestMoves[Math.floor(Math.random() * 3)];
  return bestMoveChosen;
}

function findWinner(player, computer) {
  const playerWin = [
    [1, 0],
    [2, 1],
    [0, 2],
  ];
  const computerWin = [
    [2, 0],
    [1, 2],
    [0, 1],
  ];

  console.log(player, computer);

  for (const winCombo of playerWin) {
    if (winCombo[0] === player && winCombo[1] === computer) {
      console.log("player");
      return "player";
    }
  }

  for (const winCombo of computerWin) {
    if (winCombo[0] === player && winCombo[1] === computer) {
      console.log("computer");
      return "computer";
    }
  }
  console.log("tie");
  return "tie";
}

function updateBoard(roundResult) {
  round++;
  roundStat.textContent = "Round " + round;
  if (roundResult == "player") {
    playerWins++;
    playerWinStat.textContent = "Player: " + playerWins;
  } else if (roundResult == "computer") {
    computerWins++;
    computerWinStat.textContent = "Computer: " + computerWins;
  }
}

RPSitemRock.addEventListener("mouseenter", () => {
  RPSitemRock.style.transform = "rotate(10deg)";
  RPSitemRock.addEventListener("mouseleave", () => {
    RPSitemRock.style.transform = "rotate(0deg)";
  });
});

RPSitemPaper.addEventListener("mouseenter", () => {
  RPSitemPaper.style.transform = "rotate(10deg)";
  RPSitemPaper.addEventListener("mouseleave", () => {
    RPSitemPaper.style.transform = "rotate(0deg)";
  });
});

RPSitemScissors.addEventListener("mouseenter", () => {
  RPSitemScissors.style.transform = "rotate(10deg)";
  RPSitemScissors.addEventListener("mouseleave", () => {
    RPSitemScissors.style.transform = "rotate(0deg)";
  });
});

RPSitemRock.addEventListener("click", () => {
  const computerChosen = computerPrediction(computerMemory);
  const roundResult = findWinner(0, computerChosen);
  updateBoard(roundResult);
  computerMemory.push(0);
});

RPSitemPaper.addEventListener("click", () => {
  const computerChosen = computerPrediction(computerMemory);
  const roundResult = findWinner(1, computerChosen);
  updateBoard(roundResult);
  computerMemory.push(1);
});

RPSitemScissors.addEventListener("click", () => {
  const computerChosen = computerPrediction(computerMemory);
  const roundResult = findWinner(2, computerChosen);
  updateBoard(roundResult);
  computerMemory.push(2);
});
