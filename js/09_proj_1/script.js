// Timer Clock:
function updateClock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();
  const hours = now.getHours() % 12 || 12; // % 12 converts it to 12-hour format (0–11), but 0 should be 12, so || 12 handles that case.
  const minutes = now.getMinutes().toString().padStart(2, "0"); // padstart use for convert single digits from 1 to 9 into double digits like 02 format
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours <= 12 ? "AM" : "PM";

  timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;

  const Options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // undefined : This makes your date display automatically match the user's local language and regional format.
  // For example:
  // On an English (US) system:
  // Monday, May 26, 2025
  dateElement.innerText = now.toLocaleDateString(undefined, Options);
}

setInterval(updateClock, 1000);
updateClock();
