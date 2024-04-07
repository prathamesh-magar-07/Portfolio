const worldClocks = document.getElementById("worldClocks");

function updateTime(cityElement) {
  const city = cityElement.textContent.split(":")[0].trim(); // Extract city name
  const utcOffset = parseFloat(cityElement.dataset.utcOffset);

  const now = new Date();
  const localDate = new Date(now.getTime() + utcOffset * 60 * 60 * 1000);

  const hours = localDate.getHours() % 12 || 12; // Handle hours for AM/PM
  const minutes = localDate.getMinutes().toString().padStart(2, "0");
  const amPm = localDate.getHours() < 12 ? "AM" : "PM";
  const timeString = ${hours}:${minutes} ${amPm};

  cityElement.textContent = ${city}: ${timeString};
}

function handleClick(event) {
  if (event.target.classList.contains("world-clock")) {
    updateTime(event.target);
  }
}

worldClocks.addEventListener("click", handleClick);

// Initial update (optional)
// updateTime(worldClocks.children[0]); // Update the first clock on page load