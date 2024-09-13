const availablefixture = [
    {
        "name":"errormessagedata1",
        "context":"1"
    },
    {
        "name":"errormessagedata2",
        "context":"2"
    }

]
import login from"../../pageobjectmodel/orangeHRMlogin"
describe('verify the datadriven test',function(){
    availablefixture.forEach(function(afixture){
        describe(afixture.context,function(){
          before(function(){
            cy.fixture(afixture.name).then(function(data){
                this.data = data
            })
          })
          it("verify the data driven testing",function(){
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.get(login.usernameInput()).type(this.data.username)
            cy.get(login.passwordInput()).type(this.data.password)
            cy.get(login.submitButton()).click()
            cy.contains(login.errorMessage()).should("be.visible")
          })
        })
    })
})
