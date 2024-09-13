
import logindata from"../../fixtures/logindata.json"
import dashboard from'../../pageobjectmodel/dashboard'

describe('login1', () => {
    it('orangeHrm login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.login(logindata.username,logindata.password)
       cy.contains(dashboard.PIMmenuiteam()).click()
       cy.contains('Add Employee').click()
       cy.addemployee("manju","C")
       
    })
  })