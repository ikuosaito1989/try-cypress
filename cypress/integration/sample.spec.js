/// <reference types="Cypress" />
describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
  it('finds the content "type"', function() {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
  })
  it('clicks the link "type"', function() {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })
})
