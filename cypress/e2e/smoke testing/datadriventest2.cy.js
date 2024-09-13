import data from"../../fixtures/addemployeedatadrivendata.json"
import logindata from"../../pageobjectmodel/orangeHRMlogin"
import login from"../../fixtures/logindata.json"
describe('datadriven test method 2', () => {
    data.forEach(function(data){

    
   
    it('2nd method', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(logindata.usernameInput()).type(login.username)
      cy.get(logindata.passwordInput()).type(login.password)
      cy.get(logindata.submitButton()).click()
      cy.contains("Dashboard").should("be.visible")
      cy.contains("PIM").click()
      cy.get(".oxd-topbar-body-nav-tab-item").eq(2).click()
      cy.get('input[name="firstName"]').type(data.firstname)
      cy.get('input[name="lastName"]').type(data.lastname)
      cy.get('button[type="submit"]').click()
      cy.contains('Successfully Saved').should("be.visible")
    })
  })
})