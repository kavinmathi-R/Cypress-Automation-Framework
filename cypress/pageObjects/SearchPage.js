class Search {
    constructor() {
      // Encapsulated Selectors
      this.SELECTORS = {
        Mobile: {
          searchButton: '#searchIcon', // Selector for mobile view
        },
        Desktop: {
          searchButton: '.border-start > .search-link', // Selector for desktop view
        },
        common: {
          searchInput: '.border-bottom > .border-0', // Search input
          errorMessage: '.entry-title', // Error message
          searchResults: '.search-results', // Search results
        }
      };
    }
  
    /**
     * Clicks the search button based on the viewport name.
     * @param {string} viewportName - Name of the viewport ('Mobile' or 'Desktop').
     */
    clickSearchButton(viewportName) {
      const selector = this.SELECTORS[viewportName]?.searchButton;
  
      if (!selector) {
        throw new Error(`Invalid viewport name: ${viewportName}`);
      }
  
      cy.get(selector).should('be.visible').click();
    }
  
    /**
     * Enters the search text and submits the search.
     * @param {string} term - The search term to enter.
     */
    enterSearchText(term) {
      const searchInputSelector = this.SELECTORS.common.searchInput;
  
      cy.get(searchInputSelector)
        .should('be.visible')
        .type(`${term}{enter}`);
    }
  
    /**
     * Verifies that the error message is visible.
     */
    verifyErrorMessageIsVisible() {
      const errorSelector = this.SELECTORS.common.errorMessage;
  
      cy.get(errorSelector).should('be.visible');
    }
  
    /**
     * Verifies that the search results are visible.
     */
    verifyResultIsVisible() {
      const resultSelector = this.SELECTORS.common.searchResults;
  
      cy.get(resultSelector).should('be.visible');
    }
  
    /**
     * Verifies that a specific search result containing the term exists.
     * @param {string} term - The search term to verify.
     */
    verifyResultPoker(term) {
      const resultSelector = this.SELECTORS.common.searchResults;
  
      cy.get(resultSelector)
        .contains(term)
        .should('exist');
    }
  }
  
  export default Search;