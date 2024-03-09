let teamA = "TEAM A";
function selectTeam() {
  let userInput = prompt("Enter a name for Team A");
  if (userInput !== null && userInput !== "") {
    teamA = userInput;
    document.getElementById("teamA").textContent = teamA;
  } else {
    alert("Please enter a valid team name.");
  }
}


let teamB = "TEAM B";
function selectTeamB() {
  let userInput = prompt("Enter a name for Team B");
  if (userInput !== null && userInput !== "") {
    teamB = userInput;
    document.getElementById("teamB").textContent = teamB;
  } else {
    alert("Please enter a valid team name.");
  }
}


let score = 0;


function increaseScore() {
  score++;
  document.getElementById("score").innerHTML = score;
}
function decreaseScore() {
  score--;
  if (score < 0) {
    alert("The score must be greater than zero.");
    score = 0;
  } else {
    document.getElementById("score").innerHTML = score;
  }
}


let scoreSecond = 0;


function increaseScoreB() {
  scoreSecond++;
  document.getElementById("scoreSecond").textContent = scoreSecond;
}


function decreaseScoreB() {
  scoreSecond--;
  if (scoreSecond < 0) {
    alert("The score must be greater than zero.");
    scoreSecond = 0;
  } else {
    document.getElementById("scoreSecond").textContent = scoreSecond;
  }
}


function resetScore() {
  document.getElementById("score").textContent = score;
  if (score >= 0) {
    score = 0;
    document.getElementById("score").textContent = score;
  } else {
    document.getElementById("score").textContent = score;
  }
}


function resetScoreB() {
  document.getElementById("scoreSecond").textContent = scoreSecond;
  if (scoreSecond >= 0) {
    scoreSecond = 0;
    document.getElementById("scoreSecond").textContent = scoreSecond;
  } else {
    document.getElementById("scoreSecond").textContent = scoreSecond;
  }
}


function setScore() {
  document.getElementById("score").textContent = score;
  score >= 0;
  score = prompt("Set the score:");
  document.getElementById("score").textContent = score;


  if (isNaN(score)) {
    alert("Please enter a valid number.");
    score = 0;
    document.getElementById("score").textContent = score;
  } else {
    console.log("A valid number:" + score);
  }
}


function setScoreB() {
  document.getElementById("scoreSecond").textContent = scoreSecond;
  scoreSecond >= 0;
  scoreSecond = prompt("Set the score:");
  document.getElementById("scoreSecond").textContent = scoreSecond;


  if (isNaN(scoreSecond)) {
    alert("Please enter a valid number.");
    scoreSecond = 0;
    document.getElementById("scoreSecond").textContent = scoreSecond;
  } else {
    console.log("A valid number:" + scoreSecond);
  }
}
