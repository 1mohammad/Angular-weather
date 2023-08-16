# Angular Weather App
This project is an Angular-based weather application that utilizes the OpenWeatherMap API to fetch weather data for different locations. The app is styled using Tailwind CSS, providing a sleek and responsive user interface.

## Features

- Weather Data: The app fetches weather data from the OpenWeatherMap API based on user-selected locations.

- Location Search: Users can search for weather information in specific locations by entering city names.

- Weather Details: The app displays detailed weather information, including temperature, humidity, and Feels like.

- Responsive Design: Tailwind CSS is used to create a responsive design that adapts to various screen sizes and devices.
  
- State Management with NgRx: NgRx is used for efficient state management, ensuring a consistent data flow and improving maintainability.

## Demo

Check out the live demo of the Angular Weather App: [Demo](https://angular-nice-weather.netlify.app)


## Technologies Used

- Angular: A powerful JavaScript framework for building dynamic web applications.
- Tailwind CSS: A utility-first CSS framework that makes styling and layout design efficient and flexible.
- OpenWeatherMap API: Provides weather data for locations worldwide.

## Installation and Setup

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies: npm install
4. Replace the OpenWeatherMap API key in the environment.ts file with your own API key.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
