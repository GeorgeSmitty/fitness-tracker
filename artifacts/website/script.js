const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

let weekData = JSON.parse(localStorage.getItem("weekData")) || {};
let goal = Number(localStorage.getItem("goal")) || 300;

// ensure all days exist
days.forEach(day => {
  if (!weekData[day]) weekData[day] = 0;
});

function saveDay(day) {
  const value = Number(document.getElementById(day).value);
  weekData[day] = value;

  localStorage.setItem("weekData", JSON.stringify(weekData));
  render();
}

function saveGoal() {
  goal = Number(document.getElementById("goal").value);
  localStorage.setItem("goal", goal);
  render();
}

function total() {
  return Object.values(weekData).reduce((a,b) => a + Number(b), 0);
}

function message() {
  const t = total();
  if (t >= goal) return "🔥 Goal reached!";
  return `You need ${goal - t} more minutes`;
}

function render() {
  document.getElementById("app").innerHTML = `
    <h1>Weekly Fitness Tracker</h1>

    <label>Weekly Goal:</label>
    <input id="goal" type="number" value="${goal}" />
    <button onclick="saveGoal()">Save Goal</button>

    <h2>Total: ${total()} / ${goal}</h2>
    <p>${message()}</p>

    <div class="grid">
      ${days.map(day => `
        <div class="card">
          <h3>${day}</h3>
          <input id="${day}" type="number" value="${weekData[day]}" />
          <button onclick="saveDay('${day}')">Save</button>
        </div>
      `).join("")}
    </div>
  `;
}

render();