# Random Password Generator

A solo project built as part of the Scrimba JavaScript course.

The goal of the project was to build a password generator from scratch using HTML, CSS, and JavaScript. The application generates two random passwords when the user clicks the button.

In addition to the required functionality, I also implemented the optional stretch goals.

## Project Requirements

The main requirements were:

- Build the application from scratch
- Generate two random passwords
- Generate new passwords when the user clicks the button
- Create passwords with a default length of 15 characters

## Stretch Goals

I also completed the optional stretch goals:

- Adjustable password length
- Copy a password by clicking on it
- Enable or disable numbers and symbols

## Features

- Generates two random passwords
- Password length can be adjusted from 8 to 24 characters
- Passwords can contain:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Symbols
- Optional letters-only mode
- Passwords can be copied to the clipboard by clicking on them
- Displays feedback after copying a password

## How to Use

1. Choose the desired password length with the slider.
2. Enable the checkbox to exclude numbers and symbols.
3. Click **Generate passwords**.
4. Click one of the generated passwords to copy it.

## Technologies Used

- HTML
- CSS
- JavaScript

## What I Learned

While building this solo project, I practised how to combine HTML, CSS, and JavaScript in an interactive web application.

### JavaScript

- Selecting HTML elements with `getElementById()`
- Reacting to user actions with event listeners
- Using `if` and `else` conditions
- Writing and calling functions
- Passing values into functions using parameters
- Creating random numbers with `Math.random()`
- Using `Math.floor()` to create valid array indexes
- Using loops to build passwords character by character
- Reading values from a range slider
- Checking the state of a checkbox
- Updating page content with `textContent`
- Copying text with the Clipboard API

### HTML and CSS

- Structuring an application with semantic HTML elements
- Connecting HTML, CSS, and JavaScript files
- Styling buttons, inputs, and password fields
- Using Flexbox to align elements
- Creating spacing with margins and gaps
- Updating the layout based on the project design

## What Was Challenging

The main challenge was connecting multiple user inputs with the password-generation logic.

The selected password length and the checkbox state both affect which characters can be used. I therefore had to read the current user settings before generating the passwords.

I also learned that the user interface and the application logic should be kept clearly separated:

- HTML provides the structure
- CSS controls the appearance
- JavaScript handles the behaviour

## Future Improvements

Possible future improvements include:

- Separate controls for numbers and symbols
- Better copy confirmation
- Automatically restore the password after showing the copied message
- Prevent copying when no password has been generated
- Improve accessibility
- Improve the layout for mobile devices
- Ensure that every generated password contains at least one character from each enabled category

## Project Structure

```text
password-generator/
├── index.html
├── index.css
├── index.js
└── README.md