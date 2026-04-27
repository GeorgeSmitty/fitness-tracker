// Set the year in the footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Theme toggle (light / dark)
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle?.querySelector(".theme-icon");
const STORAGE_KEY = "theme-preference";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (themeIcon) {
    themeIcon.textContent = theme === "dark" ? "Light" : "Dark";
  }
}

const savedTheme =
  localStorage.getItem(STORAGE_KEY) ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(savedTheme);

themeToggle?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
});

// Interactive counter
let count = 0;
const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

function renderCount() {
  if (countEl) countEl.textContent = String(count);
}

incrementBtn?.addEventListener("click", () => {
  count += 1;
  renderCount();
});

decrementBtn?.addEventListener("click", () => {
  count -= 1;
  renderCount();
});
