# Frontend Mentor - Launch countdown timer solution
## Table of contents
- [Overview](#overview)
- [The challenge](#the-challenge)
- [Solution](#Solution)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The challenge
![](./design/desktop-design.jpg)
Users should be able to:

- See a live countdown timer that ticks down every second (start the count at 14 days)
- See hover states for all interactive elements on the page
- **Bonus**: When a number changes, make the card flip from the middle

## Solution
- Solution URL: [Solution URL](https://github.com/oge-dev/Launch-Countdown-Timer)
- Live Site URL: [Live site URL](https://oge-dev.github.io/Launch-Countdown-Timer/)

## My process
### Built with
- Semantic HTML5 markup
- [SASS](https://reactjs.org/) - CSS Extension
- JavaScript

### What I learned
[SASS](https://reactjs.org/) - CSS Extension

```css
h2 {
  color: $Soft-red;
  // Using mixin to style h2 font
  @include font-content(uppercase, 5rem, 700, normal, normal);
  line-height: 128px;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
h2::before {
  content: "";
  position: absolute;
  top: 46%;
  left: -5px;
  height: 12px;
  width: 12px;
  background-color: $Very-dark-blue;
  border-radius: 50%;
  z-index: 1;
}
h2::after {
  content: "";
  position: absolute;
  top: 46%;
  right: -5px;
  height: 12px;
  width: 12px;
  background-color: $Very-dark-blue;
  border-radius: 50%;
  z-index: 1;
}
```

```js
document.getElementById("minutes").textContent =
  (minutesNum < 10 ? "0" : "") + minutesNum;
```

### Continued development

Implement on an already existing website

### Useful resources

- [SASS web](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [SASS W3school](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Oge](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
