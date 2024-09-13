
import login from"../../pageobjectmodel/orangeHRMlogin"

describe('datadriven test',function  ()  {
    before(function(){
        cy.fixture("logindata").then(function(data){
            this.data = data;
        }) 
    })
   
    it('orangehrm multipleset of data',function  () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(login.usernameInput()).type(this.data.username)
        cy.get(login.passwordInput()).type(this.data.password)
        cy.get(login.submitButton()).click()
        cy.contains(login.errorMessage()).should("be.visible")
      
    })
  })