// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')
import login from"../pageobjectmodel/orangeHRMlogin"

import addemployee from '../pageobjectmodel/addemployedata.po.cy';
Cypress.Commands.add('login', (username,password) => { 
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(login.usernameInput()).type(username)
    cy.get(login.passwordInput()).type(password)
    cy.get(login.submitButton()).click()
    
 })
 Cypress.Commands.add('addemployees', (firstName,lastname) => { 
    //cy.contains(addemployee.addemployeemenuIteam()).click
    cy.get(addemployee.FirstNameInput()).type(firstName)
    cy.get(addemployee.LastnameInput()).type(lastname)
    cy.get(addemployee.SubmitBtn()).click()
    cy.contains(addemployee.SuccesfullyMsg()).should("be.visible")
    
 })