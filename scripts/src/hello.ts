let totalMinutes = 0;

document.body.innerHTML = `
  <div class="container">
    <h1>Fitness Goal Tracker</h1>

    <label>Weekly Goal (minutes):</label>
    <input type="number" id="goalInput" placeholder="Enter weekly goal">

    <label>Today's Fitness Minutes:</label>
    <input type="number" id="dailyInput" placeholder="Enter today's minutes">

    <button id="submitBtn">Submit</button>

    <h2 id="progress">Progress: 0 minutes</h2>
    <h3 id="feedback"></h3>
  </div>
`;

const button = document.getElementById("submitBtn");

button?.addEventListener("click", () => {
  const goal = parseInt(
    (document.getElementById("goalInput") as HTMLInputElement).value
  );

  const daily = parseInt(
    (document.getElementById("dailyInput") as HTMLInputElement).value
  );

  if (isNaN(goal) || isNaN(daily)) {
    alert("Please enter valid numbers.");
    return;
  }

  totalMinutes += daily;

  const progress = document.getElementById("progress");
  const feedback = document.getElementById("feedback");

  if (progress) {
    progress.innerText =
      "Progress: " + totalMinutes + " / " + goal + " minutes";
  }

  let remaining = goal - totalMinutes;

  if (feedback) {
    if (remaining <= 0) {
      feedback.innerText =
        "Congratulations! You’ve reached your weekly goal!";
    } else {
      let avgNeeded = Math.ceil(remaining / 7);

      feedback.innerText =
        "You need " +
        remaining +
        " more minutes this week (~" +
        avgNeeded +
        " min/day).";
    }
  }
});