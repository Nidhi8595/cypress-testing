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
    
})