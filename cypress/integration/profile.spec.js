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
  it('clicking "みんなの洋楽ランキング" navigates to a new url', function() {
    cy.visit('https://festive-yonath-a04e1e.netlify.com/')
    
    // 先頭の要素がクリックされ、/portfolio/1する
    cy.get('.portfolio-item-caption').first().click()
    cy.url().should('include', '/portfolio/1')

    // 全ての要素をクリック。最後のアサーションのみ評価される（つまり/portfolio/1）は評価されない
    // cy.get('.portfolio-item-caption').click({ multiple: true })
    // cy.url().should('include', '/portfolio/4')
  })
})
