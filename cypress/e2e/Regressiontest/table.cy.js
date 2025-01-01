describe("handling table",()=>{
    it("tables",()=>{
cy.visit('https://demo3x.opencartreports.com/admin')
cy.get('[name="username"]').type('demo')
cy.get('[name="password"]').type('demo')
cy.get('[type="submit"]').click()
cy.get('#menu-customer > .parent').click()
cy.get('#collapse5 > :nth-child(1) > a').click()
cy.contains('Customers').should('be.visible')
cy.get('[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','10')
cy.get('[class="table table-bordered table-hover"]>tbody>tr').should('have.length','7')

})
}
)