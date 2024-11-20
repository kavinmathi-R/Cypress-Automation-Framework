# Cypress-Automation-Framework"# Cypress-Automation-Repository" 

**Overview** 📚

This repository demonstrates an automated testing framework using Cypress for testing the Search Feature of the Unibet blog website. https://www.unibet.co.uk/blog. This framework is built with JavaScript and follows best practices for maintainable, reliable, and efficient test automation and is designed to ensure robust testing of search behavior across different viewports and browsers.

**Key Features** 💡
This framework is a boilerplate setup for Cypress, offering robust features like:

•	Strong Element Locators: Reliable and dynamic element selection strategies.

• Environment-Aware Configuration: Load environment-specific settings and URLs.

•	Modular test structure using Page Object Model (POM).

•	Fixtures for Test Data: Load test data dynamically from JSON files.

•	Visual Reports: Generate detailed test reports with embedded screenshots.

•	This testing is intended to support only Chrome browser.

**Getting Started** 🚀

**Pre-requisites**

Ensure the following are installed on your machine:

1.	Node.js (Latest stable version v22.11.0).
2.	npm  (Package manager 10.9.0).
3.	A code editor like Visual Studio Code.
4.	GitHub

**Installation**
1.	Clone the repository:

git clone repository-url

cd repository-folder

2.	Install dependencies:

**npm init** to setup node project with package.json
**npm install --save-dev cypress** to install cypress(13.15.2) as dev dependency

3.	Open the Cypress test runner:

**npx cypress open** to open the cypress test runner and choose E2E Testing which will create cypress config, support and fixture folders.
Choose browser of your choice, and scaffold examples which will create boilerplate specs within e2e folder.
Remove the default boilerplate specs from cypress/e2e folder

**Running Tests** ⚡

Via Cypress Runner

1.	Launch the test runner:

npx cypress open

2.	Select a browser and choose the spec file searchTest.cy.js to run.
   
Command-Line Execution

1.	Run all tests in headless mode:

**npx cypress run**

2.	Run a specific test file:

**npx cypress run --spec "cypress/e2e/searchTest.cy.js" --headed**

3.	Run tests on a specific browser:
   
**npx cypress run --browser chrome**

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

![image](https://github.com/user-attachments/assets/48b5f23e-4c58-4f31-9e19-89ec39ad42e2)

Terminal output shows the results summary as:

![image](https://github.com/user-attachments/assets/601be9b5-88c7-44fe-a84c-c18871c5ceb0)



**Results**
If test cases are passed then screenshots are attached in the report and stored under screenshots folder.
![image](https://github.com/user-attachments/assets/3fbe75f4-7be9-49ad-9089-561dea5b5e31)

![image](https://github.com/user-attachments/assets/c9e7b735-8e74-4a7e-89aa-1bce357759a0)

If a test case is failed, then the assertion error and screenshot  gets attached to report automatically.

![image](https://github.com/user-attachments/assets/99e4d1f1-5347-45e0-89d3-55bb6580f15d)

**Test cases covered**
**Positive Scenario:**

Description: Verifies that searching with a valid term displays the correct results.

Test data: poker

Importance: Ensures the search function retrieves and displays relevant results when users input proper queries. This is critical for delivering a seamless user experience and meeting user expectations.

**Negative Scenario with Special Characters:**

Description: Verifies that searching with invalid input (e.g., special characters) returns an appropriate error message or no results.

Test data: poker&

Importance: Protects the search functionality from unexpected inputs and prevents potential vulnerabilities, such as injection attacks. It also ensures users receive clear feedback for invalid searches.

**Test Case with Numeric Input:**

Description: Validates that the search function handles numeric inputs correctly and displays the appropriate results or messages.

Test data: 2023

Importance: Ensures that the search function can handle diverse input types, as users may search for numeric terms like dates, amounts, or IDs.

**Importantance of these test cases**
These test cases ensure that the search functionality is robust and user-friendly, addressing different types of inputs that users might provide. They also cover essential edge cases to:

Prevent incorrect or confusing search behavior.

Safeguard the system against invalid or malicious inputs.

Enhance user confidence in the accuracy and reliability of the search system.

**Additional Test Cases to consider in Search feature if I could spend more time on the project.**
While the current tests cover fundamental scenarios, additional test cases could improve test coverage:

**1.Boundary Testing:**

Test with the minimum and maximum character limits for search queries

Ensure proper handling of empty search inputs.

**2.Pagination Handling:**

Check if the search results paginate correctly when there are multiple pages.

**3.Browser Compatibility:**

Confirm that the search function behaves consistently across supported browsers.

**4.Case Sensitivity:**

Verify that the search function treats "Apple" and "apple" equally (case-insensitivity).

**5.Multi-Language Support:**

Test searches in multiple languages if the platform supports localization.


