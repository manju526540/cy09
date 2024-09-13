describe('alerts methods', () => {
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })
    it('Alerts', () => {
      cy.contains("Click for JS Alert").click()
      cy.on("window:alerts",(alert)=>{
        expect(alert).to.equal("I am a JS Alert")
        return true
      })
      })
      it.only('Confirm', () => {
        cy.contains("Click for JS Confirm").click() 
        cy.on("windows:confirms",(alerts)=>{
          expect(alerts).to.equal("I am a JS Confirm")
          return true
        })
        it('Confirm', () => {
        cy.contains("Click for JS Confirm").click() 
        cy.on("windows:confirms",(alerts)=>{
          expect(alerts).to.equal("I am a JS Confirm")
          return false
        })
        it('prompt', () => {
          cy.contains("Click for JS Prompt").click() 
          cy.window().then(($prompt)=>{
            cy.stub($prompt,"prompt").return('manju')
     })
  })
})
})
})