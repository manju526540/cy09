import login from"../../pageobjectmodel/orangeHRMlogin"
describe('sessions test cases', () => {
    beforeEach(()=>{
        cy.session('loginpage',()=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.get(login.usernameInput()).type("Admin")
            cy.get(login.passwordInput()).type('admin123')
            cy.get(login.submitButton()).click
        })
    })
    it('Orange hrm test cases', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')
      cy.addemployees("manju",'C')
    })
  })