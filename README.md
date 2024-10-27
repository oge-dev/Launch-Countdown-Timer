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

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help me improve my coding skills by building realistic projects.

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
- [SASS](https://sass-lang.com/) - CSS Extension
- JavaScript

### What I learned

[SASS](https://sass-lang.com/) - CSS Extension

```css
h2 {
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
  border-radius: 50%;
  z-index: 1;
}
```

```scss
// Install Sass
npm install -g sass
// Compile Sass to CSS
sass --watch styles/sass/style.scss:styles/css/style.css

// Neutral colors
$White: hsl(0, 0%, 100%);
// Primary colors
$Grayish-blue: hsl(237, 18%, 59%);
$Soft-red: hsl(345, 95%, 68%);
// Mixin for centering content
@mixin center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
// Mixin for font content
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
    // Using mixin to center content
  @include center-content;
}
// Nesting
main {
  h1 {
    // Using mixin to style h1 font
      @include font-content(uppercase, 1.6rem, 700, 0.4rem, 0.5rem);
  }
  footer {
    height: 25%;
    width: 100%;
    .social-icons {
      // Using mixin to center content
      @include center-content;
      gap: 2rem;
      height: 100%;
      a {
        color: $Grayish-blue;
        font-size: 1.5rem;
        &:hover {
          color: $Soft-red;
          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
}


```

```js
document.getElementById("minutes").textContent =
  (minutesNum < 10 ? "0" : "") + minutesNum;
```

### Continued development

Implement on an already existing website

### Useful resources

- [SASS web](https://sass-lang.com/) - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world. This helped me in order to avoid redundancy. I really liked this pattern and will use it going forward.
- [SASS W3school](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Oge](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
