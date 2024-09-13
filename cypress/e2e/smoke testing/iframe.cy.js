describe('iframes tests', function ()  {
    it('iframes 1st test case',function ()  {
      cy.visit('https://jqueryui.com/checkboxradio/')
      cy.get('iframe[class="demo-frame"]').then(function ($iframe)  {
        const checkbox = $iframe.contents().find('label[for="checkbox-1"]')
        cy.wrap(checkbox).click()
      })
    })
    it('iframes 1st test case',function ()  {
      cy.visit("https://jqueryui.com/checkboxradio/")
      cy.get('iframe[class="demo-frame"]').then(($iframe)=>{
        let radiobox = $iframe.contents().find('label[for="radio-1"]')
        cy.wrap(radiobox).click()
      })
  })
})