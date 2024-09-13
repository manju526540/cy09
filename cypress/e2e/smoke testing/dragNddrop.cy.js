describe('dragNddrop test cases', () => {
    it('first test cases', () => {
      cy.on("uncaught:exception",()=>{
        return false
      })
    cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette')
    cy.get('#box2').drag('#box106')
    cy.wait(5000)
    const datatransfer = new DataTransfer()
    cy.get('#box3').trigger('dragstart',{datatransfer})
    cy.get('#box101').trigger('drop',{datatransfer})
})
  })  