describe('upload file from fixture', () => {
    it('with inbuild method', () => {
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
      cy.get('input[type="file"]').attachFile('simple.txt')
      cy.get('input[type="text"]').type('file is uploaded')
      cy.get('input[type="submit"]').click()
      cy.log("file is uploaded")
    })
    it.only('without inbuild method', () => {
        cy.on('uncaught:exception',()=>{
            return false
        })
        cy.visit('https://practice.expandtesting.com/upload')
        cy.get('input[type="file"]').selectFile('C:/Users/manja/OneDrive/Documents/new cypress/cypress/fixtures/simple.txt')
        cy.get('button[type="submit"]').click()
        cy.log("uploded the file")
  })
})
