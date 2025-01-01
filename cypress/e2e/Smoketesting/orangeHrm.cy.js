//const cypress=require("cypress")
//const {it}=require("mocha")
describe("Verify Login Functrionality", () => {

  it.only("positive Login Test ", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("admin")
    cy.get('[name="password"]').type("admin123")
    cy.get('[type="submit"]').click()
    cy.xpath('//ul[@class="oxd-main-menu"]/li[2]').click()
   // cy.get('[.class="oxd-main-menu-item active toggle"]').click()
   // cy.get('[class="oxd-icon bi-list oxd-topbar-header-hamburger"]').click
    //cy.contains('PIM').click
    //cy.get('a[href="/web/index.php/pim/viewPimModule"]').click
   // cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click
    //cy.contains("PIM").click
    //cy.get('li[class="oxd-main-menu-item-wrapper"]').eq(5).click
    //cy.get('//ul[@class="oxd-main-menu"][]')
   // cy.get('//p[text()="Forgot your password? "]').should('be.visible')
    //cy.get('//p[text(),"Forgot your password? "]').click
 // cy.get('//p[contains(.,"Forgot your password? ")]').click
 // cy.contains('Forgot your password? ')
//cy.get('[class="oxd-topbar-body-nav-tab --visited"]').click
//cy.xpath('//ul[@class="oxd-main-menu"]/li').should('have.lenth',11)
//cy.xpath('//ul[@class="oxd-main-menu"]/li[2]').click()
//cy.contains('Add Employee').click 

//cy.get('[class="oxd-topbar-body-nav-tab --visited"]').click
//cy.get('[class="oxd-icon-button oxd-main-menu-button"]').click()
// cy.get('[name="firstName"]').type("anil")
// cy.get('[placeholder="Last Name"]').type("kumar")
// cy.get('[type="submit"]').click
//cy.get('[class="oxd-icon bi-caret-down-fill"]').click


  });
});
