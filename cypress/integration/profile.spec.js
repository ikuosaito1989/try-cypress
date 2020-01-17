/// <reference types="Cypress" />
describe('プロフィールページ', function() {
  it('ラベルが表示されること', function() {
    cy.visit('https://festive-yonath-a04e1e.netlify.com/')
    cy.contains('みんなの洋楽ランキング')
  })

  it('ラベルにクリック出来ること', function() {
    cy.visit('https://festive-yonath-a04e1e.netlify.com/')
    cy.contains('みんなの洋楽ランキング').click()
  })

  it('ポートフォリオにクリックし、詳細画面へ遷移出来ること', function() {
    cy.visit('https://festive-yonath-a04e1e.netlify.com/')
    cy.get('.portfolio-item-caption').first().click()
    cy.url().should('include', '/portfolio/1')

    // 全ての要素をクリック。最後のアサーションのみ評価される（つまり/portfolio/1）は評価されない
    // cy.get('.portfolio-item-caption').click({ multiple: true })
    // cy.url().should('include', '/portfolio/4')
  })
})
