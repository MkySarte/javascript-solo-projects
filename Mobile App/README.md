# Leads Tracker Mobile Web App

A mobile-friendly Leads Tracker built with HTML, CSS, JavaScript, and Firebase as part of my JavaScript learning journey with Scrimba.

## About the Project

This project is a browser-based application for saving and managing useful URLs.

The goal was to expand the original Leads Tracker by replacing Local Storage with Firebase Realtime Database and configuring the project to behave more like a mobile application.

## Features

- Save URLs to Firebase Realtime Database
- Load and display stored URLs automatically
- Open saved links in a new browser tab
- Delete all saved URLs with a double-click
- Update the displayed list when the database changes
- Use a compact layout designed for mobile screens
- Display a custom favicon and mobile app icons
- Launch in standalone mode through a Web Application Manifest
- Add the web application to a device's home screen

## JavaScript Concepts Practised

- ES modules
- Import statements
- Functions
- Arrays and objects
- `Object.values()`
- `for` loops
- Template literals
- DOM manipulation
- Event handling
- Firebase snapshots
- Snapshot existence checks with `snapshot.exists()`
- Asynchronous database updates with `onValue()`
- Adding database entries with `push()`
- Removing database entries with `remove()`

## What I Learned

While building this project, I learned how a frontend application can communicate with an external database instead of storing its data only inside the browser.

One important part was working with Firebase snapshots. The application checks whether data exists, reads the stored object, converts its values into an array, and then renders the URLs in the browser.

I also improved my understanding of:

- Initializing Firebase inside a JavaScript project
- Creating a reference to a specific database location
- Saving data in Firebase Realtime Database
- Listening for database changes in real time
- Converting a Firebase object into an array
- Rendering database values as clickable links
- Removing stored data from the database
- Using environment configuration for the database URL
- Configuring the viewport for mobile devices
- Using a Web Application Manifest and app icons
- Deploying a web application with Netlify

## Technologies

- HTML5
- CSS3
- JavaScript
- Firebase Realtime Database
- Web Application Manifest
- Netlify

## Project Background

This project was created while following the JavaScript course on [Scrimba](https://scrimba.com/).

The original Leads Tracker project was expanded with Firebase persistence and mobile web application features as part of my personal JavaScript practice.

## How to Run

1. Clone the repository.
2. Open the project folder.
3. Configure the Firebase Realtime Database URL for the project environment.
4. Serve the project through a local development server.
5. Open the local address in your browser.

The application requires a configured Firebase Realtime Database to save and load URLs.

## Future Improvements

Possible future improvements include:

- Validating empty or invalid URLs before saving
- Deleting individual URLs
- Replacing the double-click action with a clearer confirmation dialog
- Displaying feedback when a database operation fails
- Adding offline support with a service worker
- Adding automated tests
- Improving accessibility for keyboard and screen-reader users

## Author

Michael Sarte

GitHub: [MkySarte](https://github.com/MkySarte)
