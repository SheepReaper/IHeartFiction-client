describe('Index Page', () => {
  before(() => {
    cy.visit('localhost:3000')
  })

  it('should contain at least 1 triangle', function () {
    cy.get('.triangle').should('exist').should('have.lengthOf', 4)
  })
})
