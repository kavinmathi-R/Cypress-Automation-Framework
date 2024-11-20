# Cypress-Automation-Framework"# Cypress-Automation-Repository" 

**Overview** 📚
A lightweight Cypress framework designed for fast and scalable UI testing of web applications. This framework is built with JavaScript and follows best practices for maintainable, reliable, and efficient test automation.

**Key Features** 💡
This framework is a boilerplate setup for Cypress, offering robust features like:

•	Strong Element Locators: Reliable and dynamic element selection strategies.

• Environment-Aware Configuration: Load environment-specific settings and URLs.

•	Modular test structure using Page Object Model (POM).

•	Fixtures for Test Data: Load test data dynamically from JSON files.

•	Visual Reports: Generate detailed test reports with embedded screenshots.

•	Cross-Browser Testing: Support for Chrome, Firefox, and Edge.

**Getting Started** 🚀

**Pre-requisites**

Ensure the following are installed on your machine:

1.	Node.js (Latest stable version).
2.	npm or yarn (Package manager).
3.	A code editor like Visual Studio Code.

**Installation**
1.	Clone the repository:
bash

git clone <repository-url>
cd <repository-folder>

2.	Install dependencies:
bash

npm install

3.	Open the Cypress test runner:
bash

npx cypress open

**Running Tests** ⚡

Via Cypress Runner

1.	Launch the test runner:
bash

npx cypress open

2.	Select a browser and choose the spec file(s) to run.
   
Command-Line Execution

1.	Run all tests in headless mode:
bash

npx cypress run

2.	Run a specific test file:
bash

npx cypress run --spec "cypress/e2e/searchTest.cy.js" --headed

3.	Run tests on a specific browser:
bash

npx cypress run --browser chrome

**Test Reporting** 📑

This framework uses cypress-mochawesome-reporter for rich, interactive HTML reports.
Setup
Ensure the reporter is configured in cypress.config.js:

const { defineConfig } = require("cypress");

module.exports = defineConfig({

 reporter: 'cypress-mochawesome-reporter',
 
  e2e: {
  
    setupNodeEvents(on, config) {
    
      // implement node event listeners here
      
    screenshotOnRunFailure=true;
    
    require('cypress-mochawesome-reporter/plugin')(on);
    
    },

    baseUrl: "https://www.unibet.co.uk"
    
  },
  
});

   **Viewing Reports**
   
Reports are generated in the cypress/reports folder after each test run. Open the index.html file to view results.


