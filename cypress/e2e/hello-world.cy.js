/// <reference types="cypress" />

describe('Basic tests', () => {
    it('test one',()=>{
        cy.visit('https://codedamn.com')
    })

    it('test two',()=>{
        cy.visit('https://nidhi8595.github.io/HTML_CSS_PROJECTS/Portfolio/')
        cy.contains('Portfolio', { timeout: 10000 }).should('be.visible') // way 1:- don't use this way if you don't want your test to fail in future if text changes

        cy.get('div > a') // way 2

        cy.get('[id=skills]') // way 3:- best way in case the style or text changes
       
    })

    //Testing on different devices
    it('test three',()=>{
     cy.viewport(1280,720)
        cy.visit('https://nidhi8595.github.io/HTML_CSS_PROJECTS/Portfolio/')
    })

    // only running this test
    it('test four',()=>{
        cy.visit('https://nidhi8595.github.io/HTML_CSS_PROJECTS/Portfolio/')
        cy.contains('React.js', { timeout: 10000 }).should('be.visible').click()
        cy.get('#projects').should('be.visible')

        cy.go('back') 

        cy.reload()
    })

    it.only('test five',()=>{
        cy.visit('https://swiftmark-forge-main.vercel.app/')
        cy.contains('Sign In').should('be.visible').click()

        cy.get('[id=email]').type('neelakshikadyan@gmail.com')
        cy.get('[id=password]').type('123456')

        cy.get('button').contains('Sign In').click()

        cy.log('Current URL is ' + cy.url())


        // now with wrong credentials

        cy.visit('https://swiftmark-forge-main.vercel.app/') 

        cy.contains('Sign In').should('be.visible').click()

        cy.get('[id=email]').type('neelakshikadyan@gmail.com')
        cy.get('[id=password]').type('1234')

        cy.get('button').contains('Sign In').click()
    })
})