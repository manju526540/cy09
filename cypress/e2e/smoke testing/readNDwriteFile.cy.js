import login from"../../pageobjectmodel/orangeHRMlogin"
describe('readNDwritefile test cases', () => {
    it('first test cases', () => {
      cy.writeFile('cypress/fixtures/WriteFiledata/text.txt',"manju\n")
      cy.readFile('cypress/fixtures/WriteFiledata/text.txt').should('exist')
    })
    it('2nd test cases', () => {
        cy.writeFile('cypress/fixtures/WriteFiledata/text.txt',"Praveen",{flag:"a+"})
        cy.readFile('cypress/fixtures/WriteFiledata/text.txt').should('exist')
      })
      it('3rd json file test cases', () => {
        cy.writeFile('cypress/fixtures/WriteFiledata/jsonFile.json',{firstname:'manju',lastname:"C"})
        cy.readFile('cypress/fixtures/WriteFiledata/jsonFile.json').should("exist")
        cy.readFile('cypress/fixtures/WriteFiledata/jsonFile.json').its("firstname").should('eq',"manju")
      })
      it('4th Orangehrm data append the folderstructure test cases', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(login.usernameInput()).type('Admin')
        cy.get(login.passwordInput()).type("admin123")
        cy.get(login.submitButton()).click()
        cy.contains("PIM").should('be.visible')
        cy.get('p').contains('Time at Work').then((txt)=>{
            let textvalue = txt.text()
            cy.log(textvalue)
        cy.writeFile("cypress/fixtures/WriteFiledata/OrangrHrmtext.txt",textvalue)  
        cy.readFile('cypress/fixtures/WriteFiledata/OrangrHrmtext.txt').should('exist')
        cy.readFile('cypress/fixtures/WriteFiledata/jsonFile.json').then((data)=>{
            data.textdata = {"orangeHrmdata":textvalue}
        cy.writeFile('cypress/fixtures/WriteFiledata/jsonFile.json',JSON.stringify(data))    
        })
        })
      })
      it('5th append the data from the fixture folder', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('p[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').then((txt)=>{
            let elementtxt = txt.text()
            cy.log(elementtxt)
            cy.writeFile('cypress/fixtures/WriteFiledata/eletxt.json',{"value":elementtxt})
            cy.readFile("cypress/fixtures/WriteFiledata/jsonFile.json").then((data)=>{
                data.orangrHrmtxt = {"forgetText":elementtxt}
            cy.writeFile('cypress/fixtures/WriteFiledata/jsonFile.json',JSON.stringify(data))    
            })
        })
      })
  })