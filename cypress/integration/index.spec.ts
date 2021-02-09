describe("Index Page", () => {
    before(() => {
        cy.visit("localhost:3000")
    })

    it("should contain at least 1 triangle", () => {
        const triangle = cy.get(".Triangle")

        triangle.should('exist')
        triangle.should('have.lengthOf', 4)
    })
})