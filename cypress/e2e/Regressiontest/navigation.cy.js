describe ("Pratice ",()=>{

    it("checkboxes",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[name="username"]').type('admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
     
        cy.contains('Dashboard').should('have.text','Dashboard')
        cy.screenshot("dashboard")
       cy.xpath('//ul[@class="oxd-main-menu"]//li[1]').click()
       cy.wait(4000)
       cy.go(1)
       cy.xpath('//ul[@class="oxd-main-menu"]//li[3]').click()
       cy.go(-1)
       cy.wait(5000)
       cy.reload()
        
    })
    it.only("navigations",()=>{
    cy.visit("https://demo-opencart.com/")
    cy.get('[name="search"]').type("hello")
    cy.get('[class="nav-item dropdown"]').first().click()
    cy.go("back")
    
    })
})