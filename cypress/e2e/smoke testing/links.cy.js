describe("links test cases", () => {
  it("links first test cases", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("a").contains("Commons").click();
    cy.origin("https://commons.wikimedia.org/", () => {
      cy.url().should("include", "wiki/Main_Page");
    });
  });
});
it("passes", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.contains("Forgot your password? ").then(($win) => {
    let elementlength = $win.text();
    cy.log(elementlength);
  });
});
it("passes", () => {
  cy.visit("https://www.wikipedia.org/");
  cy.get('a[href="//commons.wikimedia.org/"]').click();
  cy.origin("https://commons.wikimedia.org/", () => {
    cy.url().should("include", "wiki/Main_Page");
  });
  cy.get("#p-navigation")
    .find("a")
    .its("length")
    .then((elementlength) => {
      let lengthvalue = elementlength;
      cy.log(lengthvalue);
      expect(lengthvalue).to.equal(5);
    });
});
it("table formate", () => {
  cy.on("uncaught:exception", () => {
    return false;
  });
  cy.visit(
    "https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html"
  );
  cy.xpath('//table[@id="customers"]/tbody/tr[4]/td[2]').then((txt) => {
    let tablelenght = txt.text();
    cy.log(tablelenght);
    expect(tablelenght).to.equal("Roland Mendel");
  });
});
it.only('table rows verification', () => {
  cy.on("uncaught:exception",()=>{
    return false
  })
  cy.visit('https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html')
  cy.xpath('//table[@id="customers"]/tbody/tr').should('have.length',"7")
  cy.xpath('//table[@id="customers"]/tbody/tr/th').should('have.length',"3")
  cy.xpath('//table[@id="customers"]/tbody/tr[2]').within(()=>{
    cy.get('td').eq(2).then((txt)=>{
      let text1 = txt.text()
      cy.log(text1)
      expect(text1).to.equal('Maria Anders')
    })
  })
})

