import Search from "../pageObjects/searchPage.js";

describe('Unibet Search Feature Test', { browser: "chrome" }, () => {
  const viewports = [
    { width: 1280, height: 800, name: 'Desktop' }, // Desktop viewport
    { width: 375, height: 667, name: 'Mobile' }    // Mobile simulator viewport
  ];

  let data;

  // Load test data once before all tests
  before(() => {
    cy.fixture('testdata.json').then((value) => {
      data = value;
    });
  });

  // Helper function for viewport-based tests
  const runSearchTests = (viewportName, searchTerm, isNegative = false) => {
    const ln = new Search();

    ln.clickSearchButton(viewportName); // Click search button based on viewport
    ln.enterSearchText(searchTerm); // Enter the search term

    if (isNegative) {
      ln.verifyErrorMessageIsVisible(); // Verify error message for negative tests
    } else {
      ln.verifyResultIsVisible(); // Verify results are visible
      ln.verifyResultPoker(searchTerm); // Verify specific result (Poker)
    }

    const testType = isNegative ? 'Negative' : 'Positive';
    cy.screenshot(`${viewportName}-${testType}-${searchTerm}`);
  };

  // Run tests for each viewport
  viewports.forEach(({ width, height, name }) => {
    context(`Running tests on ${name} viewport`, () => {
      beforeEach(() => {
        cy.viewport(width, height); // Set viewport
        cy.visit('/blog'); // Visit the Unibet UK site
      });

      it('Should search for a valid term and results are visible', () => {
        runSearchTests(name, data.searchtext); // Positive test for valid search term
      });

      it('Should search with a special character and the error message is visible', () => {
        runSearchTests(name, data.splcrtsearchtext, true); // Negative test for special characters
      });

      it('Should search with numeric and appropriate results are visible', () => {
        runSearchTests(name, data.numericsearchtext); // Positive test for numeric search term
      });
    });
  });
});