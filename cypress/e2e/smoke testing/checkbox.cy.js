describe('check box scripts', () => {
    it('redfix checkbox scripts', () => {
      cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
      cy.get('input[type="checkbox"]').check().should("be.checked")
      cy.wait(3000)
      cy.get('input[name^="gender"]').first().check().should("be.checked")
      cy.get("#country").select(0)
      cy.get('select[name^="city"]').select("Bangalore")
      cy.get('input[value="m"]').check().should("be.checked")
      cy.get('input[value="f"]').check().should("be.checked")
    })
    it.only('https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html', () => {
       cy.visit("https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html")
       cy.get('#nome').type("manju")
       cy.get('#sobrenome').type("C")
       cy.get('#email').type("manja.manjunatha97@gmail.com")
       cy.get('input[value="frontend"]').check().should("be.checked")
       cy.get('#senioridade').select("Junior")
       cy.get('input[name="tecnologia3"]').check({force:true}).should("be.checked")
       cy.get('#experiencia').type("everythig ok")
       cy.get('button[type="submit"]').click()

  })
})