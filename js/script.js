const countDown = () => {
  // Set the date for the launch (e.g., December 31, 2024)
  let launchDate = new Date("Dec 31, 2024 00:00:00").getTime();
  // // let launchDate = new Date().getTime()+ (14 * 24 * 60 * 60 * 1000);

  // Get the cuurent Date
  let currentDate = new Date().getTime();

  // Get the Difference btw the launchDate from currentDate
  let timeLeft = launchDate - currentDate;

  // Get the second, minute, hour, day
  let seconds = 1000; // sec in millisec
  let minutes = 60 * seconds;
  let hours = 60 * minutes;
  let days = 24 * hours;

  // Time calculations for days, hours, minutes and seconds
  let daysNum = Math.floor(timeLeft / days);
  let hoursNum = Math.floor((timeLeft % days) / hours);
  let minutesNum = Math.floor((timeLeft % hours) / minutes);
  let secondsNum = Math.floor((timeLeft % minutes) / seconds);
  
    // Display the result in the respective elements
  document.getElementById("days").textContent = (daysNum < 10 ? "0" : "") + daysNum;
  document.getElementById("hours").textContent = (hoursNum < 10 ? "0" : "") + hoursNum;
  document.getElementById("minutes").textContent = (minutesNum < 10 ? "0" : "") + minutesNum;
  document.getElementById("seconds").textContent = (secondsNum < 10 ? "0" : "") + secondsNum;


};

// set Interval after 1000millsec
setInterval(countDown, 1000)

// // Update the count down every 1 second
// let countdownInterval = setInterval(function() {

//   // Time calculations for days, hours, minutes and seconds
//   let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//   // Display the result in the respective elements
//   document.getElementById("days").innerHTML = (days < 10 ? "0" : "") + days;
//   document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours;
//   document.getElementById("minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes;
//   document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds;

//   // If the count down is over, display some text
//   if (timeLeft < 0) {
//     clearInterval(countdownInterval);

//     const countdownElement = document.querySelector(".countdown");
//     countdownElement.innerHTML = "we have launched!";
//     countdownElement.classList.add("launched-message");  // Add the styling class

//   }
// }, 1000);
