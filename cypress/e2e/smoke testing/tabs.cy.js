describe('working with tabs', () => {

    it('cypress tabs', () => {
        cy.on("uncaught:exception",()=>{
            return false
        })
      cy.visit('https://www.cypress.io/')
      cy.contains('Installing Cypress').invoke("removeAttr","target").click({force:true})
      cy.reload()
      cy.title().should("eq","Seamless Cypress Installation Guide | Cypress Documentation")
      cy.url().should("eq","https://docs.cypress.io/guides/getting-started/installing-cypress")
      cy.go(-1)
      cy.go(1)
    })
  })
