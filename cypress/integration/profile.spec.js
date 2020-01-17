/// <reference types="Cypress" />
describe('My First Test', function() {
  it('Visits the My Profile', function() {
    cy.visit('https://festive-yonath-a04e1e.netlify.com/')
    cy.contains('みんなの洋楽ランキング')
  })
  it('clicks the link "みんなの洋楽ランキング"', function() {
    cy.visit('https://festive-yonath-a04e1e.netlify.com/')
    cy.contains('みんなの洋楽ランキング').click()
  })
})
