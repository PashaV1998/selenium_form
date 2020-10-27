// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
// 2. Login with invalid creds and check validation error
// 3. Logout from app and assert you successfully logged out
/// <reference types="Cypress" />
it('Login with valid data', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('[id="username"]').type('tomsmith')
    cy.get('[id="password"]').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('.flash.success').contains('You logged into a secure area!').should('exist')
})

it('Login with invalid data', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('[id="username"]').type('pasha')
    cy.get('[id="password"]').type('pasha')
    cy.get('.radius') .click() 
    cy.get('.flash.error').contains('Your username is invalid!').should('exist')
})

it('Login with valid data', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('[id="username"]').type('tomsmith')
    cy.get('[id="password"]').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('.button.secondary.radius').click()
    cy.get('[id="flash"]').contains('You logged out of the secure area!').should('exist')
})