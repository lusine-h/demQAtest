describe('Google search page', () => {
    beforeEach(() => {
        cy.visit("https://www.google.com/")
        cy.url().should('eq', 'https://www.google.com/')
        cy.get('[alt="Google"]').should('be.visible')
        cy.get('[class="gb_Se"]>a').should('be.visible')
    })

    it('Open Google search page', () => {
        cy.get('[name="q"]').type('Software testing')
        cy.get('div[jsname] [name="btnK"]').click()
        cy.get('[name="q"]').should('be.visible')
            .should('have.value', 'Software testing')
    })
})
