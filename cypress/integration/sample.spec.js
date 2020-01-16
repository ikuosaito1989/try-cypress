describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
  it('Visits the My Profile', function() {
    cy.visit('https://festive-yonath-a04e1e.netlify.com/')
  })
})