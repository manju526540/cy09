describe('template spec', () => {
    it('passes', () => {
        cy.on("uncaught:exception",()=>{
            return false
        })
      cy.visit('https://demoqa.com/browser-windows',{
        onBeforeLoad(win){
            cy.stub(win,"open")
        }
      })
      cy.get('#tabButton').click()
      cy.window().its('open').should('be.called')
      cy.visit('https://demoqa.com/sample')
      cy.contains('This is a sample page').should('be.visible')
      cy.url().should('eq','https://demoqa.com/sample')

    })
  })