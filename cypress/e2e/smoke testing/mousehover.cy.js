describe('mousehover action', () => {
    it.skip('mousehover first test case', () => {
      cy.on("uncaught:exception",()=>{
        return false
      })
      cy.visit('https://www.programsbuzz.com/')
      cy.get('.slide__description').rightclick({force:true})
      cy.wait(5000)
      cy.log('hovering the mouse request')
      cy.contains('Home').trigger("mousehover")
      cy.wait(5000)
      cy.log('mouse hoveringrequest')
      cy.contains('Contact').dblclick({force:true})
      cy.title().should("eq","Contact")
      cy.get('#edit-name').type('manju')
      cy.get('#edit-email').type('manja.manjunatha@1997')
      cy.get('#edit-subject').type('nothing')
      cy.get('#edit-message').type('something as to be special')
      
      cy.get('span[role="checkbox"]').check()

    })
  })
  it.skip('mousehover first test case', () => {
    cy.on("uncaught:exception",()=>{
      return false
    })
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
    cy.contains('API').trigger("mousehover")
    cy.get('a').contains('Real World App').invoke("removeAttr",'target').click()
    //cy.url().should('eq',"https://github.com/cypress-io/cypress-realworld-app")
    cy.wait(5000)

    cy.go(-1)
    cy.get('a').contains('API').click()
    cy.contains('Assertions').click()
    cy.contains('and').click()
    cy.url().should("eq","https://docs.cypress.io/api/commands/")
})
it.only('mousehover first test case', () => {
    cy.on("uncaught:exception",()=>{
      return false
    })
    cy.visit('https://docs.cypress.io/api/commands/trigger')
    cy.get('a').contains('API').trigger('mousehover',{which:1,pageX:600,pageY:200})
    cy.get('a').contains('API').trigger('mousedown',{bottom:1})

})

