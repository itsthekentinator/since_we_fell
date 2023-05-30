// Calculate the time difference
const startDate = new Date('April 12, 2023 21:00:00').getTime();
let currentDate, timeDifference, years, months, days, hours, minutes, seconds;

function updateTimer() {
  // Calculate the time difference
  currentDate = new Date().getTime();
  timeDifference = currentDate - startDate;

  // Calculate years, months, days, hours, minutes, and seconds
  years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the timer display
  document.getElementById('years').textContent = years;
  document.getElementById('months').textContent = months;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  // Calculate moon cycle
  const moonCycle = Math.floor(days / 29.5) % 8; // Assuming 29.5 days per moon cycle
  const moonCycleText = getMoonCycleText(moonCycle);
  document.getElementById('moon-cycle').textContent = moonCycleText;
}

function getMoonCycleText(moonCycle) {
  switch (moonCycle) {
    case 0:
      return 'New Moon';
    case 1:
      return 'Waxing Crescent';
    case 2:
      return 'First Quarter';
    case 3:
      return 'Waxing Gibbous';
    case 4:
      return 'Full Moon';
    case 5:
      return 'Waning Gibbous';
    case 6:
      return 'Last Quarter';
    case 7:
      return 'Waning Crescent';
    default:
      return '';
  }
}

// Update the timer every second
setInterval(updateTimer, 1000);
