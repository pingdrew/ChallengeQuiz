const leaderboardArray = [];
const localLeaderboard = JSON.parse(localStorage.getItem("leaderBoard"));
const leaderboardListElement = document.getElementById('leaderboard-list');

// appends a child to the leaderboard list element for every entry you have in the local storage.
for (let i = 0; i < localLeaderboard.length; i++) {
  const entry = document.createElement("li");

  leaderboardListElement.appendChild(entry);
  entry.textContent = localLeaderboard[i].user + ' scored ' + localLeaderboard[i].score + ' with ' + localLeaderboard[i].timeLeft + ' seconds remaining';
};