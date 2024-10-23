// Set the date for the launch (e.g., October 12, 2024)
// let launchDate = new Date("Dec 31, 2024 00:00:00").getTime();
let launchDate = new Date().getTime() + 14 * 24 * 60 * 60 * 1000; // start the count at 14 days

// countDown function
const countDown = () => {
  // Get the current date
  let currentDate = new Date().getTime();

  // Get the difference between the launchDate and currentDate
  let timeLeft = launchDate - currentDate;

  // Get the seconds, minutes, hours, days in milliseconds
  let seconds = 1000; // 1 second = 1000 milliseconds
  let minutes = 60 * seconds; // 1 minute = 60 seconds
  let hours = 60 * minutes; // 1 hour = 60 minutes
  let days = 24 * hours; // 1 day = 24 hours

  // Time calculations for days, hours, minutes, and seconds
  let daysNum = Math.floor(timeLeft / days);
  let hoursNum = Math.floor((timeLeft % days) / hours);
  let minutesNum = Math.floor((timeLeft % hours) / minutes);
  let secondsNum = Math.floor((timeLeft % minutes) / seconds);

  // Display the result in the respective elements
  document.getElementById("days").textContent =
    (daysNum < 10 ? "0" : "") + daysNum;
  document.getElementById("hours").textContent =
    (hoursNum < 10 ? "0" : "") + hoursNum;
  document.getElementById("minutes").textContent =
    (minutesNum < 10 ? "0" : "") + minutesNum;
  document.getElementById("seconds").textContent =
    (secondsNum < 10 ? "0" : "") + secondsNum;

  // If the countdown is over, display a message
  if (timeLeft < 0) {
    // Clear interval to call countDown
    clearInterval(countDown);

    const countdownElement = document.querySelector(".countdown");
    countdownElement.innerHTML = "we have launched!";
    countdownElement.classList.add("launched-message"); // Add the styling class
  }
};

// Set interval to call countDown every 1000 milliseconds (1 second)
setInterval(countDown, 1000);
