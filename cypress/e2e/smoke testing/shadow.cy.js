describe('shadow dom element test cases', () => {
    it('shadow first test cases', () => {
      cy.visit('http://watir.com/examples/shadow_dom.html')
      cy.get('#shadow_host').shadow().find('input[type="text"]').type("manju")
    })
    it('shadow 2nd test cases in dom element', () => {
        cy.visit('https://practice.expandtesting.com/shadowdom')
        cy.get('#shadow-host').shadow().find('#my-btn').click()
  })
})