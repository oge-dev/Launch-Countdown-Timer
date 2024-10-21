// Set the date for the launch (e.g., December 31, 2024)
// let launchDate = new Date("Jan 31, 2024 00:00:00").getTime();
let launchDate = new Date().getTime()+ (14 * 24 * 60 * 60 * 1000);

// Update the count down every 1 second
let countdownInterval = setInterval(function() {
  let currentTime  = new Date().getTime();
  let timeLeft = launchDate - currentTime;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result in the respective elements
  document.getElementById("days").innerHTML = (days < 10 ? "0" : "") + days;
  document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours;
  document.getElementById("minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes;
  document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds;

  // If the count down is over, display some text
  if (timeLeft < 0) {
    clearInterval(countdownInterval);

    const countdownElement = document.querySelector(".countdown");
    countdownElement.innerHTML = "we have launched!";
    // Inline styling for the LAUNCHED! text
     countdownElement.style.fontSize = "5.5rem";        // Increase font size
     countdownElement.style.color = "hsl(345, 95%, 68%)";        // Bright orange color
     countdownElement.style.fontWeight = "bold";      // Bold text
     countdownElement.style.textTransform = "uppercase"; // Uppercase letters
     
  }
}, 1000);

