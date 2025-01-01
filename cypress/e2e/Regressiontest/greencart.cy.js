describe("assignment",()=>{

    it("greenncart",()=>{

    cy.visit("https://greencart.org.in")
    cy.get('[class="buzz-categoryimage"]').first().click()
    cy.contains("Create Your Account").click()

    })
})