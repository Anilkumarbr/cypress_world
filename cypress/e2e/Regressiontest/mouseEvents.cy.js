describe ("Assignment In Opencart.com ",()=>{
    it("MouseHover",()=>{
      cy.visit("https://demo-opencart.com/ ")
      //cy.get('.nav > :nth-child(1) > .dropdown-toggle').click()
      cy.get('.nav > :nth-child(1) > .dropdown-toggle').click()
      cy.get('[class="nav-link dropdown-toggle"]').first().click()

    })
    it.only("DoubleClick",()=>{
  
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
          
        
        //cy.get('.context-menu-one').trigger('contextmenu')
        cy.get('.context-menu-one').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible')


    })
})