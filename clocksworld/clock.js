function updateTime(clockElement, city) {
    const date = new Date();
    date.setUTCHours(date.getUTCHours() + getTimezoneOffset(city));
  
    const hours = date.getHours().toLocaleString('en-US', {padding:2, minimumIntegerDigits: 2});
    const minutes = date.getMinutes().toLocaleString('en-US', {padding:2, minimumIntegerDigits: 2});
  
    clockElement.textContent = `${hours}:${minutes}`;
  }
  
  function getTimezoneOffset(city) {
    // Replace with real time zone offsets for each city
    const offsets = {
      "London": 0,
      "New York": -5,
      "Tokyo": 9
    }
    return offsets[city] || 0;
  }
  
  const clock1 = document.getElementById('clock1');
  const clock2 = document.getElementById('clock2');
  const clock3 = document.getElementById('clock3');
  
  updateTime(clock1, "London");
  updateTime(clock2, "New York");
  updateTime(clock3, "Tokyo");
  