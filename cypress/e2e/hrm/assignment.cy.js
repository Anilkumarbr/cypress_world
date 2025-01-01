describe ("Assignment In OrangeHrm ",()=>{
    it("Login Part",()=>{


        // before("",()=>{
        //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //     cy.get('[name="username"]').type("admin")
        //     cy.get('[name="password"]').type("admin123")
        //     cy.get('[type="submit"]').click()
        // })
        
        
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('[name="username"]').type("admin")
    cy.get('[name="password"]').type("admin123")
    cy.get('[type="submit"]').click()
    //cy.get('[class="oxd-main-menu-item active"]').click()
    cy.contains('PIM').click()
    cy.contains('Add Employee').click()
    cy.get('[name="firstName"]').type("poll")
    cy.get('[name="middleName"]').type("kumar")
    cy.get('[name="lastName"]').type("Br")
    cy.get('[type="submit"]').click()
    cy.contains('Employee List').click()
    cy.wait(2000)
    cy.get('[placeholder="Type for hints..."]').first().type("anil")
    cy.get('[type="submit"]').click()
    cy.wait(3000)
    cy.get('[class="oxd-icon-button oxd-table-cell-action-space"]').first().click()
    cy.get('[name="firstName"]').clear()
    cy.wait(3000)
    cy.get('[name="firstName"]').type("suneel")
    //cy.get('class="oxd-input oxd-input--active"').eq('3').type("0258")

    cy.contains('Male').click()
    //cy.get('[type="submit"]').first().click()
    cy.get('[type="submit"]').eq('1').click()
    cy.contains('Employee List').click()
    cy.get('[placeholder="Type for hints..."]').first().type("anil")
    cy.get('[class="oxd-icon bi-trash"]').eq('1').click()
    //cy.get('[class="oxd-icon bi-trash"]').first().click()
    cy.get('[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]').click()
    cy.contains('Employee List').click()
 
 
    // after("",()=>{

 })



    })