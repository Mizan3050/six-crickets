# SixCrickets


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.


# Angular Countdown App (v18)

This is a simple Angular v18 application that performs an API call to retrieve a countdown duration and displays the countdown value live on the UI. The countdown logic is managed within the root component (`AppComponent`), while a dedicated presentational (dumb) component is responsible for displaying the countdown value.

---

## 🧩 Overview

- **API Call**: On app initialization, a call is made to an API that returns an object with a `secondsLeft` property.
- **Countdown Logic**: The app converts the `secondsLeft` value into a live countdown using RxJS observables. The countdown value updates every second.
- **Display**: A dumb component is used to receive and display the countdown value using Angular `@Input()` binding.

---

## 🔧 Technologies Used

- **Angular v18**
- **RxJS**
- **TypeScript**

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
