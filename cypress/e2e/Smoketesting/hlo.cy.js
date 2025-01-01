describe("Verify Login Functrionality", () => {

    it.only("Singal File Upload", () => {
      cy.visit("https://the-internet.herokuapp.com/upload")
      cy.get('[name="file"]').attachFile('')

    })
})