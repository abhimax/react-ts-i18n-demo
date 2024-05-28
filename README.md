# React i18n Demo with Cypress Testing

This project is a demo of a React application with internationalization (i18n) support and end-to-end testing using Cypress. The application includes a contact form that allows users to submit their name and message, which are then displayed on the homepage.

## Features

- Internationalization (i18n) support with English, Spanish, and Sinhala translations.
- Contact form for user input.
- Cypress tests to verify form submission and data display.

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn (>= 1.x)

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/react-i18n-demo.git
   cd react-i18n-demo

2. Install dependencies:

Using npm:
   ```bash
   npm install
   ```

Using yarn:

```bash
Copy code
yarn install
```

## Running the Application
1. Start the development server:

Using npm:

```bash
Copy code
npm start
```
Using yarn:

```bash
Copy code
yarn start
```
2. Open your browser and navigate to http://localhost:3000

## Project Structure
- src/: Contains the source code for the React application.
  - components/: Contains React components.
    - Header.tsx: Header component with language switcher.
    - LanguageSwitcher.tsx: Component for switching languages.
    - ContactForm.tsx: Form component for user input.
    - ContactForm.css: CSS for styling the form.
  - App.tsx: Main application component.
  - index.tsx: Entry point for the React application.
  - i18n.ts: Configuration for i18next.
- public/locales/: Contains translation files for different languages.
- cypress/: Contains Cypress tests and configuration.
  - e2e/: Contains end-to-end tests.
    - form_submission.cy.js: Cypress tests for form submission.
  - fixtures/: Contains test data.
  - plugins/: Contains Cypress plugins.
  - support/: Contains support files for Cypress tests.

## Running Cypress Tests
1. Open Cypress Test Runner:

```bash
npx cypress open
```
2. Select the test file (form_submission.cy.js) to run the tests interactively.

3. Run Cypress tests in headless mode:
```bash
npx cypress run
```

## Translation
The application supports English, Spanish, and Sinhala. Translation files are located in the public/locales/ directory.

- en/translation.json: English translations.
- es/translation.json: Spanish translations.
- si/translation.json: Sinhala translations.