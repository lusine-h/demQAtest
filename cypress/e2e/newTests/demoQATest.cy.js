Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe('Tests on DemoQA page', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com')
        cy.url().should('eq', 'https://demoqa.com/')
        cy.title().should('eq', 'ToolsQA')
    })

    // it('Test Check box tab', () => {
    //     cy.contains('Elements').click()
    //     cy.url().should('contain', 'elements')
    //     cy.get('.main-header').should('contain', 'Elements')
    //     cy.get('[class="left-pannel"] [class="element-group"]:nth-child(1) .menu-list #item-0')
    //         .click()
    //     cy.url().should('contain', 'text-box')
    //     cy.get('.main-header').should('contain', 'Text Box')
    //     cy.get('#userName').type('Test first name')
    //     cy.get('#userEmail').type('test@exapmle.com')
    //     cy.get('#currentAddress').type('Test current address')
    //     cy.get('#permanentAddress').type('Test permanent address')
    //     cy.get('#submit').click()
    //     cy.get('#name').should('contain', 'Test first name')
    //     cy.get('#email').should('contain', 'test@exapmle.com')
    //     cy.get('p#currentAddress').should('contain', 'Test current address')
    //     cy.get('p#permanentAddress').should('contain', 'Test permanent address')
    // })

    it('Web tables tab', () => {
        cy.contains('Elements').click()
        cy.url().should('contain', 'elements')
        cy.get('.main-header').should('contain', 'Elements')
        cy.contains('Web Tables').click()
        cy.url().should('contain', 'webtables')
        cy.get('.main-header').should('contain', 'Web Tables')
        cy.get('#addNewRecordButton').click()
        cy.get('.modal-content').should('be.visible')
        cy.get("[id=firstName]").type("test name")
        cy.get("[id=lastName]").type("last name")
        cy.get("[id=userEmail]").type("user@email.com")
        cy.get("[id=age]").type("18")
        cy.get("[id=salary]").type("12457")
        cy.get("[id=department]").type("test")
        cy.get("[id=submit]").click()
        cy.get(".rt-tbody >div:nth-child(4)")
            .should("contain","test name")
            .should("contain","last name")
            .should("contain","18")
            .should("contain","user@email.com")
            .should("contain","12457")
            .should("contain","test")
        cy.get('#edit-record-4').click({force:true})
        cy.get('.modal-content').should('be.visible')
        cy.get("[id=firstName]").clear().type("new test name")
        cy.get("[id=lastName]").clear().type("new last name")
        cy.get("[id=userEmail]").clear().type("newuser@email.com")
        cy.get("[id=age]").clear().type("22")
        cy.get("[id=salary]").clear().type("0012457")
        cy.get("[id=department]").clear().type("new test")
        cy.get("[id=submit]").click()
        cy.get(".rt-tbody >div:nth-child(4)")
            .should("contain","new test name")
            .should("contain","new last name")
            .should("contain","22")
            .should("contain","newuser@email.com")
            .should("contain","0012457")
            .should("contain","new test")
        cy.get("#delete-record-4").click()
    })
})