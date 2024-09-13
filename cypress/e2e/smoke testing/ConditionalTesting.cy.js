describe("Conditional testing practice ", () => {
  beforeEach(() => {
    cy.visit("https://www.wikipedia.org/");
    cy.title().should("eq", "Wikipedia");
  });
  it("first test cases", () => {
    cy.get("body").then(($body) => {
      if ($body.find('a[href="//commons.wikimedia.org/"]').length > 0) {
        cy.get('a[href="//commons.wikimedia.org/"]').click();
        cy.origin("https://commons.wikimedia.org/wiki/Main_Page", () => {
          cy.title().should("eq", "Wikimedia Commons");
        });
      } 
      else {
        cy.get('a[href="//www.wikivoyage.org/"]').click();
        cy.origin("https://www.wikivoyage.org/", () => {
          cy.title().should("eq", "Wikivoyage");
        });
      }
    });
  });
});
