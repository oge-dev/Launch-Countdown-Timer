# Frontend Mentor - Launch Countdown Timer Solution

This repository contains my solution to the [Launch Countdown Timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Completing this challenge has strengthened my skills in creating interactive UI components with JavaScript and styling with SCSS.

## Table of Contents

- [Overview](#overview)
- [Challenge](#challenge)
- [Solution](#solution)
- [Development Process](#development-process)
  - [Technologies Used](#technologies-used)
  - [Key Learnings](#key-learnings)
  - [Future Enhancements](#future-enhancements)
  - [Resources](#resources)
- [Author](#author)

## Overview

The Launch Countdown Timer project is a dynamic web component where users can observe a live countdown timer that updates every second. The project also includes interactive hover states for all interactive elements, with an optional flipping card animation for added visual appeal.

## Challenge

![Desktop Design Preview](./design/desktop-design.jpg)

### Requirements
- See a live countdown timer that ticks down every second (start the count at 14 days)
- See hover states for all interactive elements on the page
- **Bonus**: When a number changes, make the card flip from the middle

## Solution

- **Solution URL**: [GitHub Repository](https://github.com/oge-dev/Launch-Countdown-Timer)
- **Live Demo**: [Live Site](https://oge-dev.github.io/Launch-Countdown-Timer/)

## Development Process

### Technologies Used

- **HTML5** for semantic structure
- **SASS** for streamlined and organized CSS
- **JavaScript** for countdown functionality and interactivity

### Key Learnings

Working on this project enhanced my understanding of:
- CSS `content` property and positioning for creative designs.
- SCSS for modular, reusable styling with variables and mixins.
- JavaScript countdown logic and DOM manipulation.

Here’s an example of the SCSS mixin and nesting structure used in this project:

```scss
$White: hsl(0, 0%, 100%);
$Grayish-blue: hsl(237, 18%, 59%);
$Soft-red: hsl(345, 95%, 68%);
@mixin center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin font-content(
  $textTransform,
  $size,
  $weight,
  $wordSpacing,
  $letterSpacing
) {
  text-transform: $textTransform;
  font-size: $size;
  font-weight: $weight;
  word-spacing: $wordSpacing;
  letter-spacing: $letterSpacing;
}

body {
  color: $White;
  @include center-content;
}

main {
  h1 {
    @include font-content(uppercase, 1.6rem, 700, 0.4rem, 0.5rem);
  }
  footer {
    .social-icons {
      @include center-content;
      gap: 2rem;
      a {
        color: $Grayish-blue;
        &:hover {
          color: $Soft-red;
          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
}
```

### Future Enhancements

To further develop this project, I plan to:
- Integrate it into an existing website or web application.
- Experiment with additional animations for the countdown cards.

### Resources

- [SASS Documentation](https://sass-lang.com/) - Comprehensive guide for SASS features.
- [CSS `content` Property](https://www.w3schools.com/cssref/pr_gen_content.php) - Excellent resource to understand how to use the `content` property.
- [JavaScript Countdown Timer](https://www.w3schools.com/howto/howto_js_countdown.asp) - A helpful guide for building a countdown timer.
- [Code with Curious](https://codewithcurious.com/projects/countdown-timer-using-html-css-javascript/) - Article on building a countdown timer with HTML, CSS, and JavaScript.

## Author

- **Portfolio** - [Oge](https://uhegbu-ogechi-juliet.vercel.app/)
- **Frontend Mentor** - [@oge-dev](https://www.frontendmentor.io/profile/oge-dev)
- **Twitter** - [@oge_dev](https://x.com/oge_dev)