let totalMinutes = 0;

function addFitness() {
  const goal = parseInt(document.getElementById("goalInput").value);
  const daily = parseInt(document.getElementById("dailyInput").value);

  if (isNaN(goal) || isNaN(daily)) {
    alert("Please enter valid numbers.");
    return;
  }

  totalMinutes += daily;

  document.getElementById("progress").innerText =
    "Progress: " + totalMinutes + " / " + goal + " minutes";

  let remaining = goal - totalMinutes;

  if (remaining <= 0) {
    document.getElementById("feedback").innerText =
      "Congratulations! You’ve reached your weekly goal!";
  } else {
    let avgNeeded = Math.ceil(remaining / 7);

    document.getElementById("feedback").innerText =
      "You need " + remaining + " more minutes this week (~" +
      avgNeeded + " min/day).";
  }
}