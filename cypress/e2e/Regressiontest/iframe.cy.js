describe("Handling iframe ",()=>{
    it("approach 1",()=>{
        cy.visit('https://demo.automationtesting.in/Frames.html')
      const iframe = cy.get('[id="singleframe"]')
          .its('0.contentDocument.body')
          .should('be.visible')
          .then(cy.wrap)

          iframe.clear().type("asdfgh")
    })
    it.only("the",()=>
    {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    })
})