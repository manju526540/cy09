describe('scollintoview test cases', () => {
    it('first test cases', () => {
      cy.visit('https://docs.cypress.io/api/commands/scrollintoview')
      //cy.get('a').contains('Real World App').scrollIntoView({duration:5000},{offset:{top:150,left:0}}).rightclick()
      cy.get('a').contains('Real World App').scrollIntoView({duration:2000})
      })
  })
  // describe('scrollTo test cases', () => {
  //   it.only('first test cases', () => {
  //     cy.visit('https://docs.cypress.io/api/commands/scrollto')
  //     cy.get()
  //   })
  // })

